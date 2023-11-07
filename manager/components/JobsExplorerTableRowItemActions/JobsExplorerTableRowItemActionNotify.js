'use client';

/* * */

import useSWR from 'swr';
import API from '@/services/API';
import { useState } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';

/* * */

export default function JobsExplorerTableRowItemActionNotify({ jobData }) {
  //

  //
  // A. Setup variables

  const [isLoading, setIsLoading] = useState(false);

  //
  // B. Fetch data

  const { mutate: allJobsMutate } = useSWR('/manager/api/jobs');

  //
  // C. Handle actions

  const handleNotify = async () => {
    if (jobData.status !== 'ready') return;
    try {
      setIsLoading(true);
      await API({ service: 'jobs', resourceId: jobData._id, operation: 'delete', method: 'DELETE' });
      allJobsMutate();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      allJobsMutate();
      setIsLoading(false);
    }
  };

  //
  // D. Render components

  return (
    <Tooltip label="Notify User" withArrow disabled={jobData.status !== 'ready'}>
      <ActionIcon onClick={handleNotify} loading={isLoading} disabled={jobData.status !== 'ready'} variant="light" color="blue">
        <IconSend size={18} />
      </ActionIcon>
    </Tooltip>
  );

  //
}
