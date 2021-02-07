import { pageCount, reviewCount } from "./config"
import { printReviewFetching, printReviews } from "./modules/output"
import { findTopReviews } from "./modules/utils"
import { fetchAndScoreReviews } from "./modules/web-requester"

const showTopPositiveReviews = async () => {
  printReviewFetching(pageCount)

  const scoredReviews = await fetchAndScoreReviews()
  const topReviews = findTopReviews(scoredReviews, reviewCount)

  printReviews(topReviews)
}

showTopPositiveReviews()
