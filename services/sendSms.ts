import { ISmsBody, ITransaction } from "@/types"

const sendSms = async (data: ISmsBody): Promise<ITransaction> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to send sms.")
  }

  return response.json()
}

export default sendSms
