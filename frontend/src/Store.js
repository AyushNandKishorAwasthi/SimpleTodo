import { addTodoUserReducer,addTodoReducer, removeTodoReducer } from './reducers/index.js'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    user:addTodoUserReducer,
    addTodo:addTodoReducer,
    removeTodo:removeTodoReducer,
})
const middleware = [thunk];
const store= createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))
export default store;