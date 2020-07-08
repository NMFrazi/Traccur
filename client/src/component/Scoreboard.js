import React, { Component } from "react";
// import API from "../utils/API";
import "./LoginReg.css";
// import { withRouter } from "react-router-dom";
import "./scoreboard.css";

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topscore: "",
      previousscore: "",
      lastgame: "",
      // loggedIn: false,
    };

    this.state = {
      Topten: "",
      // loggedIn: false,
    };
  }

  render = () => {
    return (
      <div>
        <div className="containerone">
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

  render = () => {
    return (
      <div>
        <div className="containertwo">
          <div id="splashWrap">
            <p id="splashTextTitle"></p>
            <p className="splashText red">Top Ten</p>
            <br />
          </div>
        </div>
      </div>
    );
  };
}

export default Scoreboard;
