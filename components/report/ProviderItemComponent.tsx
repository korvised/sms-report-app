import clsx from "clsx"
import { Tooltip } from "@/components"
import { FiCheckCircle, FiXCircle } from "react-icons/fi"

interface Props {
  id: string
  provider: string
  content: string
  disable?: boolean
}

const ProviderItemComponent: React.FC<Props> = ({
  id,
  provider,
  content,
  disable,
}) => {
  return (
    <Tooltip id={id} content={content} disable={disable}>
      <div
        className={clsx(
          disable
            ? "cursor-pointer bg-red-600 hover:bg-red-600"
            : "bg-green-600",
          "flex items-center gap-x-1 rounded-full px-2 py-0.5 text-white",
        )}
      >
        {disable ? (
          <FiXCircle className="h-4 w-4" />
        ) : (
          <FiCheckCircle className="h-3.5 w-3.5" />
        )}
        <span className="text-[0.7rem]">{provider}</span>
      </div>
    </Tooltip>
  )
}

export default ProviderItemComponent
