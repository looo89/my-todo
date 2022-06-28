
import React, { useState } from "react";
import Delete from './../../assets/Delete'
import Change from './../../assets/Change'

import cl from "./Sidebar.module.css";
import { useDispatch } from "react-redux";
import { changeListAction, deleteListAction, setSelectedListAction} from "../../store/sidebarReducer";
import { deleteTasksInListAction } from "../../store/taskReducer";

  
const ListItem=({idList, description, isSelect, ...props})=> {
  const dispatch= useDispatch()

  const [isChenged, setIsChenged]= useState(isSelect)
  const [changeNameList, setChangeNameList]= useState('')
  const [showButton, setShowButon]= useState(false)
  
  
  const handler=(e)=>{
    setChangeNameList(e.target.value)
  }


  const deleteList=(idList)=>{
    dispatch(deleteListAction(idList))
    dispatch(deleteTasksInListAction(idList))
  }

  const changeList=(e)=>{ 
    e.preventDefault()
    dispatch(changeListAction({idList, changeNameList}))
    setIsChenged(false)
  }

  const setSelectedList=(idList)=>{
    dispatch(setSelectedListAction(idList))
  }
  
return (
  isChenged
    ?
      <form  onSubmit={(e)=>{changeList(e)}}
      onMouseLeave={()=>setIsChenged(false)}>
        <input 
          className={cl.ListItem}
          name = 'changeNameList'
          value={changeNameList}
          type="text" 
          onChange={e=>handler(e)}
          placeholder={description}  
        />
        
        <button  type='submit'> Изменить </button>
      </form>
    : 
        <div
          onMouseOver={()=>setShowButon(true)}
          onMouseLeave={()=>setShowButon(false)}
          className={cl.ListItem}
        >
          <div>
            {showButton 
                  ? <div>
                      <Delete onClick={()=>deleteList(idList)}/>
                      <Change onClick={()=>setIsChenged(true)}/>
                    </div>
                  : <></>
                }
          </div>
          <div  
            onClick={()=>setSelectedList(idList)}
            >
            {description}
          </div>
          
        </div>
         
     
    );
  }


       

export default ListItem