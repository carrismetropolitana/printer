/* * */

import pjson from '../../package.json';
import styles from './AppVersion.module.css';

/* * */

export default function AppVersion() {
  return <p className={styles.container}>{pjson.version}</p>;
}
