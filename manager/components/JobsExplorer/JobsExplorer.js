'use client';

/* * */

import styles from './JobsExplorer.module.css';
import { JobsExplorerContextProvider } from 'contexts/JobsExplorerContext';
import JobsExplorerTable from '@/components/JobsExplorerTable/JobsExplorerTable';
import JobsExplorerToolbar from '@/components/JobsExplorerToolbar/JobsExplorerToolbar';
import AppVersion from '@/components/AppVersion/AppVersion';

/* * */

export default function JobsExplorer() {
  const handleClick = async () => {
    try {
      await fetch('https://printer.carrismetropolitana.pt/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          owner_name: 'Teste',
          owner_email: 'johnyvasconcelos@icloud.com',
          owner_lang: 'pt',
          gdpr_consent: true,
          render_host: 'escolas.carrismetropolitana.pt',
          render_path: '803239/render',
          filename: 'Teste Nome PDF',
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <JobsExplorerContextProvider>
      <div className={styles.container}>
        <JobsExplorerToolbar />
        <JobsExplorerTable />
        <AppVersion />
        <div onClick={handleClick}>CLICK</div>
      </div>
    </JobsExplorerContextProvider>
  );
}
