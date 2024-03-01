type IPageNumber = number | "..."
const getPages = (totalPages: number, currentPage: number): IPageNumber[] => {
  const pages: IPageNumber[] = []
  const ellipsis = "..."

  // Calculate the range of pages to include around the current page
  let startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(6 / 2), totalPages - 5),
  )
  const endPage = Math.min(startPage + 5, totalPages) // Corrected to include the last page

  // Add the actual page number for the first page if there are more pages before the current page
  if (startPage > 1) {
    pages.push(1)
    pages.push(ellipsis)
  }

  // Add pages in the range
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  // Add the actual page number for the last page if there are more pages after the current page
  if (endPage < totalPages) {
    pages.push(ellipsis)
    pages.push(totalPages)
  }

  return pages
}

export default getPages
