import React, { Component } from "react";
import API from "../utils/API";
import "./LoginReg.css";
// import { Redirect } from "react-router-dom";
import Modal from "./Modal.js";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      // loggedIn: false,
      show: false,
    };

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

     onHandleSubmit = (event) => {
          console.log("form being submitted for login");
          event.preventDefault();
          if (this.state.username && this.state.password) {
               API.getPlayer({
                    username: this.state.username,
                    password: this.state.password
               })
               .then(res => {
                    console.log("returned from db call for login");
                    console.log(res.data.success);
                    if (res.data.success !== false){
                         console.log("user logged in");
                         // this.setState({loggedIn: true});
                         this.props.history.replace("/play");
                    } else {
                         console.log("user NOT logged in");
                         this.showModal();
                    }
               });
          }
     }

  onHandleChange = (event) => {
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

     render = () => {
               return (
                    <div className="container">
                         <Modal show={this.state.show} handleClose={this.hideModal}>
                              <p>The username or password entered is incorrect.</p>
                              <p>Please try again.</p>
                         </Modal>
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
                                   <label htmlFor="username" className="red">Username </label>
                                   <input
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onHandleChange}
                                        required
                                   />
                                   <br />
                                   <br />
                                   <label htmlFor="username" className="red">Password </label>
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
               )
     }

}

export default withRouter(Login);
