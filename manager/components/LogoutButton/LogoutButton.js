'use client';

/* * */

import { ActionIcon } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';

/* * */

export default function LogoutButton() {
  return (
    <ActionIcon onClick={signOut} variant="light" color="red" size="lg">
      <IconLogout size={18} />
    </ActionIcon>
  );
}
