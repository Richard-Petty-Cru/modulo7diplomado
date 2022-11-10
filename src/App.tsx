import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const  App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  
  const sumar = (n: number) => {
    console.log(n);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={ () => sumar(2)}>Sumar</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
