import { ChanelType } from "@/types"

interface Channel {
  value: ChanelType
  label: string
  className: string
  activeClassName: string
}

export const channels: Channel[] = [
  {
    value: "",
    label: "ທັງໝົດ",
    className: "rounded-l-md border-l",
    activeClassName: " border-r",
  },
  {
    value: "EPIN",
    label: "EPIN",
    className: "rounded-r-md border-r",
    activeClassName: " border-l",
  },
]
