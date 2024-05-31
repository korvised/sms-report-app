export interface ITransaction {
  id: number
  msisdn: string
  content: string
  channel: string
  provider: string
  func_name: string
  entries: IEntry[]
  status: boolean
  created_at: string
  updated_at: string
}

export interface IEntry {
  id: number
  transaction_id: number
  msisdn: string
  provider: string
  resend: boolean
  status: "SUCCESS" | string
  result: string
  created_at: string
  updated_at: string
}
