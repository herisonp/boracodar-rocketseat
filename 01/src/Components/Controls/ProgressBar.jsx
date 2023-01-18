import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.progress}>
        <div className={styles.bar}></div>
      </div>
      <div className={styles.time}>
        <div className={styles.timeTotal}>03:20</div>
        <div className={styles.timeLeft}>00:12</div>
      </div>
    </div>
  );
};

export default ProgressBar;
