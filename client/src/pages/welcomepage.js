import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './welcomepage.css'

class Welcomepage extends Component {
     constructor(props) {
          super(props);

          this.state = {
               choosenRoute: ""
          }

          this.btnClickHandler = this.btnClickHandler.bind(this);
          this.renderRedirect = this.renderRedirect.bind(this);
     }

     btnClickHandler = (event) => {
          console.log(event.target.value);
          this.setState({choosenRoute: event.target.value});
     }

     renderRedirect = () => {
          console.log("This is the page to redirect to " + this.state.choosenRoute);
          if (this.state.choosenRoute) {
               return (<Redirect to={this.state.choosenRoute} />);
          }
     }

     render = () => {
          return (
               <div>
                    {this.renderRedirect()}
                    <h1 id="title">TR<span id="redTitle">Λ</span>CC<span id="redTitle">V</span>R</h1>
                         <div className="container">
                         <div id="splashWrap">
                              <p id="splashTextTitle">WELCOME</p>
                              <p className="splashText red">TRΛCCVR IS A BROWSER BASED</p>
                              <p className="splashText red">MOUSE TRACKING GAME</p>
                              <br />
                              <br />
                              <p className="splashText" >If this is your first time playing, please</p>
                              <p className="splashText">click on the register by clicking the</p>
                              <p className="splashText">register button below.</p>
                              <button type="button" value="/register" onClick={this.btnClickHandler}>REGISTER</button>
                              <br />
                              <br />
                              <p className="splashText">If you have already registered, please</p> 
                              <p className="splashText">click the login button below to</p>
                              <p className="splashText">login and start the game.</p>
                              <button type="button" value="/login" onClick={this.btnClickHandler}>LOGIN</button> 
                         </div>
                    </div>
               </div>
          );
     }
}

export default Welcomepage;