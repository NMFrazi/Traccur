import React, { Component } from 'react';
import Axios from 'axios';

class Registration extends Component {
     constructor(props) {
          super(props);

          this.state = {
               username: "",
               password: "",
               registrationErrors: ""
          }

          this.onHandleSubmit = this.onHandleSubmit.bind(this);
          this.onHandleChange = this.onHandleChange.bind(this);
     }

     onHandleSubmit = (event) => {
          console.log("form submitted");
          event.preventDefault();
          const { username, password } = this.state
          this.props.handleRegister(username, password)
     }

     onHandleChange = (event) => {
          console.log("handle change", event);
          this.setState({
               [event.target.name]: event.target.value
          })
     }

     render = () => {
          return (
               <div>
                    <h1>registration Component</h1>
                    <form onSubmit={this.onHandleSubmit}>
                         <label htmlFor="username">Username</label>
                         <input
                              type="text"
                              name="username"
                              value={this.state.username}
                              onChange={this.onHandleChange}
                              required
                         />
                         <br />
                         <br />
                         <label htmlFor="username">Password</label>
                         <input
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onHandleChange}
                              required
                         />
                         <br />
                         <br />

                         <div className="btnWrap">
                              <div className="btnClass">
                                   <button id="regBtn" type="submit">REGISTER</button>
                              </div>
                         </div>
                    </form>
               </div>
          );
     }
}

export default Registration;