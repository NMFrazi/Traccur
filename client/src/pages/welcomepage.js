import React, { Component } from "react";
import "./welcomepage.css";
import { withRouter } from "react-router-dom";

class Welcomepage extends Component {
  constructor(props) {
    super(props);
    this.btnClickHandler = this.btnClickHandler.bind(this);
  }

  btnClickHandler = (event) => {
    console.log(event.target.value);
    this.props.history.push(event.target.value);
  };

  render = () => {
    return (
      <div>
        <div className="container">
          <div id="splashWrap">
            <p id="splashTextTitle">WELCOME</p>
            <p className="splashText red">TRΛCCVR IS A BROWSER BASED</p>
            <p className="splashText red">MOUSE TRACKING GAME</p>
            <br />
            <br />
            <p className="splashText">
              If this is your first time playing, please
            </p>
            <p className="splashText">click on the register button below.</p>
            <button
              type="button"
              value="/register"
              onClick={this.btnClickHandler}
            >
              REGISTER
            </button>
            <br />
            <br />
            <p className="splashText">If you have already registered, please</p>
            <p className="splashText">click the login button below to</p>
            <p className="splashText">login and start the game.</p>
            <button type="button" value="/login" onClick={this.btnClickHandler}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default withRouter(Welcomepage);
