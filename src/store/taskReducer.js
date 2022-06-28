const ADD_TASK='ADD_TASK'
const CHANGE_TASK='CHANGE_TASK'
const DELETE_TASK='DELETE_TASK'
const DELETE_TASKS_IN_LIST='DELETE_TASKS_IN_LIST'


export const initialState={
   
    tasks: [
        {idList: 1, id: 1, description: 'React', completed: false, isSelect: false},
        {idList: 1, id: 2, description: 'Redux', completed: false, isSelect: false},
        {idList: 2, id: 3, description: 'NodeJS', completed: false, isSelect: false},
        {idList: 3, id: 4, description: 'tag', completed: false, isSelect: false},
        {idList: 4, id: 5, description: 'flex', completed: false, isSelect: false},
    ]
}
export default function taskReducer(state= initialState, action) {
    switch(action.type) {
        case ADD_TASK : {
            return{ ...state,
                    tasks: [...state.tasks, {idList: action.payload.idSelectedList , id: Date.now(), description: action.payload.nameNewTask } ]
                }
            }
        case CHANGE_TASK : {
            return {...state,
                tasks: state.tasks.map(task=> 
                     task.id===action.payload.id
                     ? {idList: task.idList, id: task.id, isSelect: false, description: action.payload.changeNameTask }
                     : task  
                     )
             }
         }
         case DELETE_TASK : {
            return{ ...state,
                tasks: state.tasks.filter(task=> task.id !== action.payload)
            }
        }
        case DELETE_TASKS_IN_LIST:{
            return{...state,
                tasks: state.tasks.filter(task=> task.idList !== action.payload)
            }
        }
        
        default: return state
    }

}

export const addTaskAction=(payload)=>({type: ADD_TASK, payload})
export const changeTaskAction=(payload)=>({type: CHANGE_TASK, payload})
export const deleteTaskAction=(payload)=>({type: DELETE_TASK, payload})
export const deleteTasksInListAction=(payload)=>({type: DELETE_TASKS_IN_LIST, payload})