import { ChannelType } from "@/types/filter"

export type QueueType = "critical" | "default" | "low"

export interface ISmsBody {
  queue: QueueType
  channel: ChannelType
  funcName: string
  msisdn: string
  content: string
}
