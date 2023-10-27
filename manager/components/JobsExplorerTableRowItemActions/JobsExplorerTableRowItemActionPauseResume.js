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

  const handleRestart = async () => {
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

  const handleResume = async () => {
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

  const handlePause = async () => {
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
  // C. Render components

  switch (jobData.status) {
    case 'finished':
      return (
        <Tooltip label="Restart" withArrow>
          <ActionIcon onClick={handleRestart} loading={isLoading} variant="light" color="green">
            <IconRotate2 size={18} />
          </ActionIcon>
        </Tooltip>
      );

    case 'paused':
      return (
        <Tooltip label="Resume" withArrow>
          <ActionIcon onClick={handleResume} loading={isLoading} variant="light" color="yellow">
            <IconPlayerTrackNext size={18} />
          </ActionIcon>
        </Tooltip>
      );

    default:
      return (
        <Tooltip label="Pause" withArrow>
          <ActionIcon onClick={handlePause} loading={isLoading} variant="light" color="yellow">
            <IconPlayerPause size={18} />
          </ActionIcon>
        </Tooltip>
      );
  }

  //
}
