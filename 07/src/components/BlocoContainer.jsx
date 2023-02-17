import React, { useContext } from 'react';
import Bloco from './Bloco';
import { BlocosContext } from '../BlocosContext';
import BlocoMaps from './BlocoMaps';
import style from './BlocoContainer.module.css';

const BlocoContainer = () => {
  const { isMap, setIsMap, nameInput, localInput, blocosDB } =
    useContext(BlocosContext);
  return (
    <div className={`${style.blocoContainer} container`}>
      <div className={style.headerBlocos}>
        <h2>Blocos recomendados</h2>
        <div className={style.boxButtons}>
          <button
            onClick={() => {
              setIsMap(false);
            }}
            className={!isMap ? style.active : ''}
          >
            Lista
          </button>
          <button
            onClick={() => {
              setIsMap(true);
            }}
            className={isMap ? style.active : ''}
          >
            Mapa
          </button>
        </div>
      </div>
      {isMap ? (
        <BlocoMaps />
      ) : (
        <div className={style.blocos}>
          {blocosDB
            .filter(
              ({ name, local }) =>
                name.toLowerCase().includes(nameInput.toLowerCase()) &&
                local.toLowerCase().includes(localInput.toLowerCase()),
            )
            .map((item, index) => (
              <Bloco key={`${item.id}${index}`} bloco={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default BlocoContainer;
