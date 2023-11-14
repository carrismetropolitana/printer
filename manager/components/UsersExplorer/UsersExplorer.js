'use client';

/* * */

import useSWR from 'swr';
import styles from './UsersExplorer.module.css';

/* * */

export default function UsersExplorer() {
  //

  //
  // A. Setup variables

  const { data: allUsersData } = useSWR('/api/users');

  //
  // B. Render components

  return <div className={styles.container}>{allUsersData?.length ? allUsersData.map((item) => <div key={item._id}>{item.name}</div>) : <div>No Data</div>}</div>;

  //
}
