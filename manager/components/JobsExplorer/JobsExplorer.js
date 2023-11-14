/* * */

import styles from './JobsExplorer.module.css';
import { JobsExplorerContextProvider } from 'contexts/JobsExplorerContext';
import JobsExplorerTable from '@/components/JobsExplorerTable/JobsExplorerTable';
import JobsExplorerToolbar from '@/components/JobsExplorerToolbar/JobsExplorerToolbar';
import AppVersion from '@/components/AppVersion/AppVersion';

/* * */

export default function JobsExplorer() {
  return (
    <JobsExplorerContextProvider>
      <div className={styles.container}>
        <JobsExplorerToolbar />
        <JobsExplorerTable />
        <AppVersion />
      </div>
    </JobsExplorerContextProvider>
  );
}
