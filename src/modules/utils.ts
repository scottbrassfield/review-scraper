import { ReviewWithScore } from "./score-calculator"

export const isString = (value: any) => typeof value === "string"
export const isNumber = (value: any) => typeof value === "number"

export const findTopReviews = (reviews: ReviewWithScore[], limit: number) =>
  reviews.sort(sortByScore).slice(0, limit)

export const sortByScore = (a: ReviewWithScore, b: ReviewWithScore) =>
  b.positivityScore - a.positivityScore
