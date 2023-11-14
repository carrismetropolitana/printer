'use client';

/* * */

import { signIn } from 'next-auth/react';
import { TextInput, ActionIcon } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { SignInDefault } from '@/schemas/SignIn/default';
import { SignInValidation } from '@/schemas/SignIn/validation';
import { IconArrowRight } from '@tabler/icons-react';
import styles from './AuthExplorerSignIn.module.css';

/* * */

export default function AuthExplorerSignIn() {
  //

  //
  // A. Setup form

  const form = useForm({
    clearInputErrorOnChange: true,
    validate: yupResolver(SignInValidation),
    initialValues: SignInDefault,
  });

  //
  // B. Handle actions

  const handleSignIn = async () => {
    signIn('email', { email: form.values.email, callbackUrl: '/' });
  };

  //
  // C. Render components

  return (
    <form onSubmit={form.onSubmit(handleSignIn)} className={styles.container}>
      <TextInput type="email" placeholder="email@exemplo.pt" {...form.getInputProps('email')} />
      <ActionIcon type="submit" variant="light" size="lg">
        <IconArrowRight size={18} />
      </ActionIcon>
    </form>
  );

  //
}
