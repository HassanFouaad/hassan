import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Header from "./Header";
import Touch from "./Touch";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "reactstrap";
import Contact from "./Slider/Contact";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Contact></Contact>
      </div>
    );
  }
}
