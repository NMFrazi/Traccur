import React, { Component } from "react";
import "./welcomepage.css";
import Scoreboard from "../component/Scoreboard";
import Scoreboard2 from "../component/Scoreboard2";

class Gamepage extends Component {
  render = () => {
    return (
      <div className="container">
        <div id="splashWrap">
          <p id="splashTextTitle">HOW TO PLAY TRΛCCVR</p>
          <br />
          <p className="splashText yellow">THE RULES ARE SIMPLE:</p>
          <p className="splashTextRules">
            <span className="yellow">1</span>] FOLLOW THE TARGET WITH YOUR MOUSE
          </p>
          <p className="splashTextRules">
            <span className="yellow">2</span>] THAT'S IT
          </p>
          <br />
          <p className="splashText">SOUND SIMPLE?</p>
          <p className="splashText">TOLD YOU!</p>
          <br />
          <p className="splashText">
            BUT BE CAREFUL... IT GETS <span className="red">HARDER</span>
          </p>
          <br />
          <button type="button">PLΛY</button>
        </div>
        <Scoreboard></Scoreboard>
        <Scoreboard2></Scoreboard2>
      </div>
    );
  };
}

export default Gamepage;
