import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Q1. In index.js create an arrow function for calculating a factorial,
//  then pass an integer and display its factorial as root element inside heading tag.
const root = ReactDOM.createRoot(document.getElementById('root'));
const fact=(num)=>{
if(num<=1){return 1}
return (num*fact(num-1))
}

root.render(
<h1>{fact(12)}</h1>
);

reportWebVitals();
