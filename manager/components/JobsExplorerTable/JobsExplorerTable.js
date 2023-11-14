'use client';

/* * */

import useSWR from 'swr';
import { useMemo } from 'react';
import styles from './JobsExplorerTable.module.css';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import JobsExplorerTableHeader from '@/components/JobsExplorerTableHeader/JobsExplorerTableHeader';
import JobsExplorerTableRowItem from '@/components/JobsExplorerTableRowItem/JobsExplorerTableRowItem';
import NoDataLabel from '@/components/NoDataLabel/NoDataLabel';
import useSearch from 'hooks/useSearch';

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

  const allJobsSorted = useMemo(() => {
    if (!allJobsData) return [];
    if (!jobsExplorerContext.state.sort_key) return allJobsData;
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
    if (jobsExplorerContext.state.sort_direction) return allJobsData.sort((a, b) => collator.compare(a[jobsExplorerContext.state.sort_key], b[jobsExplorerContext.state.sort_key]));
    else return allJobsData.sort((a, b) => collator.compare(b[jobsExplorerContext.state.sort_key], a[jobsExplorerContext.state.sort_key]));
  }, [allJobsData, jobsExplorerContext.state.sort_key, jobsExplorerContext.state.sort_direction]);

  const allJobsFilteredForStatus = useMemo(() => {
    if (!allJobsSorted) return [];
    if (!jobsExplorerContext.state.status) return allJobsSorted;
    return allJobsSorted.filter((item) => item.status === jobsExplorerContext.state.status);
  }, [allJobsSorted, jobsExplorerContext.state.status]);

  const allJobsFilteredForRenderHost = useMemo(() => {
    if (!allJobsFilteredForStatus) return [];
    if (!jobsExplorerContext.state.render_host) return allJobsFilteredForStatus;
    return allJobsFilteredForStatus.filter((item) => item.render_host === jobsExplorerContext.state.render_host);
  }, [allJobsFilteredForStatus, jobsExplorerContext.state.render_host]);

  //
  // D. Handle search

  const allJobsFilteredForSearch = useSearch(jobsExplorerContext.state.search_query, allJobsFilteredForRenderHost, { keys: ['owner_name', 'owner_email', 'render_path', 'filename'] });

  //
  // E. Render components

  return (
    <div className={styles.container}>
      <JobsExplorerTableHeader />
      <div className={styles.rows}>{allJobsFilteredForSearch?.length > 0 ? allJobsFilteredForSearch.map((jobData) => <JobsExplorerTableRowItem key={jobData._id} jobData={jobData} />) : <NoDataLabel fill />}</div>
    </div>
  );

  //
}
