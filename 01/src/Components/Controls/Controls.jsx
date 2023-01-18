import React from 'react';
import styles from './Controls.module.css';
import ButtonPrev from '../Controls/ButtonPrev';
import ButtonPlay from '../Controls/ButtonPlay';
import ButtonNext from '../Controls/ButtonNext';

const Controls = (props) => {
  return (
    <div {...props} className={styles.controls}>
      <ButtonPrev />
      <ButtonPlay />
      <ButtonNext />
    </div>
  );
};

export default Controls;
