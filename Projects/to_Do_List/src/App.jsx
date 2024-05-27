import { useState } from 'react'
import './App.css'

function App() {

  //State for text field 
  const [task,setTask]=useState('')

//State for Submit button
 const[addTask,setaddTask]=useState([])
 
 // Handle form submission to add a new task
 const addTaskBtn=(e)=>{
  e.preventDefault(); // Prevent default form submission

   // Ensure taskInput is not empty or only whitespace
  if (task.trim() !== '') { 
    console.log(task)
  setaddTask([...addTask,task]); // Add the new task
  setTask(''); // Clear the input field
  }
 }

// Handle deleting a task by index
 const delTaskBtn=value=>{
  const updatedTask=addTask.filter(task=>task!==value)
  setaddTask(updatedTask);

 }


  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form  onSubmit={addTaskBtn}>
        <input type="text" 
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        placeholder="Add a new task..."
         />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {/* Render items , added in to-do List in empty array */}
      {addTask.map((task,index) =>(
        <li className="task-item">
          <input type="checkbox" id="task1" />
          <label htmlFor="task1">{task}</label>
          
          <button onClick={()=>delTaskBtn(task)}>Delete</button>
        </li>
       
        ))}

       
      </ul>
      <div className="filter-buttons">
        <button>All Tasks</button>
        <button>Completed Tasks</button>
        <button>Incomplete Tasks</button>
      </div>
    </div>
  )
}

export default App
