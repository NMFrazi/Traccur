import React, { Component } from "react";
import "./scoreboard.css";
import API from "../utils/API";

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  handleOnClick(){
    API.logout().then(res => {
        console.log(res.data.isLoggedIn);
    });
  }

  render = () => {
    return (
      <div>
        <div className="containerLeft">
          <div id="splashWrap">
            <br/>
            <p className="splashText red">Username</p>
            <p className="splashText">{this.props.username}</p>
            <br />
            <br />
            <br />
            <p className="splashText red">Top Score</p>
            <p className="splashText">{this.props.top}</p>
            <br />
            <br />
            <br />
            <p className="splashText red">Last Game</p>
            <p className="splashText">{this.props.last}</p>
            <br />
            <br />
            <br />
            <p className="splashText red">Games Played</p>
            <p className="splashText">{this.props.total}</p>
          </div>
        </div>
      </div>
    );
  };
}

export default Scoreboard;
