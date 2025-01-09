import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import DateRangePicker from "../../ModelLibrary/DateRangePicker/DateRangePicker";

export default function ModelLibrary() {

    return (
        <div className="p-6">
            {/*Top Section for model for searching sorting*/}
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Model Library</h1>
                    {/* button for create new model. */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
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
                        />
                    </div>
                    {/* Here we can filter out data by A-Z or Z-A */}
                    <div className="flex items-center gap-2 border rounded-lg px-4 py-2">
                        <PiArrowsLeftRightLight className="text-gray-500" />
                        <select className="bg-transparent outline-none px-1">
                            <option value="asc" className="p-2">A-Z</option>
                            <option value="desc" className="p-2">Z-A</option>
                        </select>
                    </div>
                    <DateRangePicker/>
                </div>
            </div>
        </div>
    );
}
