import { findTopReviews, isNumber, isString } from "../utils"
import { testReviewsWithScore } from "./test-data/test-reviews"

describe("isNumber", () => {
  it("should return true if number is passed", () => {
    expect(isNumber(1)).toBe(true)
  })
  it("should return false if a non-number is passed", () => {
    expect(isNumber("notNumber")).toBe(false)
  })
})

describe("isString", () => {
  it("should return true if string is passed", () => {
    expect(isString("string")).toBe(true)
  })
  it("should return false if a non-string is passed", () => {
    expect(isString({})).toBe(false)
  })
})

describe("findTopReviews", () => {
  it("should return the top most positive reviews", () => {
    const topReviews = findTopReviews(testReviewsWithScore, 2)

    expect(topReviews).toHaveLength(2)
    // In our test data, only the top two reviews are greater than 1
    expect(topReviews.every((r) => r.positivityScore > 1)).toBe(true)
  })
})
