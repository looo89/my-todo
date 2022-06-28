
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";
import { createStore } from 'redux'
import sidebarReducer from "./sidebarReducer";
import taskReducer from './taskReducer'


export const rootReducer= combineReducers({
    sidebar: sidebarReducer,
    task: taskReducer
})

export const store = createStore(rootReducer, composeWithDevTools())