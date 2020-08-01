import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Header from "./Header";
import About from "./About";

import { Switch, Route, Redirect } from "react-router-dom";

import Contact from "./Slider/Contact";
export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch location={this.props.location}>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Contact></Contact>
      </div>
    );
  }
}
