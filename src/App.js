import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';

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

  const arr = [
    { pno: 1, pname: "01", price: 3000, amount: 0 },
    { pno: 2, pname: "02", price: 4000, amount: 0 },
    { pno: 3, pname: "03", price: 5000, amount: 0 },
    { pno: 4, pname: "04", price: 6000, amount: 0 },
    { pno: 5, pname: "05", price: 7000, amount: 0 }
]


  return (
    <div className="App">
      <header className="App-header">
        <ItemComponent arr ={arr}></ItemComponent>
      </header>
    </div>
  );
}

export default App;
