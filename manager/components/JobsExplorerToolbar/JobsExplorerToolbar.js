'use client';

/* * */

import useSWR from 'swr';
import API from '@/services/API';
import styles from './JobsExplorerToolbar.module.css';
import { useMemo } from 'react';
import { Button, Select } from '@mantine/core';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';

/* * */

export default function JobsExplorerToolbar() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // B. Fetch data

  const { data: allJobsData, mutate: allJobsMutate } = useSWR('/manager/api/jobs');

  //
  // C. Transform data

  const availableStatuses = useMemo(() => {
    if (!allJobsData) return [];
    return [...new Set(allJobsData.map((obj) => obj.status))];
  }, [allJobsData]);

  //
  // D. Handle actions

  const handleNew = async () => {
    await API({ service: 'jobs', operation: 'create', method: 'GET' });
    allJobsMutate();
  };

  const handleChangeSelectedStatus = (value) => {
    jobsExplorerContext.setSelectedStatus(value);
  };

  //
  // E. Render components

  return (
    <div className={styles.container}>
      <Select data={availableStatuses} placeholder="Status" onChange={handleChangeSelectedStatus} clearable />
      <Button onClick={handleNew}>New</Button>
    </div>
  );

  //
}
