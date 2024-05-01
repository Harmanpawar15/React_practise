import { useState } from "react"


function App() {
  const[clrchanger,setclrchanger]=useState("black")

  const handleClick =(color)=>{
    setclrchanger(color)
    alert("Click OK to change color to "+ color);

  }

  return (
    <div className="w-full h-screen duration-100"
    style={{backgroundColor:clrchanger}}
  >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button 
       // onClick={setclrchanger("red")} : if we do like that it will not return anything we are just passing function not returning anything , correct way is:
       onClick={()=>handleClick("purple")}  
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}
        >Purple</button>

        <button
        onClick={()=>handleClick("green")}  
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
        >Green</button>

        <button
        onClick={()=>handleClick("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        >Blue</button>

        <button
        onClick={()=>handleClick("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}
        >Orange</button>

       <button
       onClick={()=>handleClick("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "pink"}}
        >Pink</button>





      </div>
    </div>
  </div>

  )
}

export default App