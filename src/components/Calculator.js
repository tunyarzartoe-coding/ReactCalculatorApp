import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const data = ['C', '±', '%', ' / ', '7', '8', '9', ' * ', '4', '5', '6', ' - ', '1', '2', '3', ' + ', '0', '.', '='];
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {data?.map((value) => (
          <button key={value} onClick={() => handleClick(value)} className={value === '0' ? 'zero' : ''}>
            {value.trim()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
