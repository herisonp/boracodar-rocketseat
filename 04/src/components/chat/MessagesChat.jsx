import React from 'react';
import styles from './MessagesChat.module.css';

const MessagesChat = () => {
  return (
    <div className={styles.MessagesChat}>
      <div className={styles.messagesDay}>
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
      </div>
    </div>
  );
};

export default MessagesChat;
