import React from 'react';
import styles from './ShortDescription.module.css';
import Button from './Button';

const ShortDescription = ({ code, price, title }) => {
  return (
    <div className={styles.ShortDescription}>
      <div className={styles.contentShortDescription}>
        <h4 className={styles.code}>CODE: {code}</h4>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>R$ {price}</p>
      </div>
      <Button>Adicionar à cesta</Button>
    </div>
  );
};

export default ShortDescription;
