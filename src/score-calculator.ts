import Sentiment from "sentiment"
import { ParsedReview } from "./review-parser"

export const analyzeSentiment = (text: string) => {
  const sentiment = new Sentiment()
  return sentiment.analyze(text).comparative
}

/**
 * Score is calculated based on two core factors:
 *  - Overall rating provided by the user (ranges from 00 to 50)
 *  - Sentiment score of the review text (see https://github.com/thisandagain/sentiment)
 *
 * The rating and the sentiment are multiplied together to produce the "overall positivity" score
 */
export const calculatePositivityScore = (review: ParsedReview) => {
  const { description, rating } = review
  const sentimentScore = analyzeSentiment(description)
  return sentimentScore * rating
}
