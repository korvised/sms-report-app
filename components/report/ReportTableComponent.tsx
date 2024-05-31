"use client"

import { FiCheckCircle, FiXCircle } from "react-icons/fi"
import { format } from "date-fns"
import { ITransaction } from "@/types"
import { ProviderItemComponent } from "@/components"

interface Props {
  startIdx: number
  transactions: ITransaction[]
  isLoading: boolean
}

const ReportTableComponent: React.FC<Props> = ({ startIdx, transactions }) => {
  return (
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
                  ເຄືອຂ່າຍ
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
                  ເຄືອຂ່າຍທີ່ສົ່ງ
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  ວັນທີ່ສົ່ງ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {transactions.map((item, idx) => (
                <tr key={item.id} className="even:bg-gray-50">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                    {idx + 1 + startIdx}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.msisdn}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.provider}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.channel}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.func_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="inline-flex">
                      {item.status ? (
                        <div className="flex items-center gap-x-1 rounded-full bg-green-600 px-2 py-1 text-white">
                          <FiCheckCircle className="h-4 w-4" />
                          <span className="text-xs">ສຳເລັດ</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-x-1 rounded-full bg-red-600 px-2 py-1 text-white">
                          <FiXCircle className="h-4 w-4" />
                          <span className="text-xs">ບໍ່ສຳເລັດ</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="inline-flex gap-x-1">
                      {item.entries.map(({ id, provider, result, status }) => (
                        <ProviderItemComponent
                          key={id.toString()}
                          id={id.toString()}
                          provider={provider}
                          content={result}
                          disable={status !== "SUCCESS"}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {format(new Date(item.created_at), "dd/MM/yyyy HH:mm:ss")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReportTableComponent
