<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Tasks from './Tasks'

=======
import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
>>>>>>> 7886b03 (Added deployment stuff)
function App() {

  const [task, setTask] = useState("")
  const [todoList, setTodoList]  = useState([])
  const changeTask = (event)=>{
    setTask(event.target.value)
  }
  const addTasks = () => {
    const taskobj ={
      id : todoList.length == 0 ? 1 : todoList[todoList.length-1].id+1,
      taskname: task,
      completed:false
    }
    
    setTodoList(task!="" ? [...todoList, taskobj]: [...todoList])
  }
  const onDelete = (id) =>{
    setTodoList(
      todoList.filter((task)=> task.id!==id)
    )
  }
  const completeTask = (id) => {
    setTodoList(
      todoList.map( (task) =>{
        if (task.id==id){
          return task.completed ? {...task, completed:false} : {...task, completed:true}
        }else{
          return task;
        }
  })
    )
  }
  return (
    <>
   <div className="addTask">
    <input onChange={changeTask}/>
    <button onClick={addTasks}>Add</button>
   </div>
   <div>{task}</div>
   <div className='List'>
   {todoList.map((task) => {
    return(
    <Tasks key={task.id} taskname={task.taskname} id = {task.id} onDelete={onDelete} completed={task.completed} completeTask={completeTask}/>)
}
    )
    }
    </div>
   
    </>
  )
}

export default App
