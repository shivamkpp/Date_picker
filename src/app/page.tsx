import React from "react";
import { RecurrenceProvider } from "./components/context/RecurrenceContext";
import DateRangePicker from "./components/DatePicker/DateRangePicker";

const Page: React.FC = () => {
  return (
    <RecurrenceProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Date Picker with Recurrence Options
        </h1>
        <div className="max-w-xl mx-auto bg-white p-4 shadow rounded">
          <DateRangePicker />
        </div>
      </div>
    </RecurrenceProvider>
  );
};

export default Page;
