import { ChannelType, IOption } from "@/types"

export const smsChannels: IOption<ChannelType>[] = [
  {
    value: "EPIN",
    label: "EPIN",
  },
  {
    value: "CTSV",
    label: "CTSV",
  },
  {
    value: "Other",
    label: "Other",
  },
]

export const filterChannels: IOption<ChannelType>[] = [
  {
    value: "",
    label: "ທັງໝົດ",
  },
  {
    value: "EPIN",
    label: "EPIN",
  },
]
