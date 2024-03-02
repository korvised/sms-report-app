import clsx from "clsx"
import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from "react-icons/hi2"
import { GrFormCheckmark } from "react-icons/gr"
import { RxDotFilled } from "react-icons/rx"
import { ChanelType, IFilter } from "@/types"
import { Button, Textbox } from "@/components"
import { channels } from "@/constants"

interface Props {
  filter: IFilter
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FilterFormComponent: React.FC<Props> = ({
  filter,
  setFilter,
  onSubmit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
  }

  const handleChanel = (chanel: ChanelType) => {
    setFilter({ ...filter, chanel })
  }

  return (
    <form
      className="inline-flex flex-col gap-y-4 border-y bg-gray-50 px-4 pb-3 pt-2 sm:flex-row sm:items-end sm:gap-x-3 lg:gap-x-4"
      onSubmit={onSubmit}
    >
      <div className="inline-flex items-end gap-x-3">
        <div className="hidden sm:block">
          <HiAdjustmentsHorizontal className="mb-2 h-6 w-6 text-zinc-500" />
        </div>

        <Textbox
          id="start_date"
          type="date"
          name="start_date"
          label="ເລີ່ມຕົ້ນ"
          value={filter.start_date}
          placeholder="ເລືອກວັນທີ່ເລີ່ມຕົ້ນ"
          onChange={handleChange}
          required
        />

        <Textbox
          id="end_date"
          type="date"
          name="end_date"
          label="ສີ້ນສຸດ"
          value={filter.end_date}
          placeholder="ເລືອກວັນທີ່ສີ້ນສຸດ"
          onChange={handleChange}
          required
        />

        <div>
          <label className="ml-1.5 block text-sm font-medium leading-6 text-gray-900">
            Chanel
          </label>
          <div className="mt-1.5">
            <div className="flex">
              {channels.map(chanel => {
                const selected = filter.chanel === chanel.value
                return (
                  <div
                    key={chanel.value}
                    className={clsx(
                      chanel.className,
                      "group flex cursor-pointer items-center gap-x-0.5 border-y py-[0.44rem] pl-0.5 pr-2",
                      selected
                        ? "border-green-800 bg-green-100 text-green-800" +
                            chanel.activeClassName
                        : "border-gray-300 bg-white text-gray-500 hover:border-green-800 hover:bg-green-100 hover:text-green-800",
                    )}
                    onClick={() => handleChanel(chanel.value)}
                  >
                    {selected ? (
                      <GrFormCheckmark className="h-5 w-5 text-green-800" />
                    ) : (
                      <RxDotFilled className="h-5 w-5 text-gray-500 group-hover:text-green-800" />
                    )}
                    <span className="text-sm font-semibold">
                      {chanel.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <Textbox
          id="search"
          type="text"
          name="search"
          label="ຄົ້ນຫາ"
          value={filter.search}
          placeholder="ເບີໂທລະສັບ..."
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          value="ສະແດງລາຍງານ"
          variant="outline"
          className="inline-flex h-fit gap-x-2"
        >
          <HiMagnifyingGlass className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}

export default FilterFormComponent
