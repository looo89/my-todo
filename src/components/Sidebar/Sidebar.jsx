
import React, { useState } from "react";
import AddListModal from "./AddListModal";
import AddTaskButton from "./AddTaskButton";
import cl from './Sidebar.module.css'
import SidebarList from "./SidebarList";

function Sidebar() {
  const [isShown, setIsShown] = useState(false);

  const toggleButton = () =>{
    setIsShown(!isShown)
  }
 
  return (
    <div className={cl.Sidebar}>
        <AddTaskButton onClick={toggleButton}/>
        <> { isShown ? <AddListModal setIsShown={setIsShown}/> : <></>} </>
        <SidebarList/>   
    </div>
  );
}

export default Sidebar