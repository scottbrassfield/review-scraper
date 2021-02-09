/**
 * This module contains the functions that handle printing data to the console
 */

import chalk from "chalk"
import { ReviewWithScore } from "./score-calculator"

const printNewline = () => console.log("\n")

export const printReviewFetching = (pageCount: number) => {
  console.log(
    `Calculating review scores for the first ${pageCount} pages of dealerratings.com...`
  )
}

const printRow = (label: string, value: any) => {
  console.log(`${chalk.gray(label)}: ${value}`)
}

const printReview = (review: ReviewWithScore, position: number) => {
  console.log(
    chalk.blue(
      `--------------------------- #${position + 1} -------------------------\n`
    )
  )

  const { user, date, positivityScore, description } = review
  printRow("User", user)
  printRow("Date", date)
  printRow("Positivity score", positivityScore)
  printRow("Review text", description)
  printNewline()
}

export const printReviews = (reviews: ReviewWithScore[]) => {
  console.log(
    chalk.green(
      `\nDone! Here are the top ${reviews.length} reviews, sorted by most positive:\n`
    )
  )

  reviews.forEach(printReview)
}

export const printError = (error: any) => {
  console.log(chalk.red("\nUh oh, something went wrong. See details below:\n"))
  console.log(error)
}
