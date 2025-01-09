import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { BiSortAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import DateRangePicker from "../../ModelLibrary/DateRangePicker/DateRangePicker";
import NewModelPopup from "../../ModelLibrary/DateRangePicker/NewModelPopup";
import Button from "../../Button/Button";
import ReactPaginate from "react-paginate";
import {initialData} from '../../../Database/data'

export default function ModelLibrary() {

    const [data, setData] = useState(initialData);
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 10;
    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    // Function for searching by id and name
    const handleSearch = (e) => {
        // const text = e.target.toLowerCase();
        const text = e.target.value.toLowerCase();
        setSearchText(text);
        setData(
            initialData.filter(
                (item) =>
                    item.modelName.toLowerCase().includes(text) ||
                    item.id.toLowerCase().includes(text)
            )
        );
    };

    // Sorting Function ascending and decending by model name
    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        const sortedData = [...data].sort((a, b) => {
            if (order === "asc") {
                return a.modelName.localeCompare(b.modelName);
            } else {
                return b.modelName.localeCompare(a.modelName);
            }
        });
        setData(sortedData);
    };

    return (
        <div className="p-5 rounded-md bg-white">
            {/*Top Section for model for searching sorting*/}
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-medium">Model Library</h1>
                    {/* Importing Button for create new model. */}
                    <Button
                        onClick={togglePopup}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        icon={FiPlus}>
                        Create New Model
                    </Button>
                </div>
                {/* New line - serch, filter, and sorting */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-full">
                        <CiSearch className="text-black" />
                        <input
                            type="text"
                            placeholder="Search By Name, ID"
                            className="bg-transparent outline-none pl-2"
                            onChange={handleSearch}
                        />
                    </div>
                    {/* Here we can filter out data by A-Z or Z-A */}
                    <div className="flex items-center gap-2 border rounded-lg px-4 py-2">
                        <PiArrowsLeftRightLight className="text-gray-500" />
                        <h1>Filter</h1>
                        <select className="bg-transparent outline-none px-1"
                            value={sortOrder}
                            onChange={handleSort}>
                            {/* <option value="none" disabled className="p-2">Filter</option> */}
                            <option value="asc" className="p-2">A-Z</option>
                            <option value="desc" className="p-2">Z-A</option>
                        </select>
                    </div>
                    <DateRangePicker />
                </div>
                {/* Mid Section (Table) */}
                <div className="rounded-lg bg-white">
                    <table className="w-full border-collapse">
                        <thead className="text-left border-b">
                            <tr>
                                <th className="p-4 font-semibold">
                                    Model Name <BiSortAlt2 className="inline ml-1 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Model Type <BiSortAlt2 className="inline ml-1 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Description <BiSortAlt2 className="inline ml-1 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Created On <BiSortAlt2 className="inline ml-1 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Last Trained On <BiSortAlt2 className="inline ml-1 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Status <BiSortAlt2 className="inline ml-1 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-100"
                                >
                                    <td className="p-4">
                                        <div>
                                            <div className="font-semibold">{item.modelName}</div>
                                            <div className="text-sm text-gray-500">ID: {item.id}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">{item.modelType}</td>
                                    {/* added truncate not to wrap the line */}
                                    <td className="p-4 truncate max-w-xs">{item.description}</td>
                                    <td className="p-4 text-center">{item.createdOn}</td>
                                    <td className="p-4 text-center">{item.lastTrainedOn}</td>
                                    <td className="p-4 text-center">
                                        <span className={`${item.status === 'Active' ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} px-4 py-1 rounded-lg text-sm`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="relative">
                                            <BsThreeDotsVertical />
                                            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block">
                                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                    Edit
                                                </button>
                                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                    Delete
                                                </button>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Bottom Section (Pagination) */}
                <div className="mt-4 flex justify-between items-center">
                    <p>
                        Showing {offset + 1} to {Math.min(offset + itemsPerPage, data.length)}{" "}
                        out of {data.length} results
                    </p>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={Math.ceil(data.length / itemsPerPage)}
                        onPageChange={(e) => setCurrentPage(e.selected)}
                        containerClassName={"flex gap-2"}
                        activeClassName={"font-bold"}
                        pageClassName={"px-3 py-1 border rounded-full cursor-pointer bg-blue-200"}
                        previousClassName={"px-3 py-1 border rounded-lg cursor-pointer rounded-full bg-blue-200 hover:bg-blue-600"}
                        nextClassName={"px-3 py-1 border rounded-lg cursor-pointer rounded-full bg-blue-200 hover:bg-blue-600"}
                    />
                </div>
            </div>
            {/*  NewModel Pop-up window will get toggeled*/}
            {isPopupOpen ? <NewModelPopup isOpen={isPopupOpen} togglePopup={togglePopup} /> : <></>}
        </div>
    );
}
