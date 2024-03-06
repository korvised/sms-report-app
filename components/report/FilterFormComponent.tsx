"use client"

import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from "react-icons/hi2"
import { ChannelType, IFilter } from "@/types"
import { Button, ChanelOption, Textbox } from "@/components"
import { filterChannels } from "@/constants"

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

  const handleChanel = (chanel: ChannelType) => {
    setFilter({ ...filter, chanel })
  }

  return (
    <form
      className="
        relative
        mt-2
        flex
        flex-col
        gap-y-4
        rounded-md
        border
        border-green-100
        bg-white
        px-4
        pb-3
        pt-2
        shadow-sm
        shadow-green-50
        sm:flex-row
        sm:items-end
        sm:gap-x-3
        lg:gap-x-4
      "
      onSubmit={onSubmit}
    >
      <div className="flex items-end gap-x-3">
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

        <ChanelOption
          channels={filterChannels}
          channel={filter.chanel}
          setChanel={handleChanel}
        />

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
