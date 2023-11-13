/* * */

import '@/styles/colors.css';
import '@/styles/defaults.css';
import '@/styles/reset.css';

/* * */

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

/* * */

import Providers from './providers';
import { ColorSchemeScript } from '@mantine/core';

/* * */

export const metadata = {
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT || 3000}`),
  title: 'Printer Queue Manager',
  description: 'Manage PDF render queue.',
};

/* * */

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
