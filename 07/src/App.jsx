import { useState } from 'react';
import './App.css';
import BlocoContainer from './components/BlocoContainer';
import Hero from './components/Hero';
import blocosDB from '../db';
import { BlocosContext } from './BlocosContext';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [localInput, setLocalInput] = useState('');
  const [isMap, setIsMap] = useState(false);

  return (
    <BlocosContext.Provider
      value={{
        isMap,
        nameInput,
        localInput,
        setIsMap,
        setNameInput,
        setLocalInput,
        blocosDB,
      }}
    >
      <Hero />
      <BlocoContainer />
    </BlocosContext.Provider>
  );
}

export default App;
