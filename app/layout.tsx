import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SMS Banking Report",
  description: "Report sent sms banking history",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-lao relative mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        {children}
      </body>
    </html>
  )
}
