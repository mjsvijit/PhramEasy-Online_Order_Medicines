import {createStore} from "redux"
// import {reducer} from './counter/reducer'
// import {reducerTodo} from './todo/reducer'
import { reducerTodo } from "./reducer";





export const store = createStore(reducerTodo); 