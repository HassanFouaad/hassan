import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Switch, Route } from "react-router-dom";
import BrowserDetectComponent from "./BrowserDetect/BrowserDetect";
const demoAsyncCall = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
};
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ mounted: true }), 2000);
  }

  componentDidUpdate() {
    clearTimeout(this.id);
  }
  render() {
    const { mounted } = this.state;
    if (!mounted) {
      return <div className="loader"></div>;
    } else {
      return (
        <MuiThemeProvider>
          <div className="App">
            <BrowserDetectComponent></BrowserDetectComponent>
            <Header></Header>
            <Switch>
              <Route exact path="/" render={() => <Home />}></Route>
              <Route path="/about" component={About}></Route>
            </Switch>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}
