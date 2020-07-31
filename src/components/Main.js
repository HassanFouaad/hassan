import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}
