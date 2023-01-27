import React, { useRef, useState } from 'react';
import send from '../../assets/send.svg';

import styles from './FormMessage.module.css';

const FormMessage = ({ setNewsMessages, newsMessages }) => {
  const [inputText, setInputText] = useState('');
  const buttonSend = useRef(null);

  function addMessage() {
    if (inputText !== '') {
      if (newsMessages === null) {
        setNewsMessages([
          {
            author: 'Você',
            currentDate: new Date(),
            message: inputText,
          },
        ]);
        setInputText('');
      } else {
        setNewsMessages([
          ...newsMessages,
          {
            author: 'Você',
            currentDate: new Date(),
            message: inputText,
          },
        ]);
        setInputText('');
      }
    } else {
      return null;
    }
  }

  window.addEventListener('keydown', ({ key }) => {
    if (key == 'Enter') {
      addMessage();
    }
  });

  return (
    <div className={styles.FormMessage}>
      <input
        type="text"
        id="message"
        name="message"
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
        placeholder="Digite sua mensagem"
      />
      <button ref={buttonSend} onClick={addMessage}>
        <img src={send} alt="enviar mensagem" />
      </button>
    </div>
  );
};

export default FormMessage;
