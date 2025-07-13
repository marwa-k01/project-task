import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-app'
import Login from './Login';
import Index from './Index';

const App = () => {
  return (
      <Router>
         <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/index" component={Index}/>
         </Switch>
      </Router>
  )
}

export default App
