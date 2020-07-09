import React, { Component } from "react";
import DemoIntro from "./DemoIntro";
import Scoreboard from "../Scoreboard";
// import ScoreboardB from "../ScoreboardB";

import API from "../../utils/API";

import "./Game.css";
import { withRouter } from "react-router-dom";

class Game extends Component {

    constructor (props) {
        super(props);

        this.state = {
            username: "",
            userTopScore: "",
            lastGameScore: "",
            gamesPlayed: "",
            //Game variables
            gameRunning: false,
            gameNumber: 0,
            gameOver: false,
            //Score variables
            scoreVal: 0,
            multiplier: 1,
            stepUp: 0,
            stepDown: 0,
            //Countdown variables
            countdown: false,
            countdownTrigger: false,
            countdownVal: 3,
            //Demo variables
            demoIntro: true,
            demoMode: false,
            demoRunning: false,
            demoEnd: false,
            introTopTxt: '',
            introBottomTxtFirst: '',
            introBottomTxtHighlight: '',
            introBottomTxtEnd: '',
            demoStep: 0,
            //Target
            hovered: false,
            moveFreq: 0,
            defaultHorizontal: 360,
            defaultVertical: 360,
            horizontalPos: 360,
            verticalPos: 360,
            minHorizontalDemo: 305,
            minVerticalDemo: 305,
            maxHorizontalDemo: 415,
            maxVerticalDemo: 415,
            minHorizontalPos: 0,
            minVerticalPos: 0,
            maxHorizontalPos: 700,
            maxVerticalPos: 700,
            horizontalTarget: 360,
            verticalTarget: 360,
            moveTimer: 0
        }
    }
    
    onStartClick = () => {
        if(this.state.gameNumber < 1){ 
            this.setState({demoIntro: false});
            this.setState({demoMode: true});
        }
        else if(this.state.gameOver){
            this.setState({countdownTrigger: true});
            this.setState({countdown: true});
            this.setState({gameOver: false});
            this.setState({horizontalPos: this.state.defaultHorizontal});
            this.setState({verticalPos: this.state.defaultVertical});
            this.countdown();
        }
        else{
            
        }
    }

    demoStep = () => {

        let introTextTopArray = ['GREAT!',
                                'We\'ll start off slow',
                                'GOT IT?'];

        let introTextBottomFirst = ['NOW',
                                    'TRACK THE',
                                    'I HOPE SO, BECAUSE IT GETS'];
        
        let introTextBottomSecond = ['IT THERE!',
                                    'WITH YOUR CURSOR!',
                                    '!']

        let textRed = ['KEEP',
                        'BOX',
                        'FASTER'];

        if(this.state.demoMode){
            setTimeout(() => {
                this.demoStep();
            },5000);
        }

        if(this.state.demoStep === 0) {
            this.setState({introTopTxt: introTextTopArray[0]});
            this.setState({introBottomTxtFirst: introTextBottomFirst[0]});
            this.setState({introBottomTxtHighlight: textRed[0]});
            this.setState({introBottomTxtEnd: introTextBottomSecond[0]});
        }
        else if(this.state.demoStep === 1) {
            this.setState({introTopTxt: introTextTopArray[1]});
            this.setState({introBottomTxtFirst: introTextBottomFirst[1]});
            this.setState({introBottomTxtHighlight: textRed[1]});
            this.setState({introBottomTxtEnd: introTextBottomSecond[1]});
        }
        else if(this.state.demoStep === 2) {
            this.setState({introTopTxt: introTextTopArray[2]});
            this.setState({introBottomTxtFirst: introTextBottomFirst[2]});
            this.setState({introBottomTxtHighlight: textRed[2]});
            this.setState({introBottomTxtEnd: introTextBottomSecond[2]});
            setTimeout( () => {
                this.setState({demoMode: false});
                this.setState({countdownTrigger: true});
                this.setState({countdown: true});
            },5000);
        }

        this.setState({demoStep: this.state.demoStep+1});

    }

    countdown = () => {
        
        this.setState({countdownTrigger: false});
        this.setState({countdownVal: 3});

        let changeCountdownText = () => {
            clearInterval(countdownTimer);
            if(this.state.countdownVal > 1){
                this.setState({countdownVal: (this.state.countdownVal-1)});
                countdownTimer = setInterval(function(){changeCountdownText();},1000);
            }
            else {
                this.setState({countdownVal: "GO!"});
                setTimeout(function(){
                    this.setState({demoRunning: false});
                    this.setState({countdown: false});
                    this.startGame();
                }.bind(this),1000);
            }
        }
        
        let countdownTimer = setInterval(function(){changeCountdownText();},1000);
        
    }

