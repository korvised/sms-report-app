"use client"

import { Fragment } from "react"
import { MdAddCircleOutline } from "react-icons/md"
import { useReport, useSms } from "@/hooks"
import {
  Button,
  EmptyState,
  ErrorState,
  FilterFormComponent,
  LoadingComponent,
  Pagination,
  ReportTableComponent,
  SmsModalComponent,
} from "@/components"

export default function ReportComponentPage() {
  const {
    mutation,
    show,
    form,
    setForm,
    handleShowModal,
    handleCloseModal,
    handleSubmit,
  } = useSms()

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
    <Fragment>
      <SmsModalComponent
        show={show}
        isLoading={mutation.isLoading}
        form={form}
        setForm={setForm}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <main className="grid gap-y-0.5">
        <div className="sm:flex sm:items-end">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              ລາຍງານການສົ່ງຂໍ້ຄວາມ
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              ລາຍງານການສົ່ງຂໍ້ຄວາມຫາຂອງລູກຄ້າຂອງທະນາຄານສົ່ງເສີ່ມກະສິກຳຈາກການເຮັດທຸລະກຳ
              ຫຼື ການສົ່ງ OTP ຜ່ານສາມເຄືອຂ່າຍຄື່: ETL, LTC ແລະ Unitel
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button
              value="ສົ່ງຂໍ້ຄວາມ"
              className="inline-flex items-center gap-x-1.5"
              onClick={handleShowModal}
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

        {isError && <ErrorState error={error} />}

        {data && (
          <Fragment>
            {data.data.length > 0 ? (
              <Pagination
                totalItems={data.total_items}
                totalPages={data.total_pages}
                currentPage={data.page}
                pageSize={data.size}
                setFilter={setFilter}
              >
                {data && (
                  <ReportTableComponent
                    isLoading={isLoading}
                    startIdx={(data.page - 1) * data.size}
                    transactions={data.data}
                  />
                )}
              </Pagination>
            ) : (
              <EmptyState />
            )}
          </Fragment>
        )}
      </main>
    </Fragment>
  )
}
