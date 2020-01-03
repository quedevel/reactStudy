import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';

function App() {

  const arr1 = [
    { title: "Quiz1....", answer: "1" },
    { title: "Quiz2....", answer: "2" },
    { title: "Quiz3....", answer: "3" },
    { title: "Quiz4....", answer: "4" },
    { title: "Quiz5....", answer: "5" }
  ]

  const arr2 = [
    { title: "2Quiz1....", answer: "1" },
    { title: "2Quiz2....", answer: "2" },
    { title: "2Quiz3....", answer: "3" },
    { title: "2Quiz4....", answer: "4" },
    { title: "2Quiz5....", answer: "5" }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <QuizComponent arr={arr1}></QuizComponent>
        <QuizComponent arr={arr2}></QuizComponent>
      </header>
    </div>
  );
}

export default App;
