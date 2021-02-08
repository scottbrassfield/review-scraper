import {
  addScoreToReview,
  analyzeSentiment,
  calculatePositivityScore,
  countCapitals,
  countExclamations,
} from "../modules/score-calculator"
import { isNumber } from "../modules/utils"
import { testReview } from "./test-data/test-reviews"

it("analyzeSentiment should return a normalized sentiment score", () => {
  const sentimentScore = analyzeSentiment(testReview.description)

  expect(isNumber(sentimentScore)).toBe(true)
})

describe("countExclamations", () => {
  it("should return correct number of exclamations", () => {
    const exclamations = countExclamations("hello!!! world!!")

    expect(exclamations).toBe(5)
  })

  it("should return 0 if no exclamations", () => {
    const exclamations = countExclamations("hello world")

    expect(exclamations).toBe(0)
  })
})

describe("countCapitals", () => {
  it("should return correct number of capitals", () => {
    const capitals = countCapitals("HELLO world")

    expect(capitals).toBe(5)
  })

  it("should return 0 if no capitals", () => {
    const capitals = countCapitals("hello world")

    expect(capitals).toBe(0)
  })
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
