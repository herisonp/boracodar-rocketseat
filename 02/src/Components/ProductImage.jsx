import React, { useState } from 'react';
import styles from './ProductImage.module.css';
import svg360 from '../Assets/360.svg';
import svgClose from '../Assets/close.svg';

const ProductImage = ({ png, gif }) => {
  const [active, setActive] = useState(false);

  function controlImg() {
    setActive(!active);
  }

  return (
    <div className={styles.ProductImage}>
      <img
        onClick={controlImg}
        className={styles.close}
        src={active ? svgClose : svg360}
        style={active ? { width: '16px' } : { width: 'auto' }}
      />
      {active ? (
        <img className={`${styles.img} anima`} src={gif} />
      ) : (
        <img className={`${styles.img} anima`} src={png} />
      )}
    </div>
  );
};

export default ProductImage;
