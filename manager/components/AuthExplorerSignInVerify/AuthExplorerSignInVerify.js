'use client';

/* * */

import { useRouter } from 'next/navigation';
import { Space, Button } from '@mantine/core';
import styles from './AuthExplorerSignInVerify.module.css';

/* * */

export default function AuthExplorerSignInVerify() {
  //

  //
  // A. Setup variables

  const router = useRouter();

  //
  // B. Handle actions

  const handleSignInRetry = () => {
    router.push('/login');
  };

  //
  // C. Render components

  return (
    <div className={styles.container}>
      <p>Por favor verifique a sua caixa de email.</p>
      <Space />
      <Button variant="muted" onClick={handleSignInRetry}>
        Não recebi o email de login
      </Button>
    </div>
  );

  //
}
