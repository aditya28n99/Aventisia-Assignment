import React from "react";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import Button from "../../Navigations/Button";
import { Search } from 'lucide-react';
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import PaginationComponent from "@/components/Pagination/Pagination";
import TableComponent from "@/components/Table/Table";
import { useModelStore } from "../../../stores/useModelStore";
import PopupComponent from "@/components/Table/Popup";


const ModelLibrary: React.FC = () => {

  const { data, searchText, setSearchText, sortOrder, setSortOrder, startDate, endDate, currentPage, itemsPerPage, setCurrentPage, isPopoupOpen, setIsPopupOpen} = useModelStore();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // return console.log("serched text:", e.target.value);
  };

    const serchedData = data.filter((item) =>{
        const matchesSearch =
          item.modelName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.id.toLowerCase().includes(searchText.toLowerCase());
    
        const createdDate = new Date(item.createdOn);
        const matchesDateRange =
          (!startDate || createdDate >= startDate) && (!endDate || createdDate <= endDate);
    
        return matchesSearch && matchesDateRange;
    }
    );

    // Sort data based on sort order
    const sortedData = [...serchedData].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.modelName.localeCompare(b.modelName);
        }else if (sortOrder === "desc") {
            return b.modelName.localeCompare(a.modelName);
        }else{
            return 0;
        }
    });

    const PaginatedData = () =>{
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
      }
  
    const paginatedData = PaginatedData();
    
    const TogglePopup = () => {
      setIsPopupOpen(!isPopoupOpen);
      console.log(isPopoupOpen + "Hi")
  };

  return (
    <div className="p-5 pt-0 rounded-md bg-white h-auto sm:h-[720px]">
    <div className="flex flex-col gap-3 bg-white pt-5 z-10">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-lg font-semibold">Model Library</h1>
        <Button
          onClick={TogglePopup}
          className="bg-[#4F46E5] text-white px-4 py-2 font-semibold text-sm sm:text-base rounded-xl"
          icon={FiPlus}
        >
          Create New Model
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-[#767676]">
        <div className="flex items-center bg-[#F9FAFB] px-4 py-2 rounded-lg flex-grow">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search By Name, ID"
            className="bg-transparent outline-none pl-2 w-full"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <button
          className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#F9FAFB]"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          <PiArrowsLeftRightLight className="text-gray-500" />
          <h1 className="font-extralight">Filter</h1>
        </button>
        <DateRangePicker/>
      </div>
      <div
        className="rounded-lg bg-white h-[300px] sm:h-[488px] overflow-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <TableComponent
          data={paginatedData}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
        />
      </div>
      <div className="mt-4 sm:mt-[30px]">
        <PaginationComponent
          dataLength={sortedData.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={(e) => setCurrentPage(e)}
        />
      </div>
    </div>
      {isPopoupOpen ? <PopupComponent isOpen={isPopoupOpen} onClose={TogglePopup} /> : <></>}
    </div>
  )
};

export default ModelLibrary;
