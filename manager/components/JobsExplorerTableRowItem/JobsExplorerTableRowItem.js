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

        <div className={styles.column}>{jobData.date_registered}</div>
        <div className={styles.column}>{jobData.date_processing}</div>
        <div className={styles.column}>{jobData.date_ready}</div>
        <div className={styles.column}>{jobData.date_notified}</div>
        <div className={styles.column}>{jobData.date_downloaded}</div>
        <div className={styles.column}>{jobData.date_expired}</div>

        <div className={styles.column}>{jobData.owner_name}</div>
        <div className={styles.column}>{jobData.owner_email}</div>
        <div className={styles.column}>{jobData.owner_lang}</div>
        <div className={styles.column}>{jobData.gdpr_consent}</div>

        <div className={styles.column}>{jobData.render_host}</div>
        <div className={styles.column}>{jobData.render_path}</div>
        <div className={styles.column}>{jobData.render_format}</div>
      </JobsExplorerTableRowContainer>
    </div>
  );
}
