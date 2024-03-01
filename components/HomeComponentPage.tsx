"use client"

import { useReport } from "@/hooks/useReport"
import {
  Button,
  ErrorStateComponent,
  FilterFormComponent,
  LoadingComponent,
  PaginationComponent,
  ReportTableComponent,
} from "@/components"
import { MdAddCircleOutline } from "react-icons/md"

export default function HomeComponentPage() {
  const {
    filter,
    preFilter,
    data,
    isLoading,
    isError,
    error,
    setFilter,
    setPreFilter,
    handleSearch,
  } = useReport()

  return (
    <main className="grid gap-y-3">
      <div className="sm:flex sm:items-end">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            ລາຍງານການສົ່ງຂໍ້ຄວາມ
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            ລາຍງານການສົ່ງຂໍ້ຄວາມຫາຂອງລູກຄ້າຂອງທະນາຄານສົ່ງເສີ່ມກະສິກຳຈາກການເຮັດທຸລະກຳ
            ຫຼື ການສົ່ງ OTP ຜ່ານສາມເຄື່ອຂ່າຍຄື່: ETL, LTC ແລະ Unitel
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button
            value="ສົ່ງຂໍ້ຄວາມ"
            className="inline-flex items-center gap-x-1.5"
          >
            <MdAddCircleOutline className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <FilterFormComponent
        filter={preFilter}
        setFilter={setPreFilter}
        onSubmit={handleSearch}
      />

      {isLoading && <LoadingComponent pageSize={filter.size} />}

      {isError && <ErrorStateComponent error={error} />}

      {data && (
        <PaginationComponent
          totalItems={data.total_items}
          totalPages={data.total_pages}
          currentPage={data.page}
          pageSize={data.size}
          setFilter={setFilter}
        >
          {data && (
            <ReportTableComponent
              isLoading={isLoading}
              startIdx={data.page * data.size}
              transactions={data.data}
            />
          )}
        </PaginationComponent>
      )}
    </main>
  )
}
