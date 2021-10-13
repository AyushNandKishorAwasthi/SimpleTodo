import {
    ADD_TODO_REQUEST,
    ADD_TODO_FAIL,
    ADD_TODO_SUCCESS,
    REMOVE_TODO_FAIL,
    REMOVE_TODO_REQUEST,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_RESET,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    CLEAR_ERROR,
} from '../constants/todoConstants'


export const addTodoUserReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_USER_REQUEST:
            return{
                loading:true
            }
        case ADD_USER_SUCCESS:
            return{
                loading:false,
                user:action.payload.user,
                id:action.payload._id,
                item:action.payload.item,
            }
        case ADD_USER_FAIL:
            return{
                error:action.payload
            }
        case CLEAR_ERROR:
            return{
                error:null
            }
        default:
            return state;
    }
}


export const addTodoReducer = (state={},action) => {
        switch (action.type) {
            case ADD_TODO_REQUEST:
                return{
                    loading:true
                }
            case ADD_TODO_SUCCESS:
                return{
                    loading:false,
                    todo:action.payload
                }
            case ADD_TODO_FAIL:
                return{
                    error:action.payload
                }
            case CLEAR_ERROR:
                return{
                    error:null
                }
            default:
                return state;
        }
}

export const removeTodoReducer =(state={},action)=>{
        switch (action.type) {
            case REMOVE_TODO_REQUEST:
                return{
                    removing:true
                }
            case REMOVE_TODO_SUCCESS:
                return{
                    removing:false,
                    updatedTodo:action.payload
                }
            case REMOVE_TODO_FAIL:
                return{
                    removeError:action.payload
                }
            case REMOVE_TODO_RESET:
                return{
                    removeReset:true
                }
            case CLEAR_ERROR:
                return{
                    error:null
                }

            default:
                return state;
        }
}