import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(<App />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log("Hello")

const buttons = document.querySelector('button')
console.log(buttons)
document.addEventListener("click",function(e) {
  console.log(e.target)
  if (e.target.id === 'github-btn'){
    window.open('https://github.com/emilytm','_blank')
  }
});