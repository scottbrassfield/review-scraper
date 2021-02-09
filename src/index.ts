import { pageCount, reviewCount } from "./config"
import { printError, printReviewFetching, printReviews } from "./modules/output"
import { findTopReviews } from "./modules/utils"
import { fetchAndScoreReviews } from "./modules/web-requester"

/**
 * Entry point of the application. It is wrapped in an async function to account for limitations in Node.js
 * with top-level async await when using commonjs module system (to support older Node versions).
 */
const showTopPositiveReviews = async () => {
  printReviewFetching(pageCount)

  try {
    const scoredReviews = await fetchAndScoreReviews()
    const topReviews = findTopReviews(scoredReviews, reviewCount)
    printReviews(topReviews)
  } catch (error) {
    printError(error)
  }
}

showTopPositiveReviews()
