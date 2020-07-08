import React, { Component } from 'react';
import Axios from 'axios';

class Homepage extends Component {
     constructor (props) {
          super(props);

          this.state = {
          }

          this.onHandleChange = this.onHandleChange.bind(this);
     }
     
     onHandleChange = (event) => {
          console.log("handle change", event);
          this.setState ({
               [event.target.name]: event.target.value
          })
     }

     render = () => {
          return (
            <div>
                <div className="container">
                        <div id="splashWrap">
                            <p id="splashTextTitle">WELCOME</p>
                            <p className="splashText">TRΛCCVR is a browser-based tracking game</p>
                            <br/>
                            <p className="splashText">that tests your reaction time</p>
                            <br/>
                            <p className="splashText">and hand-eye coordination.</p>
                            <br/>
                            <br/>
                            <br/>
                            <p className="splashText">PLEASE <span className="red">REGISTER</span> OR <span className="red">LOGIN</span> TO PLAY</p>
                            <br/>
                        </div>
                        <div id="animation"></div>
                        <div id="btnWrapper"><a href="/login"><button>LOGIN</button></a> <a href="/register"><button>REGISTER</button></a></div>
                </div>
            </div>
          );
     }
}

export default Homepage;