import ReactPaginate from "react-paginate"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import useBreakpoint from "use-breakpoint"

interface Props {
  setCurrentPage: (currentPage: number) => void
  currentPage: number
  totalPages: number
}

const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  x: 1280,
  "2xl": 1536
}

export default function Pagination({ setCurrentPage, currentPage, totalPages }: Props) {
  const showNextButton = currentPage !== totalPages - 1
  const showPrevButton = currentPage !== 0

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1)
  }

  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  console.log(breakpoint)

  return (
    <ReactPaginate
      breakLabel={<span className="btn btn-square text-sm join-item">...</span>}
      nextLabel={
        showNextButton ? (
          <span className="btn btn-square text-sm join-item">
            <BsChevronRight />
          </span>
        ) : null
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={breakpoint === "xs" || breakpoint === "sm" ? 1 : 3}
      forcePage={currentPage - 1}
      pageCount={totalPages}
      previousLabel={
        showPrevButton ? (
          <span className="btn btn-squaretext-sm join-item">
            <BsChevronLeft />
          </span>
        ) : null
      }
      containerClassName="join order-last md:order-none w-full flex justify-center"
      pageClassName="btn btn-square text-sm join-item"
      activeClassName="btn-primary"
    />
  )
}
