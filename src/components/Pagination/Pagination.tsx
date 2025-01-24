import ReactPaginate from "react-paginate";

interface PaginateProps {
    dataLength: number; 
    currentPage: number; 
    itemsPerPage: number;
    onPageChange: (selectedPage: number) => void; 
  }
const PaginationComponent: React.FC<PaginateProps> = ({dataLength, currentPage, itemsPerPage, onPageChange }) => {

    const totalPages = Math.ceil(dataLength / itemsPerPage);

    const offset = currentPage * itemsPerPage;

    return (
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Results info */}
          <p className="text-sm sm:text-base text-center sm:text-left font-semibold">
            Showing {offset + 1} to {Math.min(offset + itemsPerPage, dataLength)} of {dataLength} results
          </p>
          
          {/* Pagination component */}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPages}
            onPageChange={(e) => onPageChange(e.selected)}
            containerClassName={"flex flex-wrap justify-center sm:justify-end gap-2"}
            pageClassName={
              "px-3 py-1 text-sm sm:text-base rounded-full cursor-pointer"
            }
            previousClassName={
              "px-3 py-1 text-sm sm:text-base border rounded-full cursor-pointer bg-[#DBEAFE] text-[#2563EB] hover:bg-[#BFDBFE]"
            }
            nextClassName={
              "px-3 py-1 text-sm sm:text-base border rounded-full cursor-pointer bg-[#DBEAFE] text-[#2563EB] hover:bg-[#BFDBFE]"
            }
            activeClassName={"font-bold bg-[#2563EB] text-white"}
            breakLabel={"..."}
            breakClassName={"px-3 py-1 text-sm sm:text-base rounded-full"}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
          ></ReactPaginate>
        </div>
      );      
}
export default PaginationComponent;