import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { BiSortAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import DateRangePicker from "../../ModelLibrary/DateRangePicker/DateRangePicker";
import NewModelPopup from "../../ModelLibrary/DateRangePicker/NewModelPopup";

export default function ModelLibrary() {

    // Dummy data / to sort and search using state veriable data for this initialData
    const initialData = [
        {
            id: "#5412448",
            modelName: "Blonde Drizzle",
            modelType: "Extraction",
            description: "Edit customer and there truncate max-w-xs truncate max-w-xs truncate max-w-xs",
            createdOn: "29/02/2024",
            lastTrainedOn: "02/03/2024",
            status: "Active",
        },
        {
            id: "#5412448",
            modelName: "Peater Drizzle",
            modelType: "Extraction",
            description: "Edit customer and there truncate max-w-xs truncate max-w-xs truncate max-w-xs",
            createdOn: "29/02/2024",
            lastTrainedOn: "02/03/2024",
            status: "Active",
        },
        {
            id: "#5412448",
            modelName: "Baby Sina",
            modelType: "Classification",
            description: "Edit customer",
            createdOn: "29/02/2024",
            lastTrainedOn: "02/03/2024",
            status: "Expired",
        },
        {
            id: "#5412448",
            modelName: "sam Nivesh",
            modelType: "Classification",
            description: "Edit customer",
            createdOn: "29/02/2024",
            lastTrainedOn: "02/03/2024",
            status: "Expired",
        },
    ];

    const [data, setData] = useState(initialData);
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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
                    <h1 className="text-lg font-semibold">Model Library</h1>
                    {/* button for create new model. */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={togglePopup}>
                        Create New Model
                    </button>
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
                                    Model Name <BiSortAlt2 className="inline ml-2 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Model Type <BiSortAlt2 className="inline ml-2 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Description <BiSortAlt2 className="inline ml-2 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Created On <BiSortAlt2 className="inline ml-2 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Last Trained On <BiSortAlt2 className="inline ml-2 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">
                                    Status <BiSortAlt2 className="inline ml-2 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
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
                                        <span className={`${item.status === 'Active' ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} px-2 py-1 rounded-lg`}>
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
            </div>
            {/*  NewModel Pop-up window will get toggeled*/}
            {isPopupOpen ? <NewModelPopup isOpen={isPopupOpen} togglePopup={togglePopup} /> : <></>}
        </div>
    );
}
