import { IFilter } from "@/types/filter"

export interface IPaginationProps {
  totalItems: number
  totalPages: number
  currentPage: number
  pageSize: number
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

export interface IPagination<T> {
  data: T
  page: number
  size: number
  total_pages: number
  total_items: number
}