    startDemo = () => {
        if(!this.state.demoRunning){
            this.setState({demoRunning: true});
            this.setState({moveFreq: 50});
            this.demoRun();
        }
    }

    demoRun = () => {

        console.log("Demo mode runs");
        let moveTimer = 0;
        setTimeout(function(){this.demoReset()}.bind(this),12000);
        setTimeout(function(){this.setFrameInterval(moveTimer,this.randomFrameTarget("horizontal"),this.randomFrameTarget("vertical"))}.bind(this),2500);
        
    }

    demoReset = () => {
        console.log("DEMO RESET RUN SUCCESSFULLY");
        this.setState({demoEnd: true});
    }

    startGame = () => {

        if(!this.state.gameRunning){
            this.setState({gameOver: false});
            this.setState({moveFreq: 20});
            this.gameRun();
        }
        
    }

    gameRun = () => {

        console.log("Game starts");
        this.setState({countdown: false});
        this.setState({gameRunning: true});
        this.setState({scoreVal: 0});
        this.setState({multiplier: 1});
        let moveTimer = 0;
        let scoreTimer = 0;
        this.setFrameInterval(moveTimer,this.randomFrameTarget("horizontal"),this.randomFrameTarget("vertical"));
        this.score(scoreTimer);
        
    }

    score = (scoreTimer) => {

        if(scoreTimer===0){
            scoreTimer = setInterval(function(){this.score(scoreTimer);}.bind(this),1);
        }

        if(!this.state.hovered){

            this.setState({stepUp: 0});
            this.setState({stepDown: (this.state.stepDown+1)});

            if((this.state.stepDown%250)===0){
                if(this.state.moveFreq<60 && !this.state.gameOver){
                    this.setState({moveFreq: (this.state.moveFreq+5)});
                }
                //DECREASE MULTIPLIER (TO MIN OF 1) EVERY 2 SECONDS
                if(this.state.multiplier>1 && !this.state.gameOver){
                    this.setState({multiplier: (this.state.multiplier-1)});
                }
                //GAME OVER AFTER 5 SECONDS
                if(this.state.stepDown===1250){
                    clearInterval(scoreTimer);
                    this.setState({stepDown: 0});
                    this.gameOver();
                }
            }
        }
        else if(this.state.hovered){
            this.setState({stepDown: 0});
            this.setState({stepUp: (this.state.stepUp+1)});
            if((this.state.stepUp%100)===0){
                // console.log("Move freq: " + this.state.moveFreq);
                this.setState({scoreVal: (this.state.scoreVal+1)});
                if(this.state.stepUp===100){
                    if(this.state.moveFreq>2){
                        this.setState({moveFreq: (this.state.moveFreq-1)});
                    }
                }
                if(this.state.stepUp===500){
                    clearInterval(scoreTimer);
                    scoreTimer = setInterval(function(){this.score(scoreTimer);}.bind(this),1);
                    this.setState({multiplier: (this.state.multiplier+1)});
                    this.setState({stepUp: 0});
                }
            }
        }

    }

    gameOver = () => {
        //Ending running game tasks
        this.setState({gameOver: true});
        this.setState({gameRunning: false});
        //Setting score state variables
        this.setState({gameNumber: (this.state.gameNumber+1)});
        this.setState({scoreVal: (this.state.scoreVal*this.state.multiplier)});

        API.updateScore({
            lastgamescore: this.state.scoreVal
        }).then(res => {
            this.setUserInformation();
        });
        
      }

    hovered = () => {
        if(!this.state.demoEnd){
            console.log("Demo started from hovering");
            this.startDemo();
        }
        else if(this.state.gameRunning){
            this.setState({hovered: true});
        }
    }

    notHovered = () => {
        this.setState({hovered: false});
        // console.log("Hovered status:" + this.state.hovered);
    }

    setFrameInterval = (moveTimer,horizontalTarget,verticalTarget) => {
        if(this.state.gameOver){
            clearInterval(moveTimer);
        }
        else{
            return moveTimer = setInterval(function() {this.frame(moveTimer,horizontalTarget,verticalTarget);}.bind(this), this.state.moveFreq);
        }
    }

