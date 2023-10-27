'use client';

import styles from './NoDataLabel.module.css';

export default function NoDataLabel({ fill, text }) {
  //

  return <div className={`${styles.container} ${fill && styles.fill}`}>{text || 'No Data'}</div>;
}
