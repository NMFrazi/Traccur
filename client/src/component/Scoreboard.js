import React, { Component } from "react";
import "./Scoreboard.css";

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Topten: "",
      // loggedIn: false,
    };
  }

  onClickHandler = (event) => {
    console.log(event.target.value);
    this.props.history.push(event.target.value);
  };

  render = () => {
    return (
      <div>
        <h3></h3>
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
