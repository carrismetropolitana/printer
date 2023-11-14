'use client';

/* * */

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

/* * */

// A.
// SETUP INITIAL STATE

const initialState = {
  sort_key: null,
  sort_direction: false,
  status: null,
  render_host: null,
  search_query: '',
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

  const setSortKey = useCallback((newSortKey) => {
    console.log(newSortKey);
    setState((prev) => ({ ...prev, sort_key: newSortKey || null, sort_direction: prev.sort_key === newSortKey ? !prev.sort_direction : true }));
  }, []);

  const setSelectedStatus = useCallback((newStatus) => {
    setState((prev) => ({ ...prev, status: newStatus || null }));
  }, []);

  const setSelectedRenderHost = useCallback((newRenderHost) => {
    setState((prev) => ({ ...prev, render_host: newRenderHost || null }));
  }, []);

  const setSearchQuery = useCallback((newQuery) => {
    setState((prev) => ({ ...prev, search_query: newQuery || '' }));
  }, []);

  //
  // C. Setup context object

  const contextObject = useMemo(
    () => ({
      state,
      setSortKey,
      setSelectedStatus,
      setSelectedRenderHost,
      setSearchQuery,
    }),
    [state, setSortKey, setSelectedStatus, setSelectedRenderHost, setSearchQuery]
  );

  //
  // D. Return provider

  return <JobsExplorerContext.Provider value={contextObject}>{children}</JobsExplorerContext.Provider>;

  //
}
