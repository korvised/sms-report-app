import { format } from "date-fns"
import { IFilter } from "@/types"

export const initialFilter: IFilter = {
  search: "",
  chanel: "",
  provider: undefined,
  start_date: format(new Date(), "yyyy-MM-dd"),
  end_date: format(new Date(), "yyyy-MM-dd"),
  page: 1,
  size: 10,
}
