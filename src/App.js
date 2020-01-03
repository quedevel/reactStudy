import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/day1/CountComponent';

function App() {

  const showName = (value) => {
    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountComponent></CountComponent>

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
