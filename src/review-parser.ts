import cheerio from "cheerio"

export const reviewSelector = ".review-entry"
export const descriptionSelector = ".review-content"
export const ratingSelector = ".dealership-rating"

type ParsedReview = {
  description: string
  rating: number
}

export const parseReviews = (html: string): ParsedReview[] => {
  const $reviews = cheerio.load(html)(reviewSelector)
  return $reviews.get().map((elem: cheerio.TagElement) => ({
    description: findDescription(elem),
    rating: findRating(elem),
  }))
}

export const findDescription = (elem: cheerio.TagElement) =>
  cheerio(elem).find(descriptionSelector).first().text()

export const findRating = (elem: cheerio.TagElement) => {
  const ratingRegExp = /rating-\d/
  // Will result in the class name with the actual rating
  const ratingClass = cheerio(elem)
    .find(ratingSelector)
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