    randomFrameTarget = (targetType) => {

        var newTarget;

        //DEMO TARGETING
        if(!this.state.gameRunning){
            if(targetType === "horizontal"){
                newTarget = Math.round(Math.random()*this.state.maxHorizontalDemo);
                if(newTarget === this.state.horizontalPos || newTarget < this.state.minHorizontalDemo){
                    return(this.randomFrameTarget("horizontal"));
                }
                else{
                    return newTarget;
                }
            }

            else if (targetType === "vertical") {
                newTarget = Math.round(Math.random()*this.state.maxVerticalDemo);
                if(newTarget === this.state.verticalPos || newTarget < this.state.minVerticalDemo){
                    return(this.randomFrameTarget("vertical"));
                }
                else {
                    return newTarget;
                }
            }
        }
        else{
            if(targetType === "horizontal"){
                newTarget = Math.round(Math.random()*this.state.maxHorizontalPos);
                if(newTarget === this.state.horizontalPos || newTarget < this.state.minHorizontalPos){
                    return(this.randomFrameTarget("horizontal"));
                }
                else{
                    return newTarget;
                }
            }

            else if (targetType === "vertical") {
                newTarget = Math.round(Math.random()*this.state.maxVerticalPos);
                if(newTarget === this.state.verticalPos || newTarget < this.state.minVerticalPos){
                    return(this.randomFrameTarget("vertical"));
                }
                else {
                    return newTarget;
                }
            }
        }

    }
    
    frame = (moveTimer,horizontalTarget,verticalTarget) => {

        let currentHorizontal = this.state.horizontalPos;
        let currentVertical = this.state.verticalPos;
        const resetHorizontal = this.state.defaultHorizontal;
        const resetVertical = this.state.defaultVertical;

        //If reset is active, return to center
        if(this.state.demoEnd && this.state.demoRunning){
            if(currentHorizontal===resetHorizontal){
                if(currentVertical===resetVertical){
                    clearInterval(moveTimer);
                }
                else if(currentVertical > resetVertical) {
                    this.setState({verticalPos: (currentVertical-1)});
                    clearInterval(moveTimer);
                    moveTimer = this.setFrameInterval(moveTimer,resetHorizontal,resetVertical);
                }
                else if(currentVertical < resetVertical) {
                    this.setState({verticalPos: (currentVertical+1)});
                    clearInterval(moveTimer);
                    moveTimer = this.setFrameInterval(moveTimer,resetHorizontal,resetVertical);
                }
            }
            if(currentVertical===resetVertical){
                if(currentHorizontal===resetHorizontal){
                    clearInterval(moveTimer);
                }
                else if(currentHorizontal > resetHorizontal) {
                    this.setState({horizontalPos: (currentHorizontal-1)});
                    clearInterval(moveTimer);
                    moveTimer = this.setFrameInterval(moveTimer,resetHorizontal,resetVertical);
                }
                else if(currentHorizontal < resetHorizontal) {
                    this.setState({horizontalPos: (currentHorizontal+1)});
                    clearInterval(moveTimer);
                    moveTimer = this.setFrameInterval(moveTimer,resetHorizontal,resetVertical);
                }
            }
            if (currentHorizontal > resetHorizontal){
                if(currentVertical > resetVertical) {
                    this.setState({verticalPos: (currentVertical-1)});
                }
                if(currentVertical < resetVertical) {
                    this.setState({verticalPos: (currentVertical+1)});
                }
                this.setState({horizontalPos: (currentHorizontal-1)});
                clearInterval(moveTimer);
                moveTimer = this.setFrameInterval(moveTimer,resetHorizontal,resetVertical);
            }
            if (currentHorizontal < resetHorizontal){
                if(currentVertical > resetVertical) {
                    this.setState({verticalPos: (currentVertical-1)});
                }
                if(currentVertical < resetVertical) {
                    this.setState({verticalPos: (currentVertical+1)});
                }
                this.setState({horizontalPos: (currentHorizontal+1)});
                clearInterval(moveTimer);
                moveTimer = this.setFrameInterval(moveTimer,resetHorizontal,resetVertical);
            }
        }
        //If horizontal target is reached
        else if (currentHorizontal === horizontalTarget) {
    
            //If both targets are reached
            if(currentVertical === this.state.verticalTarget){
                clearInterval(moveTimer);
                //Reset both targets
                moveTimer = this.setFrameInterval(moveTimer,this.randomFrameTarget("horizontal"),this.randomFrameTarget("vertical"));
            }

            //Reset only horizontal target
            else{
                clearInterval(moveTimer);
                moveTimer = this.setFrameInterval(moveTimer,this.randomFrameTarget("horizontal"),verticalTarget);
            }
        
        }
    
        //If vertical target is reached
        else if (currentVertical === verticalTarget) {
            //Reset vertical target
            clearInterval(moveTimer);
            moveTimer = this.setFrameInterval(moveTimer,horizontalTarget,this.randomFrameTarget("vertical"));
        }
    
        //If neither target is reached, adjust both positions (starting with horizontal) 
            //Use current position and targets to determine direction/increment.
        else if (currentHorizontal > horizontalTarget){
            if(currentVertical > verticalTarget) {
                this.setState({verticalPos: (currentVertical-1)});
            }
            else if(currentVertical < verticalTarget) {
                this.setState({verticalPos: (currentVertical+1)});
            }
            this.setState({horizontalPos: (currentHorizontal-1)});
            clearInterval(moveTimer);
            moveTimer = this.setFrameInterval(moveTimer,horizontalTarget,verticalTarget);
        }
    
        else if (currentHorizontal < horizontalTarget){
            if(currentVertical > verticalTarget) {
                this.setState({verticalPos: (currentVertical-1)});
            }
            if(currentVertical < verticalTarget) {
                this.setState({verticalPos: (currentVertical+1)});
            }
            this.setState({horizontalPos: (currentHorizontal+1)});
            clearInterval(moveTimer);
            moveTimer = this.setFrameInterval(moveTimer,horizontalTarget,verticalTarget);
        }
        
    }

