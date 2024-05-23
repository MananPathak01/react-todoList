import React from 'react'


const Tasks = (props) => {
    
  return (
    <>
    <h2>{props.id} {props.completed ? <p>Done</p> : <p>Not Done</p>} {props.taskname} </h2>
    <button onClick={()=>props.onDelete(props.id)}>X</button>
    {props.completed ? <button onClick={()=>props.completeTask(props.id)}>Undo</button> : 
    <button onClick={()=>props.completeTask(props.id)}>Complete</button>}
    </>
  )
}

export default Tasks