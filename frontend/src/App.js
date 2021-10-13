import {BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Todo from './component/Todo'
import User from './component/User'
function App() {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={User} />
        <Route exact path="/:user/todo" component={Todo}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
