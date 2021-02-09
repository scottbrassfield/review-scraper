import cheerio from "cheerio"
import {
  testReviewHtml,
  testRating,
  testDescription,
  testUser,
  testDate,
  testBadHtml,
} from "./test-data/test-html"
import {
  parseReviews,
  findDate,
  findDescription,
  findRating,
  findUser,
} from "../modules/review-parser"

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

it.each([
  ["findDate", findDate],
  ["findDescription", findDescription],
  ["findRating", findRating],
  ["findUser", findUser],
])("%s should throw an error if value not found", (_, parseFn: any) => {
  const elem = cheerio.load(testBadHtml)("div")
  expect(() => parseFn(elem)).toThrow()
})
