"use client";

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRecurrence } from "../context/RecurrenceContext";

const CustomCalendar: React.FC = () => {
  const { state, updateState } = useRecurrence();

  const handleDateChange = (date: Date) => {
    if (!state.startDate) {
      updateState({ startDate: date, endDate: date });
      console.log();
    } else {
      updateState({ endDate: date });
    }
  };

  const isDateInRange = (date: Date) => {
    if (!state.startDate || !state.endDate) return false;
    return date >= state.startDate && date <= state.endDate;
  };

  const tileClassName = ({ date }: { date: Date }) => {
    if (state.startDate?.toDateString() === date.toDateString()) {
      return "selected-start";
    }

    if (state.endDate?.toDateString() === date.toDateString()) {
      return "selected-end";
    }

    if (isDateInRange(date)) {
      return "in-range";
    }

    return "";
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    return state.startDate && date < state.startDate;
  };

  return (
    <div>
      <Calendar
        onClickDay={handleDateChange}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() =>
          updateState({ startDate: null, endDate: null, recurrenceType: "" })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default CustomCalendar;
