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

const findUser = (elem: cheerio.TagElement) =>
  cheerio(elem)
    .find(`${selectors.user} > div:first-child > span`)
    .text()
    .slice(2)

const findDate = (elem: cheerio.TagElement) => {
  return cheerio(elem).find(`${selectors.date} > div:first-child`).text()
}

const findDescription = (elem: cheerio.TagElement) =>
  cheerio(elem).find(selectors.description).first().text()

/**
 * Extracts the dealer rating for a review, by finding and parsing the class name
 * that contains the rating value (e.g. rating-50)
 */
const findRating = (elem: cheerio.TagElement) => {
  // Accounts for the fact that there are multiple classes that are prefixed with "rating-"
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

  if (!ratingClass) {
    throw new Error("Rating couldn't be parsed")
  }

  const [_, rating] = ratingClass.split("-")
  return parseInt(rating, 10)
}

export const parseReviews = (html: string): ParsedReview[] => {
  const $reviews = cheerio.load(html)(selectors.review)

  return $reviews.get().map((elem: cheerio.TagElement) => ({
    date: findDate(elem),
    description: findDescription(elem),
    rating: findRating(elem),
    user: findUser(elem),
  }))
}
