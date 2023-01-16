import React from 'react';
import styles from './ProductCard.module.css';
import ProductImage from './ProductImage';
import ShortDescription from './ShortDescription';
import sofaPng from '../Assets/sofa.png';
import sofaGif from '../Assets/sofa.gif';

const ProductCard = () => {
  return (
    <section className={styles.ProductCard}>
      <ProductImage className={styles.side1} png={sofaPng} gif={sofaGif} />
      <ShortDescription
        className={styles.side2}
        price="4.000"
        title="Sofa Margot II - Rosé"
        code="42404"
      />
    </section>
  );
};

export default ProductCard;
