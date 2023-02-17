import React, { useContext, useState } from 'react';
import style from './Form.module.css';
import iconSearch from '../assets/icon-search.svg';
import iconLocal from '../assets/icon-local.svg';
import { BlocosContext } from '../BlocosContext';
import blocosDB from '../../db';

const Form = () => {
  const { setNameInput, setLocalInput } = useContext(BlocosContext);
  const [nameSearc, setNameSearch] = useState('');
  const [localSearc, setLocalSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setNameInput(nameSearc);
    setLocalInput(localSearc);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputBox}>
        <img src={iconSearch} alt="" />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Pesquise por nome"
          value={nameSearc}
          onChange={({ target }) => setNameSearch(target.value)}
        />
      </div>

      <div className={style.inputBox}>
        <img src={iconLocal} alt="" />
        <select
          name="local"
          id="local"
          value={localSearc}
          onChange={({ target }) => setLocalSearch(target.value)}
        >
          <option value="">Selecione uma cidade</option>
          <option value="São Paulo - SP">São Paulo - SP</option>
          <option value="Florianópolis - SC">Florianópolis - SC</option>
          <option value="Curitiba - PR">Curitiba - PR</option>
          <option value="Salvador - BA">Salvador - BA</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Porto Alegre - RS">Porto Alegre - RS</option>
        </select>
      </div>

      <button>Buscar agora</button>
    </form>
  );
};

export default Form;
