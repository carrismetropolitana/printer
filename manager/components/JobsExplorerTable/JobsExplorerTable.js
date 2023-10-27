'use client';

import useSWR from 'swr';
import styles from './JobsExplorerTable.module.css';
import JobsExplorerTableHeader from '@/components/JobsExplorerTableHeader/JobsExplorerTableHeader';
import JobsExplorerTableRowItem from '@/components/JobsExplorerTableRowItem/JobsExplorerTableRowItem';
import { useMemo } from 'react';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import NoDataLabel from '../NoDataLabel/NoDataLabel';

/* * */

export default function JobsExplorerTable() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // A. Fetch data

  const { data: allJobsData } = useSWR('/manager/api/jobs');

  //
  // B. Transform data

  const allJobsFiltered = useMemo(() => {
    if (!allJobsData) return [];
    if (!jobsExplorerContext.state.status) return allJobsData;
    return allJobsData.filter((item) => item.status === jobsExplorerContext.state.status);
  }, [allJobsData, jobsExplorerContext.state.status]);

  //
  // B. Render components

  return (
    <div className={styles.container}>
      <JobsExplorerTableHeader />
      <div className={styles.rows}>{allJobsFiltered?.length > 0 ? allJobsFiltered.map((jobData) => <JobsExplorerTableRowItem key={jobData._id} jobData={jobData} />) : <NoDataLabel />}</div>
    </div>
  );

  //
}
