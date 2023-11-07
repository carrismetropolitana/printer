/* * */

import styles from './JobsExplorerTableHeader.module.css';
import JobsExplorerTableRowContainer from '@/components/JobsExplorerTableRowContainer/JobsExplorerTableRowContainer';

/* * */

export default function JobsExplorerTableHeader() {
  return (
    <div className={styles.container}>
      <JobsExplorerTableRowContainer className={styles.container}>
        <div className={styles.column} />

        <div className={styles.column}>job_id</div>

        <div className={styles.column}>status</div>

        <div className={styles.column}>notification_count</div>
        <div className={styles.column}>download_count</div>

        <div className={styles.column}>date_registered</div>
        <div className={styles.column}>date_processing</div>
        <div className={styles.column}>date_ready</div>
        <div className={styles.column}>date_notified</div>
        <div className={styles.column}>date_downloaded</div>
        <div className={styles.column}>date_expired</div>

        <div className={styles.column}>owner_name</div>
        <div className={styles.column}>owner_email</div>
        <div className={styles.column}>owner_lang</div>
        <div className={styles.column}>gdpr_consent</div>

        <div className={styles.column}>render_host</div>
        <div className={styles.column}>render_path</div>
        <div className={styles.column}>render_format</div>
      </JobsExplorerTableRowContainer>
    </div>
  );
}
