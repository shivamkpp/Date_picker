"use client";

import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const Preview: React.FC = () => {
  const { state } = useRecurrence();

  return (
    <div className="mt-4 space-y-2">
      <p>
        <strong>Start Date:</strong>{" "}
        {state.startDate?.toDateString() || "Not selected"}
      </p>
      <p>
        <strong>End Date:</strong>{" "}
        {state.endDate?.toDateString() ||
          state.startDate?.toDateString() ||
          "Not selected"}
      </p>
      <p>
        <strong>Recurrence:</strong> {state.recurrenceType || "Not selected"}
      </p>
    </div>
  );
};

export default Preview;
