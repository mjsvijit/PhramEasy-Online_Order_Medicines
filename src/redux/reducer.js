
import {ADD_TODO} from "./action"
import {
    FETCHED_CART_ITEMS,
    ADD_COUNT,SUB_COUNT
   
} from "./action";

const initialState = {
    cart: [],
    userDetails: {
       
        userName: ''
    },
    count:0

};
const initState={
    cart:[{
        id: 1,
        title:"",
        IMG:"",
    }],
    count:0
}


export const reducerTodo = (store=initState, action) => {
   switch(action.type){
    

    case FETCHED_CART_ITEMS:
        return {
            ...store,
            todos: action.payload.filter(task => task.userID === store.userDetails.userName),
        }
        
     case ADD_COUNT:
         return{
             ...store,
             count: store.count+1
         }    
       case SUB_COUNT:
           return{
              ...store,
              count: store.count-1
           }
        
  default:
      return store
}
}