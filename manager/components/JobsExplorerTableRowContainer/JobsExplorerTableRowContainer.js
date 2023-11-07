/* * */

import styles from './JobsExplorerTableRowContainer.module.css';

/* * */

export default function JobsExplorerTableRowContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
