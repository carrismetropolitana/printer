'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// A.
// SETUP INITIAL STATE

const initialState = {
  status: null,
};

// B.
// CREATE CONTEXTS

const JobsExplorerContext = createContext(null);

// C.
// SETUP CUSTOM HOOKS

export function useJobsExplorerContext() {
  return useContext(JobsExplorerContext);
}

// D.
// SETUP PROVIDER

export function JobsExplorerContextProvider({ children }) {
  //

  //
  // A. Setup state

  const [state, setState] = useState(initialState);

  //
  // B. Setup actions

  const setSelectedStatus = useCallback((newStatus) => {
    setState((prev) => ({ ...prev, status: newStatus || null }));
  }, []);

  //
  // C. Setup context object

  const contextObject = useMemo(
    () => ({
      state,
      setSelectedStatus,
    }),
    [setSelectedStatus, state]
  );

  //
  // D. Return provider

  return <JobsExplorerContext.Provider value={contextObject}>{children}</JobsExplorerContext.Provider>;

  //
}
