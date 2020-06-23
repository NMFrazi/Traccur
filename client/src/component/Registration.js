import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";
import './LoginReg.css';


class Registration extends Component {
     constructor(props) {
          super(props);
          console.log('props in registration', props);

          this.state = {
               username: "",
               password: ""
          }

          this.onHandleSubmit = this.onHandleSubmit.bind(this);
          this.onHandleChange = this.onHandleChange.bind(this);
     }

     onHandleSubmit = (event) => {
          console.log("form being submitted");
          event.preventDefault();
          if (this.state.username && this.state.password) {
               console.log("Username and password are present")
               API.registerPlayer({
                    username: this.state.username,
                    password: this.state.password
               })
                    .then(res => {
                         console.log("user registered");
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
          if (!this.state.username) {
               return (<Redirect push to="login" />)
          }
          return (
               <div className="container">
                    <div className="splashWrap">
                         <p className="splashTextTitle">
                              Registration
                         </p>
                         <p className="splashText">
                              Please fill out the form
                         </p>
                         <p className="splashText">
                              below to register.
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

                              <button id="regBtn" type="submit">REGISTER</button>
                         </form>
                    </div>
               </div>
          );
     }
}

export default Registration;