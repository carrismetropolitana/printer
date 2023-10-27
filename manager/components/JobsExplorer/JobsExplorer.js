'use client';

import { JobsExplorerContextProvider } from 'contexts/JobsExplorerContext';
import styles from './JobsExplorer.module.css';
import JobsExplorerTable from '@/components/JobsExplorerTable/JobsExplorerTable';
import JobsExplorerToolbar from '../JobsExplorerToolbar/JobsExplorerToolbar';

/* * */

export default function JobsExplorer() {
  //

  //
  // A. Fetch data

  //
  // B. Render components

  return (
    <JobsExplorerContextProvider>
      <div className={styles.container}>
        <JobsExplorerToolbar />
        <JobsExplorerTable />
      </div>
    </JobsExplorerContextProvider>
  );

  //
}
