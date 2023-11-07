'use client';

/* * */

import useSWR from 'swr';
import styles from './JobsExplorerToolbar.module.css';
import { useMemo } from 'react';
import { Select } from '@mantine/core';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import JobsExplorerCreate from '@/components/JobsExplorerCreate/JobsExplorerCreate';

/* * */

export default function JobsExplorerToolbar() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // B. Fetch data

  const { data: allJobsData } = useSWR('/manager/api/jobs');

  //
  // C. Transform data

  const availableStatuses = useMemo(() => {
    if (!allJobsData) return [];
    return [...new Set(allJobsData.map((obj) => obj.status))];
  }, [allJobsData]);

  //
  // D. Handle actions

  const handleChangeSelectedStatus = (value) => {
    jobsExplorerContext.setSelectedStatus(value);
  };

  //
  // E. Render components

  return (
    <div className={styles.container}>
      <Select data={availableStatuses} placeholder="Status" onChange={handleChangeSelectedStatus} clearable />
      <JobsExplorerCreate />
    </div>
  );

  //
}
