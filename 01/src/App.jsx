import React from 'react';
import './App.css';
import Player from './Components/Players/Player';

function App() {
  return (
    <section className="App">
      <Player player="player-1" />
      <Player player="player-2" />
      <Player player="player-3" />
    </section>
  );
}

export default App;
