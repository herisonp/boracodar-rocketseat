import React from 'react';
import FormMessage from './FormMessage';
import HeaderChat from './HeaderChat';
import MessagesChat from './MessagesChat';

import styles from './Chat.module.css';

const Chat = () => {
  return (
    <section className={styles.Chat}>
      <HeaderChat />
      <MessagesChat />
      <FormMessage />
    </section>
  );
};

export default Chat;
