import React from 'react';
import Controls from '../Controls/Controls';
import ProgressBar from '../Controls/ProgressBar';
import Title from '../Display/Title';
import Cover from '../Display/Cover';

import styles from './Player2.module.css';

const Player2 = () => {
  return (
    <>
      <div className={styles.displayPlayer2}>
        <Cover />
        <Title />
      </div>
      <Controls style={{ justifyContent: 'space-around' }} />
      <ProgressBar />
    </>
  );
};

export default Player2;
