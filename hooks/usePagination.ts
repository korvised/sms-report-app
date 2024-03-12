import { useMemo } from "react"
import { getPages } from "@/services"
import { IPaginationProps } from "@/types"

export const usePagination = ({
  totalItems,
  totalPages,
  currentPage,
  pageSize,
  setFilter,
}: IPaginationProps) => {
  const pages = useMemo(
    () => getPages(totalPages, currentPage),
    [totalPages, currentPage],
  )

  const startIdx = useMemo(
    () => (currentPage - 1) * pageSize + 1,
    [currentPage, pageSize],
  )

  const endIdx = useMemo(() => currentPage * pageSize, [currentPage, pageSize])

  const endIdxCompareWithTotalItems = useMemo(
    () => Math.min(endIdx, totalItems),
    [endIdx, totalItems],
  )

  const canGoToPreviousPage = useMemo(() => currentPage > 1, [currentPage])

  const canGoToNextPage = useMemo(
    () => currentPage < totalPages,
    [currentPage, totalPages],
  )

  const handleNextPage = () => {
    if (canGoToNextPage) {
      setFilter(prev => ({ ...prev, page: prev.page + 1 }))
    }
  }

  const handlePreviousPage = () => {
    if (canGoToPreviousPage) {
      setFilter(prev => ({ ...prev, page: prev.page - 1 }))
    }
  }

  const handlePage = (page: number) => {
    setFilter(prev => ({ ...prev, page }))
  }

  const handlePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, size: Number(e.target.value) }))
  }

  return {
    pages,
    startIdx,
    endIdx: endIdxCompareWithTotalItems,
    canGoToPreviousPage,
    canGoToNextPage,
    handleNextPage,
    handlePreviousPage,
    handlePage,
    handlePageSize,
  }
}
