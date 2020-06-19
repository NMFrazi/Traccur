import React, { Component } from 'react';
import API from "../utils/API";
import './LoginReg.css';

class Login extends Component {
     constructor(props) {
          super(props);

          this.state = {
               username: "",
               password: "",
               loggedIn: false
          }

          this.onHandleSubmit = this.onHandleSubmit.bind(this);
          this.onHandleChange = this.onHandleChange.bind(this);
     }

     onHandleSubmit = (event) => {
          console.log("form being submitted for login");
          event.preventDefault();
          if (this.state.username && this.state.password) {
               API.getPlayer({
                    username: this.state.username,
                    password: this.state.password
               })
                    .then(res => {
                         console.log("user logged in");
                         console.log(res.data);
                    })
                    .catch(err => console.log(err));
          }
     }

     onHandleChange = (event) => {
          console.log("handle change", event);
          this.setState({
               [event.target.name]: event.target.value
          })
     }

     render = () => {
          return (
               <div className="container">
                    <div className="splashWrap">
                         <p className="splashTextTitle">
                              Login
                         </p>
                         <p className="splashText">
                              Please enter your username
                         </p>
                         <p className="splashText">
                              and password to login.
                         </p>
                         <br />
                         <form onSubmit={this.onHandleSubmit}>
                              <label htmlFor="username">Username </label>
                              <input
                                   type="text"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.onHandleChange}
                                   required
                              />
                              <br />
                              <br />
                              <label htmlFor="username">Password </label>
                              <input
                                   type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onHandleChange}
                                   required
                              />
                              <br />
                              <br />

                              <button id="regBtn" type="submit">Login</button>
                         </form>
                    </div>
               </div>
          );
     }
}

export default Login;