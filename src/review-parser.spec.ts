import { testReviewHtml, testRating, testDescription } from "./test/test-data"
import { parseReviews } from "./review-parser"

it("parseReviews should return parsed review objects with description and rating", () => {
  const actualReviews = parseReviews(testReviewHtml)
  expect(actualReviews).toEqual([
    { description: testDescription, rating: testRating },
  ])
})
