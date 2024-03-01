"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { HomeComponentPage } from "@/components"

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <HomeComponentPage />
    </QueryClientProvider>
  )
}
