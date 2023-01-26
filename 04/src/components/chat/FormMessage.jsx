import React from 'react';
import send from '../../assets/send.svg';

import styles from './FormMessage.module.css';

const FormMessage = () => {
  return (
    <div className={styles.FormMessage}>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Digite sua mensagem"
      />
      <button>
        <img src={send} alt="enviar mensagem" />
      </button>
    </div>
  );
};

export default FormMessage;
