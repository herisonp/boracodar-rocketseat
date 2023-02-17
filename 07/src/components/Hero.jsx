import React from 'react';
import Form from './Form';
import './Hero.css';

const Hero = () => {
  return (
    <header id="hero">
      <h5>Encontre seu bloco</h5>
      <h1>
        Encontre os <span>melhores blocos</span> de carnaval de 2023
      </h1>
      <Form />
    </header>
  );
};

export default Hero;
