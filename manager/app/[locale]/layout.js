'use client';

/* * */

import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

/* * */

export default function Layout({ children, params: { locale } }) {
  //

  let messages;

  try {
    messages = import(`../../translations/${locale}.json`).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Lisbon" now={Date.now()}>
      {children}
    </NextIntlClientProvider>
  );

  //
}
