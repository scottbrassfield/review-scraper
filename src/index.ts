import { pageCount, reviewCount } from "./config"
import { printReviewFetching, printReviews } from "./output"
import { findTopReviews } from "./utils"
import { fetchAndScoreReviews } from "./web-requester"

const showTopPositiveReviews = async () => {
  printReviewFetching(pageCount)

  const scoredReviews = await fetchAndScoreReviews()
  const topReviews = findTopReviews(scoredReviews, reviewCount)

  printReviews(topReviews)
}

showTopPositiveReviews()
