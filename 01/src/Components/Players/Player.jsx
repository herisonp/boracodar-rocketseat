import React from 'react';
import styles from './Player.module.css';
import Player1 from './Player1';
import Player2 from './Player2';
import Player3 from './Player3';

const Player = ({ player = 'player-1', ...props }) => {
  return (
    <>
      <div className={styles[player] + ' ' + styles.Player}>
        {player === 'player-1' ? <Player1 /> : ''}
        {player === 'player-2' ? <Player2 /> : ''}
        {player === 'player-3' ? <Player3 /> : ''}
      </div>
    </>
  );
};

export default Player;
