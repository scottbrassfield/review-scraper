import {
  addScoreToReview,
  analyzeSentiment,
  calculatePositivityScore,
} from "../score-calculator"
import { isNumber } from "../utils"
import { testReview } from "./test-data/test-reviews"

it("analyzeSentiment should return a normalized sentiment score", () => {
  const sentimentScore = analyzeSentiment(testReview.description)

  expect(isNumber(sentimentScore)).toBe(true)
})

it("calculatePositiviyScore should return an 'overall positivity' score", () => {
  const { description, rating } = testReview
  const positivityScore = calculatePositivityScore(description, rating)

  expect(isNumber(positivityScore)).toBe(true)
})

it("addScoreToReview should return a review with a positivityScore appended", () => {
  const reviewWithScore = addScoreToReview(testReview)

  expect(reviewWithScore).toMatchObject(testReview)
  expect(reviewWithScore).toHaveProperty("positivityScore")
})
