import React, { Component } from 'react';
import API from "../utils/API";
import './LoginReg.css';
import Modal from './Modal';
import { withRouter } from 'react-router-dom'

class Registration extends Component {
     constructor (props) {
          super(props);

          this.state = {
               username: "",
               password: "",
               show: false
          }

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

     redirect() {
          console.log(this.props)
     }
     
     onHandleSubmit = (event) => {
          console.log("form being submitted");
          event.preventDefault();
          if (this.state.username && this.state.password) {
               console.log("Username and password are present")
               API.registerPlayer({
                    username: this.state.username,
                    password: this.state.password,
                    highestscore: 0,
                    numberofgames: 0,
                    lastgamescore: 0
               })
                    .then(res => {
                         console.log("user registered");
                         console.log(this.props);
                         this.props.history.replace("/login");
                    })
                    .catch(err => {
                         console.log(err);
                         this.showModal();
                    });
          }
     }
     
     onHandleChange = (event) => {
          console.log("handle change", event);
          this.setState ({
               [event.target.name]: event.target.value
          })
     }

     render = () => {
          return (
               <div className="container">
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                         <p>This user name has already been choosen.</p>
                         <p>Please enter a different user name.</p>
                    </Modal>
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
                         <form onSubmit = { this.onHandleSubmit }>
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

                              <button id="regBtn" type="submit">REGISTER</button>
                         </form>
                    </div>
               </div>
          );
     }
}

export default withRouter(Registration);