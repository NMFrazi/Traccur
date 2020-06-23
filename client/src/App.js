import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/loginpage';
import Register from './pages/register';

class App extends Component {
     render = () => {
          return (
               <Router>
                    <Switch>
                         <Route exact path="/" component={Homepage} />
                         <Route exact path="/homepage" component={Homepage} />
                         <Route exact path="/login" component={Login} />
                         <Route exact path="/register" component={Register} />
                    </Switch>
               </Router>
          );
     }
}

export default App;
