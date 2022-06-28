
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Change from "../../assets/Change";
import Delete from "../../assets/Delete";
import { changeTaskAction, deleteTaskAction } from "../../store/taskReducer";
import cl from './TaskPage.module.css'

function TaskItem({description, isSelect, id}) {
  const dispatch=useDispatch()
  
  const [isChenged, setIsChenged]= useState(isSelect)
  const [showButton, setShowButon]= useState(false)
  const [changeNameTask, setChangeNameTask]= useState('')
  //const idSelectedList= useSelector(state=> state.sidebar.selectedList)
  
  const changeTask=(e)=>{
    e.preventDefault()
    dispatch(changeTaskAction({id, changeNameTask}))
    setIsChenged(false)
  }
  const handler=(e)=>{
    setChangeNameTask(e.target.value)
  }
  const deleteTask=(id)=>{
    dispatch(deleteTaskAction(id))
  }
  
  return (
    isChenged
    ?
      <form  onSubmit={(e)=>{changeTask(e)}}
        //onMouseLeave={()=>setIsChenged(false)}
      >
        <input 
          //className={cl.ListItem}
          name = 'changeNameList'
          value={changeNameTask}
          type="text" 
          onChange={e=>handler(e)}
          placeholder={description}  
      />
        <button  type='submit'> Изменить </button>
     </form>
    :
      <div className={cl.TaskItem}
        onMouseOver={()=>setShowButon(true)}
        onMouseLeave={()=>setShowButon(false)}
      >
        {showButton 
            ? <div>
                <Change onClick={()=>setIsChenged(true)}/>
                <Delete onClick={()=>deleteTask(id)}/>
              </div>
            : <></>
          }

            {description}

      </div>
  );
}

export default TaskItem