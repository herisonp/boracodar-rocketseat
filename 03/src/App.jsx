import React from 'react';
import './App.css';
import Button from './buttons/Button';

const statesButton = ['primary', 'secundary', 'tertiary'];

function App() {
  return (
    <div className="App">
      {statesButton.map((button) => (
        <div key={button} className="container-buttons">
          <h3>{button}:</h3>
          <Button variant={button}>Default {button}</Button>
          <Button variant={button} disable={true}>
            Disabled {button}
          </Button>
          <Button state="loading" variant={button}>
            Loading {button}
          </Button>
          <Button state="movable" variant={button}>
            Movable {button}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default App;
