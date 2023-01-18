import React from 'react';
import Controls from '../Controls/Controls';
import ProgressBar from '../Controls/ProgressBar';
import Title from '../Display/Title';
import Cover from '../Display/Cover';

import styles from './Player3.module.css';

const Player3 = () => {
  return (
    <>
      <div className={styles.displayPlayer3}>
        <Cover />
        <Title />
      </div>
      <Controls style={{ justifyContent: 'space-around' }} />
    </>
  );
};

export default Player3;
