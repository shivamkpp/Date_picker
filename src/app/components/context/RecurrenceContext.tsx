"use client";

import React, { createContext, useState, useContext } from "react";

export interface RecurrenceState {
  startDate: Date | null;
  endDate: Date | null;
  recurrenceType: string;
}

const defaultState: RecurrenceState = {
  startDate: null,
  endDate: null,
  recurrenceType: "",
};

const RecurrenceContext = createContext<any>(null);

export const RecurrenceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<RecurrenceState>(defaultState);

  const updateState = (updates: Partial<RecurrenceState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <RecurrenceContext.Provider value={{ state, updateState }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
