'use client';

import useSWR from 'swr';
import API from '@/services/API';
import { ActionIcon, Table } from '@mantine/core';
import { IconTrashXFilled } from '@tabler/icons-react';

/* * */

export default function JobsTable() {
  //

  //
  // A. Fetch data

  const { data: allJobsData, mutate: allJobsMutate } = useSWR('/api/jobs');

  //
  // B. Handle actions

  const handleDeleteJob = async (jobId) => {
    try {
      await API({ service: 'jobs', resourceId: jobId, operation: 'delete', method: 'DELETE' });
      allJobsMutate();
    } catch (err) {
      console.log(err);
      allJobsMutate();
    }
  };

  //
  // C. Render components

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table horizontalSpacing="md" verticalSpacing="md" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#ID</Table.Th>
            <Table.Th>Date Created</Table.Th>
            <Table.Th>print_host</Table.Th>
            <Table.Th>print_path</Table.Th>
            <Table.Th>owner_name</Table.Th>
            <Table.Th>owner_email</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {allJobsData?.length > 0 &&
            allJobsData.map((job) => (
              <Table.Tr key={job._id}>
                <Table.Td>{job._id}</Table.Td>
                <Table.Td>{job.date_created}</Table.Td>
                <Table.Td>{job.print_host}</Table.Td>
                <Table.Td>{job.print_path}</Table.Td>
                <Table.Td>{job.owner_name}</Table.Td>
                <Table.Td>{job.owner_email}</Table.Td>
                <Table.Td>
                  <ActionIcon onClick={() => handleDeleteJob(job._id)}>
                    <IconTrashXFilled size={18} />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
