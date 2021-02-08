/**
 * This module contains functions used to calculate the "positivity score" that is used to
 * sort and select the top-most positive reviews
 */

import Sentiment from "sentiment"
import { ParsedReview } from "./review-parser"

export type ReviewWithScore = ParsedReview & {
  positivityScore: number
}

export const analyzeSentiment = (text: string) => {
  const sentiment = new Sentiment()
  return sentiment.analyze(text).score
}

export const countExclamations = (text: string) => text.match(/!/g)?.length ?? 0

export const countCapitals = (text: string) => text.match(/[A-Z]/g)?.length ?? 0

/**
 * Score is calculated by adding together the following factors:
 *  - Overall rating provided by the user (ranges from 0 to 50)
 *  - Sentiment score of the review text (see https://github.com/thisandagain/sentiment)
 *  - Number of exclamation points
 *  - Number of capital letters
 */
export const calculatePositivityScore = (description: string, rating: number) =>
  rating +
  analyzeSentiment(description) +
  countExclamations(description) +
  countCapitals(description)

export const addScoreToReview = (review: ParsedReview): ReviewWithScore => ({
  ...review,
  positivityScore: calculatePositivityScore(review.description, review.rating),
})
