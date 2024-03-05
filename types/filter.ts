export type ChannelType = "EPIN" | "CTSV" | string
export type ProviderType = "ETL" | "LTC" | "UNITEL"

export interface IFilter {
  search: string
  chanel: ChannelType
  provider?: ProviderType
  start_date: string
  end_date: string
  page: number
  size: number
}
