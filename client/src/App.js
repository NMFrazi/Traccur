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

     handleRegister = (username, password) => {
          //make axios call to /api/register
          const payload = { username: username, password: password }


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
                         <Route exact path="/" component={Homepage} />
                         <Route exact path="/homepage" component={Homepage} />
                         <Route exact path="/login" component={Login} />
                         <Route exact path="/register" render={() => (<Register
                              handleRegister={this.handleRegister}
                         />)} />
                         {/* <Route exact path="/register" render={()=>( <Dashboard
                         
                         />)} /> */}
                    </Switch>
               </Router>
          );
     }
}

export default App;
