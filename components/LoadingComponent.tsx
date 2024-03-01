interface Props {
  pageSize: number
}

const LoadingComponent: React.FC<Props> = ({ pageSize }) => {
  const rows = Array.from({ length: pageSize }, (_, idx) => idx + 1)

  return (
    <div className="divide-y divide-gray-200">
      <div className="inline-flex animate-pulse items-center gap-x-2 py-2">
        <div className="h-5 w-12 rounded-md bg-gray-400" />
        <div className="h-9 w-20 rounded-md bg-gray-400" />
      </div>

      <div className="flow-root overflow-hidden">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    ລ/ດ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ເບີໂທລະສັບ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ເຄື່ອຂ່າຍ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ພະລິດຕະພັນ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ຟັງຊັນ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ສະຖານະ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ເຄື່ອຂ່າຍທີ່ສົ່ງ
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ວັນທີ່ສົ່ງ
                  </th>
                </tr>
              </thead>
              <tbody className="animate-pulse bg-white">
                {rows.map(row => (
                  <tr key={row} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-3">
                      <div className="h-[1.6rem] w-10 rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="h-[1.6rem] rounded-full bg-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between bg-white py-3">
          <div className="flex flex-1 animate-pulse justify-between sm:hidden">
            <div className="h-8 w-24 rounded-md bg-gray-400" />
            <div className="h-8 w-24 rounded-md bg-gray-400" />
          </div>

          <div className="hidden animate-pulse sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="h-5 w-52 rounded-md bg-gray-400" />
            <div className="h-8 w-96 rounded-md bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingComponent
