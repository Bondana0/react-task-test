import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Common = ({ dateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filteredData = () => {
    dateChange(startDate, endDate);
  };
    
  const filterClear = () => {
    setStartDate(null);
    setEndDate(null);
    dateChange(null, null);
  };


  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        showYearDropdown
        scrollableYearDropdown
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        showYearDropdown
        scrollableYearDropdown
      />
          <button onClick={filteredData}>Filter</button>
          <button onClick={filterClear}>Clear</button>
      </div>
      
  );
};

export default Common;

