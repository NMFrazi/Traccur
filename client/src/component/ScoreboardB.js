import React, { Component } from "react";
import "./LoginReg.css";
import "./scoreboard.css";

class ScoreboardB extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render = () => {
    return (
      <div>
        <div className="containerA">
          <div id="splashWrap">
            <p className="splashText red">Username</p>
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
