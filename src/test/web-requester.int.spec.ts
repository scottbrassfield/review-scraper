import { isString } from "../utils"
import { fetchReviewPage } from "../web-requester"

it("fetchReviewPage should return an html page", async () => {
  const html = await fetchReviewPage(1)
  expect(isString(html)).toBe(true)
})
