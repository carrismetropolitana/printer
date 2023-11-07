'use client';

/* * */

import { ActionIcon, Tooltip } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

/* * */

export default function JobsExplorerTableRowItemActionDownload({ jobData }) {
  //

  //
  // A. Setup variables

  const jobCanBeDownloaded = jobData.status === 'ready' || jobData.status === 'downloaded';

  //
  // B. Handle actions

  const handleDownload = async () => {
    window.open(`/download/${jobData._id}`, '_blank');
  };

  //
  // C. Render components

  return (
    <Tooltip label="Download" withArrow disabled={!jobCanBeDownloaded}>
      <ActionIcon onClick={handleDownload} disabled={!jobCanBeDownloaded} variant="light" color="grape">
        <IconDownload size={18} />
      </ActionIcon>
    </Tooltip>
  );

  //
}
