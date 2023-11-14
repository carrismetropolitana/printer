'use client';

/* * */

import useSWR from 'swr';
import API from '@/services/API';
import { useState } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

/* * */

export default function JobsExplorerTableRowItemActionDelete({ jobData }) {
  //

  //
  // A. Setup variables

  const [isLoading, setIsLoading] = useState(false);

  //
  // B. Fetch data

  const { mutate: allJobsMutate } = useSWR('/api/jobs');

  //
  // B. Handle actions

  const handleDelete = async () => {
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

  return (
    <Tooltip label="Delete" withArrow>
      <ActionIcon onClick={handleDelete} loading={isLoading} disabled={jobData.status === 'processing'} variant="light" color="red">
        <IconTrash size={18} />
      </ActionIcon>
    </Tooltip>
  );

  //
}
