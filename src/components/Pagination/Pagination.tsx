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
        <div className="mt-4 flex justify-between items-center">
            <p>
                Showing {offset + 1} to {Math.min(offset + itemsPerPage, dataLength)}{" "}
                of {dataLength} results
            </p>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={totalPages}
                onPageChange={(e) => onPageChange(e.selected)}
                containerClassName={"flex gap-2"}
                pageClassName={"px-3 py-1 rounded-full cursor-pointer"}
                previousClassName={"px-3 mr-7 py-1 border rounded-full cursor-pointer rounded-full bg-[#DBEAFE] text-[#2563EB]"}
                nextClassName={"px-3 py-1 ml-7 border rounded-full cursor-pointer rounded-full bg-[#DBEAFE] text-[#2563EB]"}
                activeClassName={"font-bold bg-[#2563EB] text-white"}
            ></ReactPaginate>
        </div>
    )
}
export default PaginationComponent;