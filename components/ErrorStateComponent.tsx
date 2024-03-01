import { BiErrorCircle } from "react-icons/bi"
import { useMemo } from "react"
import { getFetchErrorMessage } from "@/services"

interface Props {
  error: unknown
}

const ErrorStateComponent: React.FC<Props> = ({ error }) => {
  const { message } = useMemo(() => getFetchErrorMessage(error), [error])

  return (
    <div
      className="mb-4 flex items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"
      role="alert"
    >
      <BiErrorCircle className="me-3 inline h-4 w-4 flex-shrink-0" />
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Error: </span>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ErrorStateComponent
