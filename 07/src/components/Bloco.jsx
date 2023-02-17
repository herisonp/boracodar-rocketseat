import React from 'react';
import style from './Bloco.module.css';
import iconLocal from '../assets/icon-local.svg';

const Bloco = ({ bloco }) => {
  return (
    <div className={style.bloco}>
      <img className={style.image} src={bloco.image} alt="" />
      <div className={style.details}>
        <h3>{bloco.name}</h3>
        <p className={style.description}>{bloco.description}</p>
        <div className={style.local}>
          <img src={iconLocal} alt="" />
          <p>{bloco.local}</p>
        </div>
      </div>
    </div>
  );
};

export default Bloco;
