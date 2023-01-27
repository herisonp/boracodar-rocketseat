import React, { useEffect, useRef, useState } from 'react';
import styles from './MessagesChat.module.css';

const MessagesChat = ({ newsMessages }) => {
  const messagesSection = useRef(null);
  function hourMessage(date) {
    const hora = new Date(date).getHours();
    const minutos = new Date(date).getMinutes();

    return `${hora}:${minutos}`;
  }

  useEffect(() => {
    messagesSection.current.scrollTop = messagesSection.current.scrollHeight;
  }, [newsMessages]);

  return (
    <div ref={messagesSection} className={styles.MessagesChat}>
      <div className={styles.messagesDay}>
        <>
          <div className={styles.date}>Hoje</div>

          <div className={`${styles.message} ${styles.left}`}>
            <div className={styles.messageDetails}>
              <p>Cecilia - 11:30</p>
            </div>
            <p>Tive uma ideia incrível para um projeto! 😍</p>
          </div>

          <div className={`${styles.message} ${styles.right}`}>
            <div className={styles.messageDetails}>
              <p>Você - 11:32</p>
            </div>
            <p>Sério? Me conta mais.</p>
          </div>

          <div className={`${styles.message} ${styles.left}`}>
            <div className={styles.messageDetails}>
              <p>Cecilia - 11:34</p>
            </div>
            <p>
              E se a gente fizesse um chat moderno e responsivo em apenas uma
              semana?
            </p>
          </div>

          <div className={`${styles.message} ${styles.right}`}>
            <div className={styles.messageDetails}>
              <p>Você - 11:36</p>
            </div>
            <p>#boraCodar! 🚀</p>
          </div>
        </>

        {newsMessages &&
          newsMessages.map((message, index) => (
            <div
              key={message.message + index}
              className={`${styles.message} ${styles.right}`}
            >
              <div className={styles.messageDetails}>
                <p>
                  {message.author} - {hourMessage(message.currentDate)}
                </p>
              </div>
              <p>{message.message}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MessagesChat;
