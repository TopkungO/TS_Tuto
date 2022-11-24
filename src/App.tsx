import React,{useState} from "react"
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import ListScreen from "./screen/ListScreen"
import ForcuScreen from "./screen/FocusScreen"
import { Task } from "./types";


function App() {

  const [task, setTask] = useState<Task[]>([])
  const taskProps = { task, setTask }

  return (
    <div className="App">
        <nav>
        <NavLink  to="/" style={{ margin: "10px",fontWeight:"bold" }}>list</NavLink>
        <NavLink to="/focus" style={{ margin: "10px", fontWeight: "bold" }}>Focus</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<ListScreen {...taskProps}/>} />
        <Route path="/focus" element={<ForcuScreen {...taskProps}/>}></Route>
          

        </Routes>
      
    </div>
    
  )
}

export default App
