export interface IPagination<T> {
  data: T
  page: number
  size: number
  total_pages: number
  total_items: number
}
