import React, { Component } from "react";
import "./Scoreboard2.css";

class Scoreboard2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      TopTen: "",
      PreviousScore: "",
      LastGame: "",
    };
  }

  onClickHandler = (event) => {
    console.log(event.target.value);
    this.props.history.push(event.target.value);
  };

  render = () => {
    return (
      <div>
        <h2></h2>
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
}

export default Scoreboard2;
