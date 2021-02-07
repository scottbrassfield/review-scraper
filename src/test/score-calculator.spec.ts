import { analyzeSentiment, calculatePositivityScore } from "../score-calculator"
import { testReviews } from "./test-data/test-reviews"

const isNumber = (value: any) => typeof value === "number"

it("analyzeSentiment should return a normalized sentiment score", () => {
  const [review] = testReviews
  const sentimentScore = analyzeSentiment(review.description)

  expect(isNumber(sentimentScore)).toBe(true)
})

it("calculatePositiviyScore should return an 'overall positivity' score", () => {
  const [review] = testReviews
  const positivityScore = calculatePositivityScore(review)

  expect(isNumber(positivityScore)).toBe(true)
})
