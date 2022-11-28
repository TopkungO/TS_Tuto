import React, { useState } from "react"
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import ListScreen from "./screen/ListScreen"
import ForcuScreen from "./screen/FocusScreen"
import { Task } from "./types";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";


function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(undefined)

  const addTask = (task: Pick<Task, "label">) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) setFocusedTaskId(id);
  }

  const updateTaskComplete = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map(task => {
        if (task.id === taskId)
          return { ...task, isComplete };
        return task;

      })
    )
  }

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  
  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  }
  console.log(focusedTaskId);
  console.log(tasks);
  
  

  const taskApi = { addTask, focusedTask, task: tasks, setTask: setTasks, shuffleFocusedTask, updateTaskComplete }

  return (
    <div className="App">
      <nav>
        <NavLink to="/" style={{ margin: "10px", fontWeight: "bold" }}>list</NavLink>
        <NavLink to="/focus" style={{ margin: "10px", fontWeight: "bold" }}>Focus</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ListScreen {...taskApi} />} />
        <Route path="/focus" element={<ForcuScreen {...taskApi} />}></Route>


      </Routes>

    </div>

  )
}

export default App
