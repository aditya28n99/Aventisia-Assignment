import ReactPaginate from "react-paginate";
import { useModelStore } from "../../stores/useModelStore";

const PaginationComponent: React.FC = () => {

    const { data, currentPage, setCurrentPage, itemsPerPage } = useModelStore();
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const offset = currentPage * itemsPerPage;
    // const currentItems = data.slice(offset, offset + itemsPerPage);

    return (
        <div className="mt-4 flex justify-between items-center">
            <p>
                Showing {offset + 1} to {Math.min(offset + itemsPerPage, data.length)}{" "}
                out of {data.length} results
            </p>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={totalPages}
                onPageChange={(e) => setCurrentPage(e.selected)}
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