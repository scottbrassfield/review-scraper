import { ReviewWithScore } from "../modules/score-calculator"
import { isString } from "../modules/utils"
import { fetchAndScoreReviews, fetchReviewPage } from "../modules/web-requester"

it("fetchReviewPage should return an html page", async () => {
  const html = await fetchReviewPage(1)
  expect(isString(html)).toBe(true)
})

it("fetchAndScoreReviews should return parsed reviews with positivity scores", async () => {
  const scoredReviews = await fetchAndScoreReviews()
  expect(scoredReviews.length).toBeGreaterThan(0)

  const reviewKeys: (keyof ReviewWithScore)[] = [
    "date",
    "description",
    "positivityScore",
    "rating",
    "user",
  ]

  scoredReviews.forEach((review) => {
    expect(review).toContainAllKeys(reviewKeys)
  })
})
