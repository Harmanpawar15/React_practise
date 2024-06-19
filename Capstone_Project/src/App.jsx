import { useState } from 'react'

import './App.css'

function App() {
  // to get acess of env:
  //console.log(process.env.REACT_APP_APPWRITE_URL) 
    // We use this one , incase we create our app by create React app , in this case we have use VIte:
console.log(import.meta.env.VITE_APPWRITE_URL)

 

  return (
    <div>
      <h1>Blog App with Appwrite</h1>
    </div>
  )
}

export default App
