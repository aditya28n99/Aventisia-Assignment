import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { format } from "date-fns";

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  //updataing data format as per our ss
  const formatDate = (date) => (date ? format(date, "MMM dd") : "");

  return (
    <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
      <AiOutlineCalendar className="text-gray-500" />
      {/* Here using react-datepicker */}
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="MMM dd"
        customInput={
          <input
            className="outline-none bg-transparent"
            value={`${formatDate(startDate)} - ${formatDate(endDate)}`}
            placeholder="Apr 12 - Apr 24"
          />
        }
      />
    </div>
  );
}
