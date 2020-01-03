import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';

function App() {

  const showName = (value) => {
    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <QuizComponent></QuizComponent>
      </header>
    </div>
  );
}

export default App;