    logoutUser(){
        API.logout()
          .then(res => {
              console.log("user logged out" + res.data);
              this.props.history.replace("/login");
        })
    }

    componentDidMount(){
        API.getUser()
        .then(res => {
            console.log(res.data.isLoggedIn);
            if (!res.data.isLoggedIn){
                this.props.history.replace("/login");
            }
            else{
                this.setUserInformation();
            }
        });
    }

    componentWillUnmount(){
        this.logoutUser();
    }

    setUserInformation(){
        API.getUserInfo().then(res => {
            this.setState({username: res.data.user.username});
            this.setState({userTopScore: res.data.user.highestscore});
            this.setState({lastGameScore: res.data.user.lastgamescore});
            this.setState({gamesPlayed: res.data.user.numberofgames});
        })
    }

    handleOnClick = () => {
        this.logoutUser();
    }

    render = () => {

        const mouseEnter = this.state.demoRunning ? () => {} : this.hovered;
        const mouseLeave = this.state.demoRunning ? () => {} : this.notHovered;

        if(this.state.demoIntro){
            return(
                <div>
                    <Scoreboard username={this.state.username} top={this.state.userTopScore} last={this.state.lastGameScore} total={this.state.gamesPlayed}/>
                    <div className="container">
                        <DemoIntro/>
                        <div id="startBtnWrap">
                            <div id="startBtn" onClick={this.onStartClick}><p id="startTxt">PLΛY</p></div>
                        </div>
                    </div>
                    <div id="startBtnWrap">
                        <div id="startBtn" onClick={this.handleOnClick} style={{position:"relative", right: 735, bottom: 275}}><p id="startTxt" style={{fontSize:18}}>LOGOUT</p></div>
                    </div>
                </div>);
        }
        if(this.state.demoMode){
            if(this.state.demoStep === 0){
                return(
                    <div>
                        <Scoreboard username={this.state.username} top={this.state.userTopScore} last={this.state.lastGameScore} total={this.state.gamesPlayed}/>
                        <div className="container">
                            <div className="introWrap">
                                <div>
                                    <p className="introTop">Place your cursor on the <span className="yellowHighlight">square</span> below</p>
                                </div>
                            </div>
                
                        <div onMouseEnter={this.demoStep}>
                            <div
                                id="animation"
                                style={{left:this.state.horizontalPos, top:this.state.verticalPos}}
                                // onMouseLeave={mouseLeave}
                                ref={(ref) => this.box = ref}
                            ></div>
                        </div>
                    
                            <div className="introWrapBottom">
                                <div>
                                    <p id="arrow" className="yellowHighlight">↑</p>
                                    <p className="introBottom"><span className="red">HINT!</span> IT'S RIGHT HERE</p>
                                </div>
                            </div>
                        </div>
                        <div id="startBtnWrap">
                            <div id="startBtn" onClick={this.handleOnClick} style={{position:"relative", right: 735, bottom: 275}}><p id="startTxt" style={{fontSize:18}}>LOGOUT</p></div>
                        </div>
                    </div>
                )
            }
            else{
                this.startDemo();
                return (
                    <div>
                        <Scoreboard username={this.state.username} top={this.state.userTopScore} last={this.state.lastGameScore} total={this.state.gamesPlayed}/>
                        <div className="container">
                            <div className="introWrap">
                                <div>
                                    <br/>
                                    <p className="introTop">{this.state.introTopTxt}</p>
                                </div>
                            </div>
                    
                            <div
                                id="animation"
                                style={{left:this.state.horizontalPos, top:this.state.verticalPos}}
                                // ref={(ref) => this.box = ref}
                            ></div>
                        
                            <div className="introWrapBottom">
                                <div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p className="introBottom">{this.state.introBottomTxtFirst} <span className="red">{this.state.introBottomTxtHighlight}</span> {this.state.introBottomTxtEnd}</p>
                                </div>
                            </div>
                        </div>
                        <div id="startBtnWrap">
                            <div id="startBtn" onClick={this.handleOnClick} style={{position:"relative", right: 735, bottom: 275}}><p id="startTxt" style={{fontSize:18}}>LOGOUT</p></div>
                        </div>
                    </div>
                );
            }
        }
        if(this.state.countdownTrigger){
            this.countdown();
        }
        if(this.state.countdown){
            return(
                <div>
                    <Scoreboard username={this.state.username} top={this.state.userTopScore} last={this.state.lastGameScore} total={this.state.gamesPlayed}/>
                    <div className="container">
                        <div className="countdown">
                            <p>{this.state.countdownVal}</p>
                        </div>
                        <div
                            id="animation"
                            style={{left:this.state.horizontalPos, top:this.state.verticalPos}}
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                        ></div>
                    </div>
                    <div id="startBtnWrap">
                        <div id="startBtn" onClick={this.handleOnClick} style={{position:"relative", right: 735, bottom: 275}}><p id="startTxt" style={{fontSize:18}}>LOGOUT</p></div>
                    </div>
                </div>
            )
        }
        if(this.state.gameOver) {
            return (
                <div>
                    <Scoreboard username={this.state.username} top={this.state.userTopScore} last={this.state.lastGameScore} total={this.state.gamesPlayed}/>
                    <div className="container">
                        <div id="gameOverWrap">
                            <p>GAME OVER</p>
                        </div>
                        <div id="scoreWrap">
                            <p className="red">SCORE:</p>
                            <p className="yellow">{this.state.scoreVal}</p>
                        </div>
                        <div id="startBtnWrap">
                            <div id="startBtn" onClick={this.onStartClick}><p id="startTxt">PLΛY</p></div>
                        </div>
                    </div>
                    <div id="startBtnWrap">
                        <div id="startBtn" onClick={this.handleOnClick} style={{position:"relative", right: 735, bottom: 275}}><p id="startTxt" style={{fontSize:18}}>LOGOUT</p></div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div>
                    <Scoreboard username={this.state.username} top={this.state.userTopScore} last={this.state.lastGameScore} total={this.state.gamesPlayed}/>
                    <div className="container">
                        <div className="scoreBox">
                            <p>SCORE: {this.state.scoreVal} <span id="multi">x<span className="yellow"> {this.state.multiplier}</span></span></p>
                        </div>
                        <div
                            id="animation"
                            style={{left:this.state.horizontalPos, top:this.state.verticalPos}}
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                        ></div>
                    </div>
                    <div id="startBtnWrap">
                        <div id="startBtn" onClick={this.handleOnClick} style={{position:"relative", right: 735, bottom: 275}}><p id="startTxt" style={{fontSize:18}}>LOGOUT</p></div>
                    </div>
                </div>
            );
        }
    }

}

export default withRouter(Game);