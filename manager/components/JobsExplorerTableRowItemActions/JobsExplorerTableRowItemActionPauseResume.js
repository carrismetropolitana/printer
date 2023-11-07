'use client';

import useSWR from 'swr';
import API from '@/services/API';
import { useState } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPlayerPause, IconPlayerTrackNext, IconRotate2 } from '@tabler/icons-react';

/* * */

export default function JobsExplorerTableRowItemActionPauseResume({ jobData }) {
  //

  //
  // A. Setup variables

  const [isLoading, setIsLoading] = useState(false);

  //
  // B. Fetch data

  const { mutate: allJobsMutate } = useSWR('/manager/api/jobs');

  //
  // B. Handle actions

  const handleResumeRestart = async () => {
    try {
      setIsLoading(true);
      await API({ service: 'jobs', resourceId: jobData._id, operation: 'update/status', method: 'POST', body: { status: 'registered' } });
      allJobsMutate();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      allJobsMutate();
      setIsLoading(false);
    }
  };

  const handlePause = async () => {
    try {
      setIsLoading(true);
      await API({ service: 'jobs', resourceId: jobData._id, operation: 'update/status', method: 'POST', body: { status: 'paused' } });
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

  switch (jobData.status) {
    case 'registered':
      return (
        <Tooltip label="Pause" withArrow>
          <ActionIcon onClick={handlePause} loading={isLoading} variant="light" color="yellow">
            <IconPlayerPause size={18} />
          </ActionIcon>
        </Tooltip>
      );

    case 'paused':
      return (
        <Tooltip label="Resume" withArrow>
          <ActionIcon onClick={handleResumeRestart} loading={isLoading} variant="light" color="blue">
            <IconPlayerTrackNext size={18} />
          </ActionIcon>
        </Tooltip>
      );

    case 'processing':
      return (
        <ActionIcon variant="light" disabled>
          <IconRotate2 size={18} />
        </ActionIcon>
      );

    default:
      return (
        <Tooltip label="Restart" withArrow>
          <ActionIcon onClick={handleResumeRestart} loading={isLoading} variant="light" color="green">
            <IconRotate2 size={18} />
          </ActionIcon>
        </Tooltip>
      );
  }

  //
}
