/* * */

import styles from './JobsExplorerTableRowItem.module.css';
import JobsExplorerTableRowContainer from '@/components/JobsExplorerTableRowContainer/JobsExplorerTableRowContainer';
import JobsExplorerTableRowItemActionDelete from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionDelete';
import JobsExplorerTableRowItemActionPauseResume from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionPauseResume';
import JobsExplorerTableRowItemActionDownload from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionDownload';
import JobsExplorerTableRowItemActionLink from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionLink';
import JobsExplorerTableRowItemActionNotify from '@/components/JobsExplorerTableRowItemActions/JobsExplorerTableRowItemActionNotify';

/* * */

export default function JobsExplorerTableRowItem({ jobData }) {
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

        <div className={styles.column}>{jobData.date_notified?.length || 0}</div>
        <div className={styles.column}>{jobData.date_downloaded?.length || 0}</div>

        <div className={styles.column}>{jobData.date_registered || '(empty)'}</div>
        <div className={styles.column}>{jobData.date_updated || '(empty)'}</div>
        <div className={styles.column}>{jobData.date_processing || '(empty)'}</div>
        <div className={styles.column}>{jobData.date_ready || '(empty)'}</div>
        <div className={styles.column}>{jobData.date_notified || '(empty)'}</div>
        <div className={styles.column}>{jobData.date_downloaded || '(empty)'}</div>
        <div className={styles.column}>{jobData.date_expired || '(empty)'}</div>

        <div className={styles.column}>{jobData.owner_name || '(empty)'}</div>
        <div className={styles.column}>{jobData.owner_email || '(empty)'}</div>
        <div className={styles.column}>{jobData.owner_lang || '(empty)'}</div>
        <div className={styles.column}>{jobData.gdpr_consent || '(empty)'}</div>

        <div className={styles.column}>{jobData.render_host || '(empty)'}</div>
        <div className={styles.column}>{jobData.render_path?.substring(0, 30) || '(empty)'}</div>
        <div className={styles.column}>{jobData.render_format || '(empty)'}</div>

        <div className={styles.column}>{jobData.filename?.substring(0, 30) || '(empty)'}</div>
      </JobsExplorerTableRowContainer>
    </div>
  );
}
