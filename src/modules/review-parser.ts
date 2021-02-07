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

export const parseReviews = (html: string): ParsedReview[] => {
  const $reviews = cheerio.load(html)(selectors.review)

  return $reviews.get().map((elem: cheerio.TagElement) => ({
    date: findDate(elem),
    description: findDescription(elem),
    rating: findRating(elem),
    user: findUser(elem),
  }))
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

const findRating = (elem: cheerio.TagElement) => {
  const ratingRegExp = /rating-\d/

  // Represents the class name that contains the rating value (e.g. rating-50),
  // since there are multiple classes with that are prefixed with "rating-"
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
