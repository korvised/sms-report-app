"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReportComponentPage } from "@/components"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer bodyClassName="toast-body" />
      <ReportComponentPage />
    </QueryClientProvider>
  )
}
