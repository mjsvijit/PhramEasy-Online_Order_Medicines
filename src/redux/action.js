export const GET_CART_ITEMS = "GET_CART_ITEMS";
export const FETCHED_CART_ITEMS = "FETCHED_CART_ITEMS"

export const fetchedTodos = (todos) => ({
    type: FETCHED_CART_ITEMS,
    payload: todos
});


export const ADD_COUNT = "ADD_COUNT" 
export const SUB_COUNT = "SUB_COUNT"

export const addCount= () => ({
    type: ADD_COUNT
   
});
 
export const subCount =()=>({
    type: SUB_COUNT
})
    export const getTodoItems = () => {
        return (dispatch) => {
            //Makes some api call code goes below
            fetch("http://localhost:3000/cart")
            .then((response) => response.json())
            .then((data) => dispatch(fetchedTodos(data)));
            //after api call we dispatch data
        };
    }