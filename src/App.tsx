import React, { useState } from 'react';
import './App.css';

function App() {
  const [ resultColor, setResultColor ] = useState('rgb(255, 255, 255)');
  const [ rgbCode, setRgbCode ] = useState('');

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    console.log(event.target.value);
  }

  return (
    <>
      <div className='container' style={{backgroundColor: resultColor}}>
        <input className='input' onChange={changeInput} />
        <div className='result'>{rgbCode}</div>
      </div>
    </>
  )
}

export default App
