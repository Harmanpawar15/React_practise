import { useState } from 'react'
import UserCard from './component/UserCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"riya" ,
    age:99
  }
   let myarr=[1,2,3]

  return (
    <>
      <h1 className='bg-purple-400 text-white p-4 rounded-xl mb-5'>Tailwind test</h1>
     {/* <UserCard  obj={myobj} arr={myarr} /> */}
     <UserCard userName="Alisha"  btnText="Click Me"/>
     <UserCard userName="Ridhima"  />
     

      
    </>
  )
}

export default App
