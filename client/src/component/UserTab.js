import React, { Component } from 'react';
import Axios from 'axios';

class UserTab extends Component {
     constructor (props) {
          super(props);

          this.state = {
               username: "EXAMPLE USER",
               topScore: 100,
               lastScore: 50,
               gamesPlayed: 0
          }

     }

     render = () => {
          return (
            <div className="userContainer">
               <div id="userTab">
                    <h1>{this.state.username}</h1>
                    <div id="userStats">
                        <p>TOP SCORE: {this.state.topScore}</p>
                        <p>LAST SCORE: {this.state.lastScore}</p>
                        <p>GAMES PLAYED: {this.state.gamesPlayed}</p>
                    </div>
               </div>
            </div>
          );
     }
}

export default UserTab;