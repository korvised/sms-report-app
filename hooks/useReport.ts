import { useState } from "react"
import { useQuery } from "react-query"
import { fetchReport, validateMsisdn } from "@/services"
import { IFilter, IPagination, ITransaction } from "@/types"
import { initialFilter, QUERY_KEYS } from "@/constants"
import { format } from "date-fns"

export const useReport = () => {
  const [preFilter, setPreFilter] = useState<IFilter>(initialFilter)
  const [filter, setFilter] = useState<IFilter>(initialFilter)

  const { data, isLoading, isError, error } = useQuery<
    IPagination<ITransaction[]>
  >({
    queryKey: [
      QUERY_KEYS.transactions,
      filter.search,
      filter.chanel,
      filter.provider,
      filter.start_date,
      filter.end_date,
      filter.page,
      filter.size,
    ],
    queryFn: () => fetchReport(filter),
  })

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setFilter({
      ...filter,
      chanel: preFilter.chanel,
      search: validateMsisdn(preFilter.search),
      start_date: format(new Date(preFilter.start_date), "yyyy-MM-dd"),
      end_date: format(new Date(preFilter.end_date), "yyyy-MM-dd"),
    })
  }

  return {
    filter,
    preFilter,
    data,
    isLoading,
    isError,
    error,
    setFilter,
    setPreFilter,
    handleSearch,
  }
}
