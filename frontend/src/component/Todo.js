import React, {useState, useEffect, Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, removeTodoAction, addTodoUser } from '../actions'; 
import { useAlert } from 'react-alert';
import { CLEAR_ERROR } from '../constants/todoConstants';

const Todo = ({match}) => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert()
    const {todo, error } = useSelector(state=>state.addTodo)
    const {user, item, id} = useSelector(state=>state.user);
    const [ showTodo, setShowTodo ] = useState(item);
    const { updatedTodo, removeError } = useSelector(state=>state.removeTodo)
    const todoUser = match.params.user;
    useEffect(()=>{
        window.onpopstate=()=>{
            window.location.replace('/');
        }
        if(!user)
        dispatch(addTodoUser(todoUser))
        if(updatedTodo||todo||item){
            if(updatedTodo||todo)
            alert.success('Todo list updated');
            setShowTodo(updatedTodo||todo||item);
        }
        if(error){
            alert.error(error)
            dispatch({type:CLEAR_ERROR})
        }
        if(removeError){
            alert.error(error)
            dispatch({type:CLEAR_ERROR})
        }
    },[error,removeError, alert, dispatch, updatedTodo, item, user, todo, todoUser])

    const handleTodo=(e)=>{
        e.preventDefault();
        dispatch(addTodoAction(input,id))
        setInput('')
    }
    const removeTodo=(e,_id)=>{
        e.preventDefault();
        dispatch(removeTodoAction(id,_id))
    }
    
    const showList=()=>(
                showTodo && showTodo.map(item=>(
                <Fragment key={item._id} >
                <div className="ui bulleted list" key={item._id}>
                    <div className='item'>{item.data.trim()}
                        <button className="ui button negative" type="submit" 
                           onClick={(e)=>removeTodo(e,item._id)} >Remove todo</button>
                    </div>
                </div>
                </Fragment>
            ))
    )

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={handleTodo}>
                <div className="field">
                    <label htmlFor='Todo'>Enter a todo item</label>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
                </div>
                
                <button className="ui button primary" type="submit">
                    Set todo</button>
                
            </form>
            <div className='ui container'>
                {showList()}
            </div>
        </div>

    )
}

export default Todo
