import React, { Component, Fragment } from "react";
import { AwesomeButton } from "react-awesome-button";

import "react-awesome-button/dist/styles.css";
export default class Touch extends Component {
  render() {
    return (
      <div id="touch2">
        <Fragment>
          <div className="row justify-content-center">
            <div className="text-center" id="friends">
              😄 Be in touch
            </div>
          </div>

          <div className="row justify-content-center mt-3 mb-3">
            <div className="text-center col">
              {" "}
              <a
                className="btn btn-social-icon btn-linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/hassan-fouad-76a417159/"
                rel="noopener noreferrer"
              >
                <span
                  className="fab fa-linkedin-in fa-lg"
                  style={{ color: "white" }}
                ></span>
              </a>{" "}
              <a
                target="_blank"
                className="btn btn-social-icon btn-github"
                href="http://www.github.com/hassanfouaad"
                rel="noopener noreferrer"
              >
                <span
                  className="fab fa-github fa-lg"
                  style={{ color: "white" }}
                ></span>
              </a>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="text-center">
              <button
                className="btn"
                id="buttonaya"
                href="mailto:mrhassanfouad1@gmail.com"
              >
                <span
                  id="sayhello"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Say Hello 👋
                </span>
              </button>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}
