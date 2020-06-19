import React, { Component } from "react"
import './homepage.css'

class Homepage extends Component {     
     render = () => {
          return (
               <div>
                    <h1 id="title">TR<span id="redTitle">Λ</span>CC<span id="redTitle">V</span>R</h1>

                    <div className="container">
                         <div id="splashWrap">
                              <p id="splashTextTitle">WELCOME</p>
                              <p className="splashText">TRΛCCVR is a browser-based mouse tracking game</p>
                              <br />
                              <p className="splashText yellow">THE RULES ARE SIMPLE:</p>
                              <p className="splashTextRules"><span className="yellow">1</span>] FOLLOW THE TARGET WITH YOUR MOUSE</p>
                              <p className="splashTextRules"><span className="yellow">2</span>] THAT'S IT</p>
                              <br />
                              <p className="splashText">SOUND SIMPLE?</p>
                              <p className="splashText">TOLD YOU!</p>
                              <br />
                              <p className="splashText">BUT BE CAREFUL... IT GETS <span className="red">HARDER</span></p>
                              <br />
                         </div>
                         <div id="animation"></div>
                              <button>LOGIN</button> <button>REGISTER</button>
                    </div>
               </div>
          );
     }
}

export default Homepage;