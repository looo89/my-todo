import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction} from "../../store/taskReducer";
import TaskItem from "./TaskItem";
import cl from './TaskPage.module.css'

function TaskPage() {
  const dispatch=useDispatch()
 
  const tasks= useSelector(state=>state.task.tasks)
  const idSelectedList= useSelector(state=> state.sidebar.selectedList)

  const selectedTasks= tasks.filter(task=> task.idList === idSelectedList)
  
  const lists= useSelector(state=>state.sidebar.lists)
  const myList= lists.filter(list=> list.idList===idSelectedList)
  const listDescription= myList.map(list=>list.description)

  const [nameNewTask, setNameNewTask]= useState('')

              
  const handler=(e)=>{
    setNameNewTask(e.target.value)
  }
  const addTask=(e)=>{
    e.preventDefault()
    dispatch(addTaskAction({idSelectedList, nameNewTask}))
    setNameNewTask('')
  }
  
  
  return (
    
      
        <div className={cl.TaskPage} >
          <h2>{listDescription}</h2>

          { selectedTasks.length !== 0 
            ? 
              selectedTasks.map((t, index)=>
                <TaskItem key={index} description={t.description} 
                  isSelect={t.isSelect}
                  id={t.id}/>
                )
    
            :  
              <div>no tasks</div>
          }
          { idSelectedList ===-1
            ? <></>
            :  
                <form onSubmit={(e)=>{addTask(e)}}>
                <input type="text" 
                  placeholder="добавить задачу" 
                  name = 'nameNewTask'
                  value={nameNewTask}
                  onChange={e=>handler(e)}

                />
                <button type='submit'> Добавить</button>
              </form>
  
 
          }
         </div>
  );
}

export default TaskPage