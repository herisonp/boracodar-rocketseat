import React, { useEffect, useState } from 'react';
import FormMessage from './FormMessage';
import HeaderChat from './HeaderChat';
import MessagesChat from './MessagesChat';

import styles from './Chat.module.css';

const Chat = () => {
  const messages = window.localStorage.getItem('messages');
  const [newsMessages, setNewsMessages] = useState(null);

  useEffect(() => {
    if (newsMessages !== null) {
      window.localStorage.setItem('messages', JSON.stringify(newsMessages));
    } else {
      setNewsMessages(JSON.parse(messages));
    }
  }, [newsMessages]);

  return (
    <section className={styles.Chat}>
      <HeaderChat setNewsMessages={setNewsMessages} />
      <MessagesChat newsMessages={newsMessages} />
      <FormMessage
        setNewsMessages={setNewsMessages}
        newsMessages={newsMessages}
      />
    </section>
  );
};

export default Chat;
