import React from 'react'
import { TaskProps } from '../types'

type Props = TaskProps & {}

const FocusScreen: React.FC<Props> = ({ focusedTask: task, shuffleFocusedTask, updateTaskComplete }) => {


  const handleMarkCompleted =()=>{
    if(task) updateTaskComplete(task.id,true)
  }


  return task ? (
      <div>
        <div>{task.label}</div>
        <button onClick={handleMarkCompleted}>mark complete</button>
      <button onClick={shuffleFocusedTask}>nope</button>
      </div>
    ) : (
    <div>No in complete task.</div>)
}

export default FocusScreen