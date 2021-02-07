import type { ParsedReview } from "../../review-parser"

export const testReviews: ParsedReview[] = [
  {
    description: "This is the best thing I've ever!!!!! I loved it so much!!!",
    rating: 50,
    user: "user1",
    date: "Jan 1, 2020",
  },
  {
    description: "This is good thanks!",
    rating: 48,
    user: "user2",
    date: "Jan 2, 2020",
  },
  {
    description: "This is pretty okay I guess",
    rating: 40,
    user: "user3",
    date: "Jan 3, 2020",
  },
  {
    description: "Not gonna lie this is terrible. Worst thing in the world",
    rating: 20,
    user: "user4",
    date: "Jan 4, 2020",
  },
]
