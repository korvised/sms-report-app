"use client"

import clsx from "clsx"
import { RadioGroup } from "@headlessui/react"
import { ChannelType, IOption } from "@/types"

interface Props {
  channels: IOption<ChannelType>[]
  channel: ChannelType
  setChanel: (chanel: ChannelType) => void
}

const ChanelOption: React.FC<Props> = ({ channels, channel, setChanel }) => (
  <RadioGroup value={channel} onChange={setChanel} className="block w-fit">
    <RadioGroup.Label className="ml-1.5 block text-sm font-medium leading-6 text-gray-900">
      Chanel
    </RadioGroup.Label>
    <div className="relative mt-1.5 flex divide-x overflow-hidden rounded-md border border-gray-300 bg-white">
      {channels.map(item => (
        <RadioGroup.Option
          key={item.label}
          value={item.value}
          className={({ checked }) =>
            clsx(
              checked ? "z-10 bg-green-50" : "",
              "relative flex cursor-pointer flex-col px-2 py-[0.44rem] focus:outline-none",
            )
          }
        >
          {({ active, checked }) => (
            <span className="flex items-center text-sm">
              <span
                className={clsx(
                  checked
                    ? "border-transparent bg-green-600"
                    : "border-gray-300 bg-white",
                  active && "ring-2 ring-green-600 ring-offset-2",
                  "flex h-4 w-4 items-center justify-center rounded-full border",
                )}
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <RadioGroup.Label
                as="span"
                className={clsx(
                  checked ? "text-green-900" : "text-gray-900",
                  "ml-3 font-medium",
                )}
              >
                {item.label}
              </RadioGroup.Label>
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </div>
  </RadioGroup>
)

export default ChanelOption
