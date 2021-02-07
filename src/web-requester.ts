import got from "got"

const dealerUrl =
  "https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685"

export const fetchReviewPage = async (page: number) => {
  const { body } = await got(`${dealerUrl}/page${page}`)
  return body
}
