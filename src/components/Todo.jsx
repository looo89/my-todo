
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import TaskPage from "./TaskPage/TaskPage";
import cl from './Todo.module.css'

function Todo() {
  return (
    <div className={cl.Todo}>
        <Sidebar />
        <TaskPage /> 

      
    </div>
  );
}

export default Todo