import {
  testReviewHtml,
  testRating,
  testDescription,
  testUser,
  testDate,
} from "./test-data/test-html"
import { parseReviews } from "../review-parser"

it("parseReviews should return parsed review objects with description and rating", () => {
  const actualReviews = parseReviews(testReviewHtml)
  expect(actualReviews).toEqual([
    {
      date: testDate,
      description: testDescription,
      rating: testRating,
      user: testUser,
    },
  ])
})
