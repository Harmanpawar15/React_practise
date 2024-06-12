import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, settodos]=useState([]) // empty array 

  // method for adding new todo:
  const addTodo=(todo)=>{
  settodos((prevtodo)=>[{id:Date.now(), ...todo},...prevtodo] )

  }

  // method to update todo:
  const updatedTodo=(id, todo)=>{
    settodos((prevtodo)=>prevtodo.map((prevtodo)=>(prevtodo.id===id ? todo : prevtodo)))
    // if id matches , replace the data with new data , otherwise keep it as it is 
    


  }

  // Method to delete todo:
  const deleteTodo=(id)=>{
    settodos((prevtodo)=>prevtodo.filter((todo)=>todo.id!==id))
  }


  // method to toggle , if list is completed or no:
  const toggleComplete=(id)=>{
    settodos((prevtodo)=>prevtodo.map((prevtodo)=>prevtodo.id===id ? {...prevtodo, completed:!prevtodo.completed} : prevtodo ))

  }


// to get  items from  server , when it loaded for first time and displaying them :
useEffect(() => {
     const todos=JSON.parse(localStorage.getItem("todos"))

     if(todos && todos.length>0){
        settodos(todos)
     }
  
}, [])


//to store items which i added :
useEffect(() => {
   // let todos=JSON.parse(localStorage.setItem("todos"))
   // other way to do same above:

   localStorage.setItem("todos", JSON.stringify(todos))

}, [todos])




  return (
    <TodoProvider value={{todos, addTodo,updatedTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                           {/* Todo form  here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                          {/*Loop and Add TodoItem here */}
                       {todos.map((todo) => (
                       <div key={todo.id}
                       className='w-full'>
                        <TodoItem todo={todo}/>
                        </div>
            
                        ) ) }

                    </div>
                    <h5>Created by Harman :)</h5>
                </div>
                
            </div>
            </TodoProvider>
  )
}

export default App
