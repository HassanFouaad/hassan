import React, { Component } from "react";
import Paper from "material-ui/Paper";
import "./programming.css";

export default class ProgSkills extends Component {
  render() {
    const style = {
      width: "100%",
      display: "inline-block",
      background: "#263238",
    };
    return (
      <div className="programming">
        <p className="headline"> Programming skills</p>
        <div className="programming-console">
          <Paper zDepth={3} style={style}>
            <div className="console-header">
              <div className="console-buttons">
                <div className="console-button btn-1"></div>
                <div className="console-button btn-2"></div>
                <div className="console-button btn-3"></div>
              </div>
            </div>
            <div className="console-content">
              <ul>
                <li>
                  &lt;<span className="html-1">html</span>&gt;
                </li>
                <li>
                  <ul className="no-top-padding">
                    <li>
                      &lt;<span className="html-1">head</span>&gt; &lt;/
                      <span className="html-1">head</span>&gt;
                    </li>
                    <li>
                      &lt;<span className="html-1">body</span>&gt;
                    </li>
                    <li>
                      <ul className="no-top-padding">
                        <li>
                          &lt;
                          <span className="html-1">
                            ul <span style={{ color: "#5491b7" }}>class</span>
                            <span style={{ color: "white" }}>=</span>
                            "back-end-skills"
                          </span>
                          &gt;
                        </li>
                        <ul className="no-top-padding">
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">JavaScript</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">Node.js</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">MongoDB</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">Express JS</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">Webpack, Babel</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">Git</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                        </ul>
                        <li>
                          &lt;/<span className="html-1">ul</span>&gt;
                        </li>
                      </ul>
                      <ul className="no-top-padding">
                        <li>
                          &lt;
                          <span className="html-1">
                            ul <span style={{ color: "#5491b7" }}>class</span>
                            <span style={{ color: "white" }}>=</span>
                            "front-end-skills"
                          </span>
                          &gt;
                        </li>
                        <ul className="no-top-padding">
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">JavaScript</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">React JS</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">Bootstrap</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">LESS, SASS</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                          <li>
                            &lt;<span className="html-1">li</span>&gt;
                            <span className="html-2">HTML5, CSS3</span>
                            &lt;/<span className="html-1">li</span>&gt;
                          </li>
                        </ul>
                        <li>
                          &lt;/<span className="html-1">ul</span>&gt;
                        </li>
                      </ul>
                    </li>
                    <li>
                      &lt;/<span className="html-1">body</span>&gt;
                    </li>
                  </ul>
                </li>
                <li>
                  &lt;/<span className="html-1">html</span>&gt;
                </li>
              </ul>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
