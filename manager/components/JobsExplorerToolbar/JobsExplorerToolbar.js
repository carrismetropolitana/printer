'use client';

/* * */

import useSWR from 'swr';
import styles from './JobsExplorerToolbar.module.css';
import { useMemo } from 'react';
import { Select, TextInput } from '@mantine/core';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import JobsExplorerCreate from '@/components/JobsExplorerCreate/JobsExplorerCreate';
import LogoutButton from '@/components/LogoutButton/LogoutButton';

/* * */

export default function JobsExplorerToolbar() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // B. Fetch data

  const { data: allJobsData } = useSWR('/api/jobs');

  //
  // C. Transform data

  const availableStatuses = useMemo(() => {
    if (!allJobsData) return [];
    return [...new Set(allJobsData.map((obj) => obj.status))];
  }, [allJobsData]);

  const availableRenderHosts = useMemo(() => {
    if (!allJobsData) return [];
    return [...new Set(allJobsData.map((obj) => obj.render_host))];
  }, [allJobsData]);

  //
  // D. Handle actions

  const handleChangeSelectedStatus = (value) => {
    jobsExplorerContext.setSelectedStatus(value);
  };

  const handleChangeSelectedRenderHost = (value) => {
    jobsExplorerContext.setSelectedRenderHost(value);
  };

  const handleChangeSearchQuery = ({ currentTarget }) => {
    jobsExplorerContext.setSearchQuery(currentTarget.value);
  };

  //
  // E. Render components

  return (
    <div className={styles.container}>
      <Select data={availableStatuses} placeholder="Status" onChange={handleChangeSelectedStatus} clearable />
      <Select data={availableRenderHosts} placeholder="Render Host" onChange={handleChangeSelectedRenderHost} clearable />
      <TextInput placeholder="Search..." value={jobsExplorerContext.state.search_query} onChange={handleChangeSearchQuery} />
      <JobsExplorerCreate />
      <LogoutButton />
    </div>
  );

  //
}
