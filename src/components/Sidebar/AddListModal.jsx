import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addListAction } from "../../store/sidebarReducer";
import cl from "./Sidebar.module.css";

const AddListModal=({setIsShown})=> {
  const dispatch=useDispatch()
  const [nameNewList, setNameNewList]= useState('')

  
  const addList=(e)=>{
    e.preventDefault()
    dispatch(addListAction(nameNewList))
    setIsShown(false)
  }
  const handler=(e)=>{
    setNameNewList(e.target.value)
  }
  
  
  return (
    <form onSubmit={(e)=>{addList(e)}}>
       <input 
        name = 'nameNewList'
        value={nameNewList}
        type="text" 
        onChange={e=>handler(e)}
        placeholder=""
        className={cl.AddListModal} />
      <button  type='submit'> Добавить </button>
      
      <button onClick={()=>setIsShown(false)}> Отменить</button>
    </form>   
  );
}

export default AddListModal