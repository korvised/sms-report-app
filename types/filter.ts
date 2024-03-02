export type ChanelType = "EPIN" | string
export type ProviderType = "ETL" | "LTC" | "UNITEL"

export interface IFilter {
  search: string
  chanel: ChanelType
  provider?: ProviderType
  start_date: string
  end_date: string
  page: number
  size: number
}
