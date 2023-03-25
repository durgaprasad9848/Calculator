import React, { useState,useRef } from 'react';
import "./App.css";

export default function App() {
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const handleNumberClick = (number) => {
    setResult(result + number);
  };

  const handleOperatorClick = (operator) => {
    setResult(result + operator);
  };

  const handleClearClick = () => {
    setResult('');
  };

  const handleEqualClick = () => {

    setResult(eval(result));

  };

  return (
    <div className="App">
      <div className="Box">
        <center><h3>Prasad Calculator</h3></center> 
        <div className="buttons">
          <input ref={inputRef} className="input" value={result} readOnly></input>
          <div className="ipbox">
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={handleClearClick}>C</button>
            <button onClick={handleEqualClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
