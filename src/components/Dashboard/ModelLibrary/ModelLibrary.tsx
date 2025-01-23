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
    <div className="p-5 pt-0 rounded-md bg-white h-[720px]" >
      {/*Top Section for model for searching sorting*/}
      <div className="flex flex-col gap-3 bg-white pt-5 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium">Model Library</h1>
          {/* Importing Button for create new model. */}
          <Button
            onClick={TogglePopup}
            className="bg-[#4F46E5] text-white px-4 py-2 font-semibold text-base rounded-xl"
            icon={FiPlus}>
            Create New Model
          </Button>
        </div>
        {/* New line - serch, filter, and sorting */}
        <div className="flex items-center gap-4 text-[#767676]">
          <div className="flex items-center bg-[#F9FAFB] px-4 py-2 rounded-lg w-full">
            <Search className="text-black" />
            <input
              type="text"
              placeholder="Search By Name, ID"
              className="bg-transparent outline-none pl-2"
              value={searchText}
              onChange={handleSearch}
            />
          </div>
          {/* Here we can filter out data by A-Z or Z-A */}
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            <PiArrowsLeftRightLight className="text-gray-500" />
            <h1 className="font-extralight">Filter</h1>
          </button>
          <DateRangePicker />
        </div>
        {/* Mid Section (Table) */}
        <div className="rounded-lg bg-white h-[488px] overflow-scroll"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <TableComponent  data={paginatedData} setSortOrder={setSortOrder} sortOrder={sortOrder} />
        </div>
        {/* Bottom Section (Pagination) */}
        <div className="mt-[30px]">
          <PaginationComponent  dataLength={sortedData.length} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={(e)=>setCurrentPage(e)}/>
        </div>
      </div>
      {isPopoupOpen ? <PopupComponent isOpen={isPopoupOpen} onClose={TogglePopup} /> : <></>}
    </div>
  )
};

export default ModelLibrary;
