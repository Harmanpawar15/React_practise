import { useState } from 'react'
import './App.css'

function App() {

  //State for text field 
  const [task,setTask]=useState('')

//State for Submit button
 const[addTask,setaddTask]=useState([])

 //State for Filter buttons Below
 const[filter,setFilter]=useState('all')


 
 // Handle form submission to add a new task
 const addTaskBtn=(e)=>{
  e.preventDefault(); // Prevent default form submission

   // Ensure taskInput is not empty or only whitespace
  if (task.trim() !== '') { 
  setaddTask([...addTask,{ text: task, completed: false }]); // Add the new task
  setTask(''); // Clear the input field
  }
 }

// Handle deleting a task by value
 const delTaskBtn=value=>{
  const updatedTask=addTask.filter(task=>task.text!==value)
  setaddTask(updatedTask);

 }

 // Handle Toggle :
 const handleToggle=(value)=>{
  //const newarr=addTask.filter(task=>task===value)
  const selectedTask=addTask.map(task=> {
    if(task.text===value){
      return{...task,completed:!task.completed}
    }
return task
  })
  setaddTask(selectedTask)

 }
// Handle All, Complete,Incomplete Filters:
const handleFilter=(value)=>{
  //console.log("Filter selected:", value);
  setFilter(value)
}

const filterData=addTask.filter(task=>{
  if(filter==='completed') return task.completed ;
  if(filter==='incomplete') return !task.completed;
  return true
})
//console.log("Filtered Data:", filterData);

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
      {filterData.map((task,index) =>(
        <li key={index} className="task-item">
          <input type="checkbox"   checked={task.completed} onChange={()=>handleToggle(task.text)}  id="task1"  />
          <label htmlFor="task1">{task.text}</label>
          <button onClick={()=>delTaskBtn(task.text)}>Delete</button>
        </li>
       
        ))}

       
      </ul>
      <div className="filter-buttons">
        <button onClick={()=>handleFilter('all')}>All Tasks</button>
        <button onClick={()=>handleFilter('completed')}>Completed Tasks</button>
        <button onClick={()=>handleFilter('incomplete')}>Incomplete Tasks</button>
      </div>
    </div>
  )
}

export default App
