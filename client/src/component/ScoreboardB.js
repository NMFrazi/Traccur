import React, { Component } from "react";
import API from "../utils/API";
import "./LoginReg.css";
// import { Redirect } from "react-router-dom";
import Modal from "./Modal.js";
import { withRouter } from "react-router-dom";
import "./scoreboardB.css";

class ComponentB extends React.Component {
  render() {
    return <h1>Hello world! This is Component B</h1>;
  }
}
class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Topten: "",
      // loggedIn: false
    };
  }

  btnClickHandler = (event) => {
    console.log(event.target.value);
    this.props.history.push(event.target.value);
  };

  render = () => {
    return (
      <div>
        <h1></h1>
        <div className="containerA">
          <div id="splashWrap">
            <p id="splashTextTitle"></p>
            <p className="splashText red">Username</p>
            <br />
            <br />
            <p className="splashText red">Top Ten</p>
            <br />
            <br />
            <p className="splashText">Previous Score</p>
            <br />
            <br />
            <p className="splashText">Last Game</p>
            <br />
            <br />
            <p className="splashText"></p>
          </div>
        </div>
      </div>
    );
  };
}

export default ScoreboardB;
