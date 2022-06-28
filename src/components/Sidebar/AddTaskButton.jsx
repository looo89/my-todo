
import React from "react";
import Menu from "../../assets/Menu";
import cl from './Sidebar.module.css';


function AddTaskButton(props) {
  return (
    <button {...props} className={cl.Button} >
        <Menu/>Добавить список
    </button>
  );
}

export default AddTaskButton