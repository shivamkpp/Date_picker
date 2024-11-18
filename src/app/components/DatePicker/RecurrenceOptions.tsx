"use client";

import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const options = ["Daily", "Weekly", "Monthly", "Yearly"];

const RecurrenceOptions: React.FC = () => {
  const { state, updateState } = useRecurrence();

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Recurrence Options</h3>
      <div className="flex gap-2 mt-2">
        {options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 border rounded ${
              state.recurrenceType === option ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => updateState({ recurrenceType: option })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecurrenceOptions;
