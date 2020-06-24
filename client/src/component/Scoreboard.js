import React, { Component } from "react";
import API from "../utils/API";
import "./LoginReg.css";
// import { Redirect } from "react-router-dom";
import Modal from "./Modal.js";
import { withRouter } from "react-router-dom";
import "./scoreboard.css";

class Scoreboard extends Component {
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
        <h1></h1>
        <div className="containerone">
          <div id="splashWrap">
            <p id="splashTextTitle"></p>
            <p className="splashText red">Username</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="splashText red">Top Ten</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="splashText">Previous Score</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="splashText">Last Game</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="splashText"></p>
          </div>
        </div>
      </div>
    );
  };
}

export default Scoreboard;
