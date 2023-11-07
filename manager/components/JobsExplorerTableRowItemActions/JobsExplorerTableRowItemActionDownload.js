'use client';

/* * */

import useSWR from 'swr';
import API from '@/services/API';
import { useState } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

/* * */

export default function JobsExplorerTableRowItemActionDownload({ jobData }) {
  //

  //
  // A. Setup variables

  const [isLoading, setIsLoading] = useState(false);

  const jobCanBeDownloaded = jobData.status === 'ready' || jobData.status === 'downloaded';

  //
  // B. Fetch data

  const { mutate: allJobsMutate } = useSWR('/manager/api/jobs');

  //
  // B. Handle actions

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      alert('download');
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
    <Tooltip label="Download" withArrow disabled={!jobCanBeDownloaded}>
      <ActionIcon onClick={handleDownload} loading={isLoading} disabled={!jobCanBeDownloaded} variant="light" color="grape">
        <IconDownload size={18} />
      </ActionIcon>
    </Tooltip>
  );

  //
}
