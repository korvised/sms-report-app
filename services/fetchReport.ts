import qs from "qs"
import { IFilter } from "@/types"
import { ROUTE_PATHS } from "@/constants"

const fetchReport = async (filter: IFilter) => {
  const query = qs.stringify(filter)
  const url =
    process.env.NEXT_PUBLIC_API_URL + ROUTE_PATHS.transactions + "?" + query

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }

  return response.json()
}

export default fetchReport
