import { printReviewFetching, printReviews } from "./output"
import { parseReviews } from "./review-parser"
import { addScoreToReview } from "./score-calculator"
import { findTopReviews } from "./utils"
import { fetchReviewPage } from "./web-requester"

const pageCount = 5
const reviewCount = 3

const fetchAndScoreReviews = async () => {
  const fetchAndProcess = (_: any, idx: number) =>
    fetchReviewPage(idx + 1)
      .then(parseReviews)
      .then((parsed) => parsed.map(addScoreToReview))

  const scoredReviews = await Promise.all(
    [...Array(pageCount)].map(fetchAndProcess)
  )

  return scoredReviews.flat()
}

const returnTopScores = async () => {
  printReviewFetching(pageCount)

  const scoredReviews = await fetchAndScoreReviews()
  const topReviews = findTopReviews(scoredReviews, reviewCount)

  printReviews(topReviews)
}

returnTopScores()
