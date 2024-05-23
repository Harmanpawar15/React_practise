import React, { useState } from 'react';
import './App.css';
import Articles from './components/Articles';


//const title = "Sorting Articles";

const  App=({articles})=> {



const [sorting,setSorting]=useState(articles)


 const handleClickUpvoted = ()=> {
    
   const sortData= [...sorting].sort((a,b)=>b.upvotes-a.upvotes)
    setSorting(sortData)
    }


 const handleClickMostRecent=()=>{
    const sortData= [...sorting].sort((a,b)=> new Date(b.date)- new Date(a.date))
    setSorting(sortData)


 }
    return (
        <div className="App">
            
            
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={handleClickUpvoted} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button  onClick={handleClickMostRecent}data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={sorting} />
        </div>
    );

    }

export default App;
