import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Q1. In index.js create an arrow function for calculating a factorial,
//  then pass an integer and display its factorial as root element inside heading tag.
const root = ReactDOM.createRoot(document.getElementById('root'));
const fact=(num)=>{
if(num<=1){return 1}
return (num*fact(num-1))
}
// Q2. In index.js make an arrow function Prime() that prints all prime nos. from 1 to 100.
const Prime=()=>{
  let primeNumbers="0,1";
  for (let i = 2; i <= 100; i++)         
       { 		  	  
          let counter=0; 	  
          for(let num =i; num>=1; num--)
	  {
             if(i%num===0)
	     {
 		counter = counter + 1;
	     }
	  }
	  if (counter ===2)
	  {
	     primeNumbers =primeNumbers+","+i;
	  }	
       }	
  return primeNumbers;

}


root.render(
<div>
<h1>{fact(12)}</h1>

<h1>Prime No. between 1 to 100: {Prime()}</h1>
</div>
);

reportWebVitals();
