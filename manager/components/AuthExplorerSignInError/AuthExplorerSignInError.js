'use client';

/* * */

import { useSearchParams, useRouter } from 'next/navigation';
import styles from './AuthExplorerSignInError.module.css';
import { useMemo } from 'react';
import { Space, Button } from '@mantine/core';

/* * */

export default function AuthExplorerSignInError() {
  //

  //
  // A. Setup variables

  const router = useRouter();
  const searchParams = useSearchParams();

  //
  // B. Transform data

  const errorMessage = useMemo(() => {
    switch (searchParams.get('error')) {
      case 'Configuration':
        return 'error_type.Configuration';
      case 'AccessDenied':
        return 'error_type.AccessDenied';
      case 'Verification':
        return 'error_type.Verification';
      default:
        return 'error_type.unknown';
    }
  }, [searchParams]);

  //
  // C. Handle actions

  const handleSignInRetry = () => {
    router.push('/login');
  };

  //
  // D. Render components

  return (
    <div className={styles.container}>
      <p className={styles.errorMessage}>{errorMessage}</p>
      <Space />
      <Button onClick={handleSignInRetry}>Tentar Novamente</Button>
    </div>
  );

  //
}
