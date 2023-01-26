import React from 'react';
import avatar from '../../assets/avatar-cecilia.png';
import close from '../../assets/close.svg';

import styles from './HeaderChat.module.css';

const HeaderChat = () => {
  return (
    <header className={styles.HeaderChat}>
      <div className={styles.ContactInfos}>
        <img className={styles.Avatar} src={avatar} alt="avatar cecilia" />
        <div className={styles.ContactDetails}>
          <h4>Cecilia Sassaki</h4>
          <div className={`${styles.Status} ${styles.online}`}>Online</div>
        </div>
      </div>

      <button className={styles.ButtonClose}>
        <img src={close} alt="fechar conversa" />
      </button>
    </header>
  );
};

export default HeaderChat;
