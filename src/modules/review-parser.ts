/**
 * This module handles parsing review data from html into objects
 * that can be used to calculate scores and display data
 */

import cheerio from "cheerio"

const selectors = {
  review: ".review-entry",
  description: ".review-content",
  rating: ".dealership-rating",
  user: ".review-wrapper",
  date: ".review-date",
}

export type ParsedReview = {
  date: string
  description: string
  rating: number
  user: string
}

/**
 * The functions used for finding values within the html are wrapped with this
 * function, to consolidate error handling into one place. If any of these values
 * can't be found (e.g. html changes), an error will print with the missing field name.
 */
const errOnEmpty = (
  field: string,
  parseFn: (elem: cheerio.TagElement) => any
) => (elem: cheerio.TagElement) => {
  const value = parseFn(elem)

  // "Missing" values might include empty strings or undefined, but 0 could be valid rating
  if (typeof value !== "number" && !value) {
    throw new Error(
      `Review ${field} could not be parsed. Html structure may have changed...`
    )
  }

  return value
}

export const findUser = errOnEmpty("user", (elem: cheerio.TagElement) =>
  cheerio(elem)
    .find(`${selectors.user} > div:first-child > span`)
    .text()
    .slice(2)
)

export const findDate = errOnEmpty("date", (elem: cheerio.TagElement) =>
  cheerio(elem).find(`${selectors.date} > div:first-child`).text()
)

export const findDescription = errOnEmpty(
  "description",
  (elem: cheerio.TagElement) =>
    cheerio(elem).find(selectors.description).first().text()
)

/**
 * Extracts the dealer rating for a review, by finding and parsing the class name
 * that contains the rating value (e.g. rating-50)
 */
export const findRating = errOnEmpty("rating", (elem: cheerio.TagElement) => {
  const ratingRegExp = /rating-\d/

  const ratingClass = cheerio(elem)
    .find(selectors.rating)
    .children()
    .filter((_, elem) => {
      const className = cheerio(elem).attr("class")
      return !!className && ratingRegExp.test(className)
    })
    .first()
    .attr("class")
    ?.split(" ")
    .find((className) => className && ratingRegExp.test(className))

  if (ratingClass) {
    const [_, rating] = ratingClass.split("-")
    return parseInt(rating, 10)
  }
})

export const parseReviews = (html: string): ParsedReview[] => {
  const $reviews = cheerio.load(html)(selectors.review)

  return $reviews.get().map((elem: cheerio.TagElement) => ({
    date: findDate(elem),
    description: findDescription(elem),
    rating: findRating(elem),
    user: findUser(elem),
  }))
}
