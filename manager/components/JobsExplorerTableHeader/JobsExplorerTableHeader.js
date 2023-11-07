'use client';

import styles from './JobsExplorerTableHeader.module.css';
import JobsExplorerTableRowContainer from '@/components/JobsExplorerTableRowContainer/JobsExplorerTableRowContainer';

/* * */

export default function JobsExplorerTableHeader() {
  //

  //
  // A. Render components

  return (
    <div className={styles.container}>
      <JobsExplorerTableRowContainer className={styles.container}>
        <div className={styles.column} />
        <div className={styles.column}>Job #ID</div>
        <div className={styles.column}>Status</div>
        <div className={styles.column}>Date Created</div>
        <div className={styles.column}>render_host</div>
        <div className={styles.column}>render_path</div>
        <div className={styles.column}>owner_name</div>
        <div className={styles.column}>owner_email</div>
      </JobsExplorerTableRowContainer>
    </div>
  );
}
