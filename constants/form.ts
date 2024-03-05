import { ISmsBody } from "@/types"

export const initialSmsForm: ISmsBody = {
  queue: "default",
  channel: "EPIN",
  funcName: "send_sms_app",
  msisdn: "",
  content: "",
}
