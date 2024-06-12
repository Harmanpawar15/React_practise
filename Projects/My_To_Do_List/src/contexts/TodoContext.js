// Method to create context:

import{ createContext, useContext } from "react" ;


// Step 1: Create a Context using createContext, to share data between components :
 export const TodoContext=createContext({
    // Array of objects i.e our data of todo list 
  todos:[{
    id: 1,
    todo: "todo msg ",
    completed:false, }],
//   }] ,  this is property

  addTodo:(todo)=>{},      // this is method
  updatedTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{}



})



// Step 2: Consume the context value using useContext:useContext is a React Hook that allows you 
//to consume a Context within a functional component.
 export const usetoDo =()=>{
    return useContext(TodoContext)
}


// Step 3: Create a Provider component
 export const TodoProvider=TodoContext.Provider



