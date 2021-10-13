import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoUser } from '../actions/index'
import { useAlert } from 'react-alert';

const User = ({history}) => {
    const [todoUser, setTodoUser] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();
    const { user, error } = useSelector(state=>state.user);
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodoUser(todoUser))
    }
    useEffect(()=>{
        if(error)
        alert.error(error)
        if(user){
            history.push(`/${user}/todo`);
        }
    },[alert,error,user,history])
    
    return (
        <div className="ui segment">
            <form className="ui form" > 
                <div className="ui field">
                    <label>Enter a unique username</label>
                    <input type="text" value={todoUser} onChange={(e)=>setTodoUser(e.target.value)}/>
                </div>
            <button onClick={handleSubmit} className="ui button primary">Submit</button>
            </form>
        </div>
    )
}

export default User
