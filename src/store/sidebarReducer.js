const ADD_LIST = 'ADD-LIST';
const DELETE_LIST='DELETE_LIST';
const CHANGE_LIST ='CHANGE_LIST';
const SET_SELECTED_LIST ='SET_SELECTED_LIST';

export const initialState={
    lists: [
        {idList: 1, description: 'FrontEnd', isSelect: false},
        {idList: 2, description: 'BackEnd', isSelect: false},
        {idList: 3, description: 'HTML', isSelect: false},
        {idList: 4, description: 'CSS', isSelect: false},
        {idList: 5, description: 'Movies', isSelect: false},
        {idList: 6, description: 'Food', isSelect: false},
        {idList: 9, description: 'Auto', isSelect: false},
        
    ],
    selectedList: 1

}
export default function sidebarReducer(state= initialState, action) {
    switch(action.type) {
        case DELETE_LIST : {
            return{ ...state,
                lists: state.lists.filter(list=> list.idList !== action.payload),
                selectedList: -1
            }
        }

        case CHANGE_LIST : {
           return {...state,
                lists: state.lists.map(list=> 
                    list.idList===action.payload.idList
                    ? {idList: list.idList,  description: action.payload.changeNameList , isSelect: false}
                    : list    
                )
            }
        }
        case SET_SELECTED_LIST : {
            return{...state,
            selectedList: action.payload}
        }
        case ADD_LIST : {
            return{...state, 
                lists: [...state.lists, {idList: Date.now(), description: action.payload, isSelect: false},]
            }
        }
        default: return state
    }
}

export const addListAction=(payload)=>({type: ADD_LIST, payload})
export const deleteListAction=(payload)=>({type: DELETE_LIST, payload})
export const setSelectedListAction=(payload)=>({type: SET_SELECTED_LIST, payload})
export const changeListAction=(payload)=>({type: CHANGE_LIST, payload})






