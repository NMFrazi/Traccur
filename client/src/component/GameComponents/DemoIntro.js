import React, { Component } from "react";

class DemoIntro extends Component {

    constructor (props) {
        super(props);

        this.state = {
          running: false
        }
    }

    render = () => {
        return (
          <div>
            <div id="splashWrap">
                <p id="splashTextTitle">WELCOME</p>
                <p className="splashTextTop">Here is a quick introduction to <span className="redOutline">TRΛCCVR</span></p>
                <br/>
                <p className="splashText yellow">THE RULES ARE SIMPLE:</p>
                <p className="splashTextRules"><span className="yellow">1</span>] FOLLOW THE TARGET WITH YOUR MOUSE</p>
                <p className="splashTextRules"><span className="yellow">2</span>] THAT'S IT</p>
                <br/>
                <p className="splashText">SOUND SIMPLE?</p>
                <p className="splashText">TOLD YOU!</p>
                <br/>
                <p className="splashText">BUT BE CAREFUL... IT GETS <span className="red">HARDER</span></p>
                <br/>
            </div>
          </div>
        );
    }

}

export default DemoIntro;