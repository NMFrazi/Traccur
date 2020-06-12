import React from 'react';
import './App.css';

function App() {
     return (
          <div>
               <h1 id="title">TR<span id="redTitle">Λ</span>CC<span id="redTitle">V</span>R</h1>

               <div id="container">
                    <div id="splashWrap">
                         <p id="splashTextTitle">WELCOME</p>
                         <p class="splashText">TRΛCCVR is a browser-based mouse tracking game</p>
                         <br />
                         <p class="splashText yellow">THE RULES ARE SIMPLE:</p>
                         <p class="splashTextRules"><span class="yellow">1</span>] FOLLOW THE TARGET WITH YOUR MOUSE</p>
                         <p class="splashTextRules"><span class="yellow">2</span>] THAT'S IT</p>
                         <br />
                         <p class="splashText">SOUND SIMPLE?</p>
                         <p class="splashText">TOLD YOU!</p>
                         <br />
                         <p class="splashText">BUT BE CAREFUL... IT GETS <span class="red">HARDER</span></p>
                         <br />
                    </div>
                         <div id="animation"></div>
                         <div id="startBtnWrap">
                              <div id="startBtn" onclick="game(0)">
                                   <p id="startTxt">PLΛY</p>
                              </div>
                         </div>
               </div>
          </div>
     );
}

export default App;
