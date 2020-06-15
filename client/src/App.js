import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';

class App extends Component {
     constructor(props) {
          super(props);
          this.handleLoginClick = this.handleLoginClick.bind(this);
          this.handleLogoutClick = this.handleLogoutClick.bind(this);
          this.state = { isLoggedIn: false };
     }

     handleLoginClick() {
          this.setState({ isLoggedIn: true });
     }

     handleLogoutClick() {
          this.setState({ isLoggedIn: false });
     }

     render = () => {
          return (
               <Router>
                    <Switch> 
                         <Route exact path="/" component = { Homepage } />
                         <Route exact path="/homepage" component = { Homepage } />
                         <Route exact path="/login" component = { Login } />
                         <Route exact path="/register" component={ Register } />
                    </Switch>
               </Router>
          );
     }
}

export default App;
