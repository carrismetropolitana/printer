'use client';

/* * */

import useSWR from 'swr';
import { useMemo } from 'react';
import styles from './JobsExplorerTable.module.css';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import JobsExplorerTableHeader from '@/components/JobsExplorerTableHeader/JobsExplorerTableHeader';
import JobsExplorerTableRowItem from '@/components/JobsExplorerTableRowItem/JobsExplorerTableRowItem';
import NoDataLabel from '@/components/NoDataLabel/NoDataLabel';

/* * */

export default function JobsExplorerTable() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // B. Fetch data

  const { data: allJobsData } = useSWR('/api/jobs');

  //
  // C. Transform data

  const allJobsFiltered = useMemo(() => {
    if (!allJobsData) return [];
    if (!jobsExplorerContext.state.status) return allJobsData;
    return allJobsData.filter((item) => item.status === jobsExplorerContext.state.status);
  }, [allJobsData, jobsExplorerContext.state.status]);

  //
  // D. Render components

  return (
    <div className={styles.container}>
      <JobsExplorerTableHeader />
      <div className={styles.rows}>{allJobsFiltered?.length > 0 ? allJobsFiltered.map((jobData) => <JobsExplorerTableRowItem key={jobData._id} jobData={jobData} />) : <NoDataLabel fill />}</div>
    </div>
  );

  //
}
