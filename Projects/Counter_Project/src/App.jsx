import { useState,  useEffect } from 'react';

//import './App.css'

function App() {
  // hooks are use to sync UI with console basically 

  // useStae  is used for state management in React application, it has value on zero index i.e :counter , and one function 
  // i.e setCounter {You can give any name to them }
  let [counter, setCounter]=useState(1) // useState hooks 

  function addValue (){
   
  // If i dont to increment value after Counter==20 :
    if(counter===20){
      alert("Hey , You reach limit") ;
      // disable my button:
      let btn=document.getElementById('btn1')
      btn.disabled = true;
    return
    }
    setCounter(counter+1);
  
   
  }


   // If i dont to decrement value after Counter==0:
  let subValue = ()=> {
   
    if(counter===0){
      alert("Hey , You reach limit") ;
      // disable my button:
      let btn=document.getElementById('btn2')
      btn.disabled = true;
      return
    
    }
    setCounter(counter-1)
    
  }
  
  return (
    <  >
    <h1>Counter App</h1>
    <h2>Counter Value : {counter}</h2>
    <button id="btn1" onClick={addValue}> +</button>
    
    <button id="btn2" onClick={subValue}>_</button>
    </>
  )
}

export default App
