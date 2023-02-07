import { useState } from 'react';
import './Calc.css';

const Calc = () => {
  const [number, setNumber] = useState('0');
  const [sums, setSums] = useState(null);
  const [alternate, setAlternate] = useState(true);

  function handleNumber(e) {
    const newNumber = e.target.textContent;

    if (!alternate) {
      if (newNumber === '.') {
        if (String(number).includes('.')) {
          setNumber(`${number}`);
        } else {
          setNumber(`${number}${newNumber}`);
        }
      } else {
        setNumber(`${number}${newNumber}`);
      }
    } else {
      if (newNumber === '.') {
        if (String(number).includes('.')) {
          setNumber(`${number}`);
        } else {
          setNumber(`${number}${newNumber}`);
        }
      } else {
        setNumber(newNumber);
      }
    }

    setAlternate(false);
  }

  function handleOperator(e) {
    if (e) {
      if (!alternate) {
        if (sums !== null) {
          setSums(`${sums} ${number} ${e.target.textContent}`);
        } else {
          setSums(`${number} ${e.target.textContent}`);
        }
      } else {
        setSums(`${number} ${e.target.textContent}`);
      }
    } else {
      if (sums !== null) {
        setSums(`${sums} ${number}`);
      } else {
        setSums(`${number}`);
      }
    }

    setAlternate(true);
  }

  function resetNumber() {
    setNumber('0');
    setAlternate(true);
  }

  function resetAll() {
    setNumber('0');
    setSums(null);
    setAlternate(true);
  }

  function negateNumber() {
    setNumber(number * -1);
  }

  function handleEqual() {
    if (!alternate) {
      setNumber(eval(`${sums}${number}`));
      setSums(null);
    }
    setAlternate(true);
  }

  function handlePercent() {
    if (!alternate) {
      setNumber(eval(`${sums}${number / 100}`));
      setSums(null);
    }
    setAlternate(true);
  }

  return (
    <div className="calc">
      <div className="display">
        <div className="sums"> {sums === null ? '' : sums} </div>
        <div className="result">
          <span className="equal">=</span>
          <span className="number">{number}</span>
        </div>
      </div>

      <div className="buttons">
        <button onClick={resetNumber}>CE</button>
        <button onClick={resetAll}>C</button>
        <button onClick={handlePercent}>%</button>
        <button onClick={handleOperator} className="operator">
          /
        </button>
        <button onClick={handleNumber}>7</button>
        <button onClick={handleNumber}>8</button>
        <button onClick={handleNumber}>9</button>
        <button onClick={handleOperator} className="operator">
          *
        </button>
        <button onClick={handleNumber}>4</button>
        <button onClick={handleNumber}>5</button>
        <button onClick={handleNumber}>6</button>
        <button onClick={handleOperator} className="operator">
          -
        </button>
        <button onClick={handleNumber}>1</button>
        <button onClick={handleNumber}>2</button>
        <button onClick={handleNumber}>3</button>
        <button onClick={handleOperator} className="operator">
          +
        </button>
        <button onClick={negateNumber}>+/-</button>
        <button onClick={handleNumber}>0</button>
        <button onClick={handleNumber}>.</button>
        <button onClick={handleEqual} className="operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calc;
