import {
    ADD_TODO_REQUEST,
    ADD_TODO_FAIL,
    ADD_TODO_SUCCESS,
    REMOVE_TODO_FAIL,
    REMOVE_TODO_REQUEST,
    REMOVE_TODO_SUCCESS,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
} from '../constants/todoConstants'
import axios from 'axios'


export const addTodoUser = (user) => async dispatch=>{
    try {
        dispatch({
            type:ADD_USER_REQUEST
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const { data } = await axios.post('/api/v1/todo/createTodo/user',{user}, config)
        dispatch({
            type:ADD_USER_SUCCESS,
            payload:data.user,
        })
    } catch (err) {
        dispatch({
            type:ADD_USER_FAIL,
            payload:err.response.data.message
        })
    }
        
}

export const addTodoAction =(input,user) => async dispatch => {
try {
    dispatch({
        type:ADD_TODO_REQUEST
    })
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const { data } = await axios.post(`/api/v1/todo/createTodo/${user}/todo`,{input}, config);
    dispatch({
        type:ADD_TODO_SUCCESS,
        payload:data.item
    })
} catch (err) {
    dispatch({
        type:ADD_TODO_FAIL,
        payload:err.response.data.message
    })
}
    
}

export const removeTodoAction = (user,todoId) => async dispatch => {
    try {
        dispatch({
            type:REMOVE_TODO_REQUEST
        })
        const { data } = await axios.delete(`/api/v1/todo/deleteTodo/${user}/${todoId}`)
        dispatch({
            type:REMOVE_TODO_SUCCESS,
            payload:data.item
        })
    } catch (err) {
        dispatch({
            type:REMOVE_TODO_FAIL,
            payload:err.response.data.message
        })
    }
}

