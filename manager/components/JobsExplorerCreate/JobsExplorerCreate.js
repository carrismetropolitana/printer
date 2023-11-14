'use client';

/* * */

import useSWR from 'swr';
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';

/* * */

export default function JobsExplorerCreate() {
  //

  const [opened, { open, close }] = useDisclosure(false);

  const { mutate: allJobsMutate } = useSWR('/api/jobs');

  //
  // D. Handle actions

  const handleNew = async () => {
    let endpointUrl = '/api/jobs/create';
    if (process.NODE_ENV === 'production') endpointUrl = '/publish';

    await fetch(endpointUrl, {
      method: 'POST',
      body: JSON.stringify({
        owner_name: 'Teste',
        owner_email: 'johnyvasconcelos@icloud.com',
        owner_lang: 'pt',
        gdpr_consent: true,
        print_host: 'escolas.carrismetropolitana.pt',
        print_path: '803239/render',
        status: 'registered',
      }),
    });
    allJobsMutate();
    close();
  };

  //
  // E. Render components

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <Button onClick={handleNew}>Create New</Button>
      </Modal>

      <Button onClick={open}>New</Button>
    </>
  );

  //
}
