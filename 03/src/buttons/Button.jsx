import React from 'react';
import './Button.css';
import iconLoading from '../assets/icon-loading.svg';
import iconMovable from '../assets/icon-movable.svg';

const Button = ({
  state = 'default',
  variant = 'primary',
  disable = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`Button ${state} ${variant}`}
      disabled={disable}
      {...props}
    >
      {state === 'loading' && <img src={iconLoading} />}
      {state === 'movable' && <img src={iconMovable} />}

      {children}
    </button>
  );
};

export default Button;
