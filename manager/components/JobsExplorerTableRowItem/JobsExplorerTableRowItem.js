'use client';

import useSWR from 'swr';
import API from '@/services/API';
import { useState } from 'react';
import styles from './JobsExplorerTableRowItem.module.css';
import JobsExplorerTableRowContainer from '@/components/JobsExplorerTableRowContainer/JobsExplorerTableRowContainer';
import JobsExplorerTableRowItemActionDelete from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionDelete';
import JobsExplorerTableRowItemActionPauseResume from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionPauseResume';
import JobsExplorerTableRowItemActionDownload from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionDownload';
import JobsExplorerTableRowItemActionLink from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionLink';
import JobsExplorerTableRowItemActionNotify from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionNotify';

/* * */

export default function JobsExplorerTableRowItem({ jobData }) {
  //

  //
  // A. Setup variables

  const [isLoading, setIsLoading] = useState(false);

  //
  // B. Fetch data

  const { mutate: allJobsMutate } = useSWR('/manager/api/jobs');

  //
  // B. Handle actions

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await API({ service: 'jobs', resourceId: jobData._id, operation: 'delete', method: 'DELETE' });
      allJobsMutate();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      allJobsMutate();
      setIsLoading(false);
    }
  };

  //
  // C. Render components

  return (
    <div className={styles.container}>
      <JobsExplorerTableRowContainer className={styles.container}>
        <div className={styles.column}>
          <JobsExplorerTableRowItemActionDelete jobData={jobData} />
          <JobsExplorerTableRowItemActionPauseResume jobData={jobData} />
          <JobsExplorerTableRowItemActionDownload jobData={jobData} />
          <JobsExplorerTableRowItemActionLink jobData={jobData} />
          <JobsExplorerTableRowItemActionNotify jobData={jobData} />
        </div>

        <div className={styles.column}>{jobData._id}</div>
        <div className={styles.column}>{jobData.status}</div>
        <div className={styles.column}>{jobData.date_created}</div>
        <div className={styles.column}>{jobData.render_host}</div>
        <div className={styles.column}>{jobData.render_path}</div>
        <div className={styles.column}>{jobData.owner_name}</div>
        <div className={styles.column}>{jobData.owner_email}</div>
      </JobsExplorerTableRowContainer>
    </div>
  );

  //
}
