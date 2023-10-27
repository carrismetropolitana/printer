'use client';

import useSWR from 'swr';
import styles from './JobsExplorerToolbar.module.css';
import { useMemo } from 'react';
import { Button, Select } from '@mantine/core';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import API from '@/services/API';

/* * */

export default function JobsExplorerToolbar() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // A. Fetch data

  const { data: allJobsData, mutate: allJobsMutate } = useSWR('/manager/api/jobs');

  //
  // B. Transform data

  const availableStatuses = useMemo(() => {
    if (!allJobsData) return [];
    return [...new Set(allJobsData.map((obj) => obj.status))];
  }, [allJobsData]);

  //
  // C. Handle actions

  const handleNew = async () => {
    await API({ service: 'jobs', operation: 'create', method: 'GET' });
    allJobsMutate();
  };

  const handleChangeSelectedStatus = (value) => {
    jobsExplorerContext.setSelectedStatus(value);
  };

  //
  // D. Render components

  return (
    <div className={styles.container}>
      <Select data={availableStatuses} placeholder="Status" onChange={handleChangeSelectedStatus} />
      <Button onClick={handleNew}>New</Button>
    </div>
  );

  //
}
