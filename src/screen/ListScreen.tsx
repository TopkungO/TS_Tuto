import React from 'react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import { Task, TaskProps } from '../types';

type Props = TaskProps & {};



const ListScreen: React.FC<Props> = ({ addTask, task, setTask, updateTaskComplete }) => {

  const [newTask, setNewTask] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }
  const handlePress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTask !== "") {
      addTask( { label: newTask } )
      setNewTask("")
    }
  }
  const handleCompleteChange = (handletask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
    updateTaskComplete(handletask.id,e.target.checked)
    
    setTask((tasks) =>
      tasks.map(task => {
        if (task.id === handletask.id)
          return { ...task, isComplete: e.target.checked };
        return task;

      })
    )
  }
  
  const handleClearClick = () => {
    setTask(tasks => tasks.filter(task => !task.isComplete))
  }
  const handleTaskDelete = (handleTasks: Task) => ()=>{
    setTask(tasks=> tasks.filter((task)=>task.id !== handleTasks.id))
  }


  return (
    <div>
      <input type="text" value={newTask} onChange={handleChange} onKeyPress={handlePress} />
      <div>
        {
          task.map((item) =>
            <div key={item.id}>
              <input type="checkbox" checked={item.isComplete} onChange={handleCompleteChange(item)} />
              {item.label}
              <button onClick={handleTaskDelete(item)}>Delete</button>
            </div>)
        }
      </div>
      <div>
        <button onClick={handleClearClick}>Clear complete</button>
      </div>
    </div>
  )
}

export default ListScreen