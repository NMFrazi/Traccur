import React, { Component } from "react";
import "./App.css";
import Welcomepage from "./pages/welcomepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/loginpage";
import Register from "./pages/register";
import Game from "./component/GameComponents/Game";

class App extends Component {
  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcomepage} />
          <Route exact path="/welcomepage" component={Welcomepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/play" component={Game} />
        </Switch>
      </Router>
    );
  };
}

export default App;
