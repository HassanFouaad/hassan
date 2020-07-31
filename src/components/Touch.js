import React, { Component, Fragment } from "react";
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
export default class Touch extends Component {
  render() {
    return (
      <div id="touch"><Fragment>
      <div className="row justify-content-center">
        <div className="text-center" id="friends">
        😄 Be in touch
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="text-center">
          <AwesomeButton href="mailto:mrhassanfouad1@gmail.com">
            <span id="sayhello">Say Hello 👋</span>
          </AwesomeButton>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="text-center col">
          {" "}
          <a
            className="btn btn-social-icon btn-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/hassan-fouad-76a417159/"
          >
            <span
              className="fa fa-linkedin fa-lg"
              style={{ color: "white" }}
            ></span>
          </a>{" "}
          <a
            target="_blank"
            className="btn btn-social-icon btn-github"
            href="http://www.github.com/hassanfouaad"
          >
            <span
              className="fa fa-github fa-lg"
              style={{ color: "white" }}
            ></span>
          </a>
        </div>
      </div>
    </Fragment></div>
    );
  }
}
