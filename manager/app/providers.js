'use client';

/* * */

import { SWRConfig } from 'swr';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

/* * */

export default function Providers({ children, session }) {
  //

  //
  // A. Setup SWR

  const swrOptions = {
    refreshInterval: 250,
    fetcher: async (...args) => {
      const res = await fetch(...args);
      if (!res.ok) {
        const errorDetails = await res.json();
        const error = new Error(errorDetails.message || 'An error occurred while fetching data.');
        error.description = errorDetails.description || 'No additional information was provided by the API.';
        error.status = res.status;
        throw error;
      }
      return res.json();
    },
  };

  //
  // B. Render components

  return (
    <SWRConfig value={swrOptions}>
      <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </SWRConfig>
  );

  //
}
