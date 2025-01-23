import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { format } from "date-fns";
import { useModelStore} from '../../stores/useModelStore';


const DateRangePicker: React.FC = () => {
  // const [startDate, setStartDate] = useState<Date | null>(new Date("2023-01-09"));
  // const [endDate, setEndDate] = useState<Date | null>(new Date("2023-01-10"));
  const { startDate, endDate, setDateRange } = useModelStore();


  // Function to handle date changes
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDateRange(start, end);
  };

  // Format the date to display when picked
  const formatDate = (date: Date | null): string => (date ? format(date, "MMM dd") : "");

  return (
    <div className="flex items-center text-center justify-center py-2 border rounded-lg w-min">
      <AiOutlineCalendar className="text-gray-500 ml-2" />
      {/* React DatePicker */}
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="MMM dd"
        customInput={
          <input
            className="outline-none bg-transparent items-center text-center"
            value={`${formatDate(startDate)} - ${formatDate(endDate)}`}
            placeholder="Apr 12 - Apr 24"
            readOnly
          />
        }
      />
    </div>
  );
}

export default DateRangePicker;
