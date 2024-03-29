"use client"

import clsx from "clsx"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { usePagination } from "@/hooks"
import { IPaginationProps } from "@/types"

interface Props extends IPaginationProps {
  children: React.ReactNode
}

const Pagination: React.FC<Props> = props => {
  const {
    pages,
    startIdx,
    endIdx,
    canGoToPreviousPage,
    canGoToNextPage,
    handleNextPage,
    handlePreviousPage,
    handlePage,
    handlePageSize,
  } = usePagination(props)

  return (
    <div className="divide-y divide-gray-200">
      <div className="inline-flex items-center gap-x-2 py-2">
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ລາຍການ
        </label>
        <select
          id="location"
          name="location"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
          defaultValue={props.pageSize}
          onChange={handlePageSize}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      {props.children}
      <div className="flex items-center justify-between py-3">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            className={clsx(
              "relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium",
              canGoToPreviousPage
                ? "bg-white text-gray-700 hover:bg-gray-50"
                : "cursor-not-allowed bg-gray-100 text-gray-500",
            )}
            disabled={!canGoToPreviousPage}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <button
            className={clsx(
              "relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium",
              canGoToNextPage
                ? "bg-white text-gray-700 hover:bg-gray-50"
                : "cursor-not-allowed bg-gray-100 text-gray-500",
            )}
            disabled={!canGoToNextPage}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              ສະແດງ{" "}
              <span className="font-medium">
                {startIdx.toLocaleString("en-US")}
              </span>
              <span>{" - "}</span>
              <span className="font-medium">
                {endIdx.toLocaleString("en-US")}
              </span>
              <span>{" ຈາກ "}</span>
              <span className="font-medium">
                {props.totalItems.toLocaleString("en-US")}
              </span>{" "}
              ລາຍການ
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                className={clsx(
                  "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0",
                  canGoToPreviousPage
                    ? "text-gray-400 hover:bg-gray-50"
                    : "cursor-not-allowed bg-gray-100 text-gray-300",
                )}
                disabled={!canGoToPreviousPage}
                onClick={handlePreviousPage}
              >
                <span className="sr-only">Previous</span>
                <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              {pages.map((page, idx) => (
                <button
                  key={idx}
                  className={clsx(
                    "relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium",
                    page === props.currentPage
                      ? "bg-green-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0",
                  )}
                  disabled={page === props.currentPage || page === "..."}
                  onClick={() => handlePage(page as number)}
                >
                  {page}
                </button>
              ))}
              <button
                className={clsx(
                  "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300",
                  canGoToNextPage
                    ? "text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    : "cursor-not-allowed bg-gray-100 text-gray-300",
                )}
                disabled={!canGoToNextPage}
                onClick={handleNextPage}
              >
                <span className="sr-only">Next</span>
                <HiChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
