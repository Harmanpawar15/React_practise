import React from 'react';
import { useState } from 'react';

function Slides({slides}) {
  // array of data:
  const data= [
    {title:"Todays Workout",text:"We will do three fundamental excersise"},
    { title: 'First 10 Pushup', text: 'Do 10 rep , dont rush.' },
    { title: 'Now 10 squats', text: 'Do 10 rep , maintain posture.' },
    { title: 'Last 10 situps', text: 'Do 10 rep , do it slowly.' },
    {title: 'Great Job!', text: 'Yeah! you did it .'}
  ]
    // state for Restart button:
    const[currentSlide,setCurrrentSlide]=useState(0)

    
 // event handeler for buttons:

   // for restart
    const handleClickRestart= ()=>{

     setCurrrentSlide(0)
    }

  // for next
    const handleClickNext=()=>{
       
            for(let i = 0; i<data.length;i++){
                if(i===currentSlide){
                    setCurrrentSlide((i+1) % data.length);
                
                break;
                }
            }

        };


    

    // for prev
    const handleClickPrev=()=>{
       for(let i= 0; i<data.length;i++){
        if(currentSlide===i){
            setCurrrentSlide((currentSlide-1))

       break;
        }
       }


    }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={handleClickRestart} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={handleClickPrev} data-testid="button-prev" className="small">Prev</button>
                <button  onClick={handleClickNext}data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{data[currentSlide].title}</h1>
                <p data-testid="text">{data[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
