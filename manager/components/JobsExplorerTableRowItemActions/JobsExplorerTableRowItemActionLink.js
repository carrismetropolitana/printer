'use client';

import Link from 'next/link';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

/* * */

export default function JobsExplorerTableRowItemActionLink({ jobData }) {
  //

  //
  // A. Setup variables

  const hasValidLink = jobData.render_host && jobData.render_path;

  //
  // B. Render components

  return hasValidLink ? (
    <Link href={`https://${jobData.render_host}/${jobData.render_path}`} target="_blank">
      <Tooltip label="Open Render Page" withArrow>
        <ActionIcon variant="light" color="gray">
          <IconExternalLink size={18} />
        </ActionIcon>
      </Tooltip>
    </Link>
  ) : (
    <ActionIcon variant="light" color="gray" disabled>
      <IconExternalLink size={18} />
    </ActionIcon>
  );

  //
}
