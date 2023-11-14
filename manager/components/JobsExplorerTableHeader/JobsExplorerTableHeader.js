/* * */

import styles from './JobsExplorerTableHeader.module.css';
import { useJobsExplorerContext } from 'contexts/JobsExplorerContext';
import JobsExplorerTableRowContainer from '@/components/JobsExplorerTableRowContainer/JobsExplorerTableRowContainer';

/* * */

export default function JobsExplorerTableHeader() {
  //

  //
  // A. Setup variables

  const jobsExplorerContext = useJobsExplorerContext();

  //
  // B. Handle actions

  const handleClickColumnHeader = async (columnKey) => {
    jobsExplorerContext.setSortKey(columnKey);
  };

  //
  // B. Render components

  return (
    <div className={styles.container}>
      <JobsExplorerTableRowContainer className={styles.container}>
        <div className={styles.column} />

        <div className={styles.column}>job_id</div>

        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('status')}>
          status
        </div>

        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('notification_count')}>
          notification_count
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('download_count')}>
          download_count
        </div>

        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('date_registered')}>
          date_registered
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('date_updated')}>
          date_updated
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('date_processing')}>
          date_processing
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('date_ready')}>
          date_ready
        </div>
        <div className={styles.column}>date_notified</div>
        <div className={styles.column}>date_downloaded</div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('date_expired')}>
          date_expired
        </div>

        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('owner_name')}>
          owner_name
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('owner_email')}>
          owner_email
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('owner_lang')}>
          owner_lang
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('gdpr_consent')}>
          gdpr_consent
        </div>

        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('render_host')}>
          render_host
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('render_path')}>
          render_path
        </div>
        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('render_format')}>
          render_format
        </div>

        <div className={`${styles.column} ${styles.sortable}`} onClick={() => handleClickColumnHeader('filename')}>
          filename
        </div>
      </JobsExplorerTableRowContainer>
    </div>
  );

  //
}
