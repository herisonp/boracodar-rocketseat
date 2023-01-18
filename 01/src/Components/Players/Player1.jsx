import React from 'react';
import styles from './Player1.module.css';
import Controls from '../Controls/Controls';
import ProgressBar from '../Controls/ProgressBar';
import Title from '../Display/Title';
import Cover from '../Display/Cover';

const Player1 = () => {
  return (
    <>
      <Cover />
      <Title />
      <Controls />
      <ProgressBar />
    </>
  );
};

export default Player1;
