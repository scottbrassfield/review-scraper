/**
 * This module contains functions that involve making any web requests
 */

import got from "got"
import { parseReviews } from "./review-parser"
import { addScoreToReview } from "./score-calculator"
import { pageCount, dealerUrl } from "../config"

export const fetchReviewPage = async (page: number) => {
  const { body } = await got(`${dealerUrl}/page${page}`)
  return body
}

/**
 * Handles fetching, parsing, and scoring review data in one function,
 * to allow for fetching and processing multiple pages concurrently
 */
export const fetchAndScoreReviews = async () => {
  const fetchAndProcess = (_: any, idx: number) =>
    fetchReviewPage(idx + 1)
      .then(parseReviews)
      .then((parsed) => parsed.map(addScoreToReview))

  const scoredReviews = await Promise.all(
    [...Array(pageCount)].map(fetchAndProcess)
  )

  return scoredReviews.flat()
}
