import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from "react-icons/hi2"
import { IFilter } from "@/types"
import { Button, Textbox } from "@/components"

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

  const handleChanel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, chanel: e.target.value })
  }

  return (
    <form
      className="inline-flex flex-col gap-y-4 border-y bg-gray-50 px-4 pb-3 pt-2 sm:flex-row sm:items-end sm:gap-x-3"
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
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Chanel
          </label>
          <div className="mt-1.5">
            <select
              id="location"
              name="location"
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
              defaultValue="all"
              value={filter.chanel}
              onChange={handleChanel}
            >
              <option value="all">ທັງໝົດ</option>
              <option value="EPIN">EPIN</option>
            </select>
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
