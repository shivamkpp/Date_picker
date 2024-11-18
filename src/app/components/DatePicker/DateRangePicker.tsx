"use client";

import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import CustomCalendar from "./Calendar";
import Preview from "./Preview";

const DateRangePicker: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow-md">
      <RecurrenceOptions />
      <CustomCalendar />
      <Preview />
    </div>
  );
};

export default DateRangePicker;
