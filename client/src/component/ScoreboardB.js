import React, { Component } from "react";
// import API from "../utils/API";
import "./LoginReg.css";
// import { withRouter } from "react-router-dom";
import "./scoreboard.css";

class ScoreboardB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Topten: "",
      // loggedIn: false
    };
  }

  render = () => {
    return (
      <div>
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
