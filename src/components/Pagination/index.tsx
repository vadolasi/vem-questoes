import ReactPaginate from "react-paginate"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

interface Props {
  setCurrentPage: (currentPage: number) => void
  currentPage: number
  totalPages: number
}

export default function Pagination({ setCurrentPage, currentPage, totalPages }: Props) {
  const showNextButton = currentPage !== totalPages - 1
  const showPrevButton = currentPage !== 0

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1)
  }

  return (
    <ReactPaginate
      breakLabel={<span className="btn btn-square join-item">...</span>}
      nextLabel={
        showNextButton ? (
          <span className="btn btn-square join-item">
            <BsChevronRight />
          </span>
        ) : null
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      forcePage={currentPage - 1}
      pageCount={totalPages}
      previousLabel={
        showPrevButton ? (
          <span className="btn btn-square join-item">
            <BsChevronLeft />
          </span>
        ) : null
      }
      containerClassName="join"
      pageClassName="btn btn-square join-item"
      activeClassName="btn-primary"
    />
  )
}
