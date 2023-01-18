import React from 'react';
import styles from './Cover.module.css';

const Cover = () => {
  return (
    <div className={styles.cover}>
      <img src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" />
    </div>
  );
};

export default Cover;
