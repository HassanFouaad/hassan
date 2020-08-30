import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import Course1 from "./course1.jpg";
import Course2 from "./course2.jpg";
import Course3 from "./course3.jpg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default class Certificates extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped2: !prevState.isFlipped2 }));
  }
  handleClick3(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped3: !prevState.isFlipped3 }));
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 2300,
    };
    return (
      <div id="slide">
        <div className="row mt-3 mb-5">
          <div className="col-sm mt-5">
            <h5 id="iconaya2">REACT JS - REDUX FRONT END DEVELOPMENT</h5>

            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="vertical"
              className="justify-content-center"
            >
              <div id="certificate">
                <img
                  src={Course1}
                  className="col-sm img-fluid"
                  id="certificate"
                ></img>
                <div className="col-sm text-center">
                  <button
                    onClick={this.handleClick}
                    className="btn"
                    id="buttonaya"
                  >
                    Verify Here!
                  </button>
                </div>
              </div>
              <div>
                <div
                  className="text-center row justify-content-center"
                  id="certificate"
                >
                  <div className="col-sm " id="verify">
                    <AwesomeButton
                      size="150"
                      href="http://coursera.org/verify/74A2UZ7L2WU2"
                      target="_blank"
                    >
                      Verify
                    </AwesomeButton>
                  </div>
                </div>
                <div className="col-sm text-center">
                  <button
                    className="btn btn-success"
                    onClick={this.handleClick}
                    id="butt"
                  >
                    Certificate
                  </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="col-sm mt-5">
            <h5 id="iconaya2">MONGODB EXPRESS NODE SERVER SIDE DEVELOPMENT</h5>
            <ReactCardFlip
              isFlipped={this.state.isFlipped2}
              flipDirection="vertical"
              className="justify-content-center "
            >
              <div id="certificate">
                <img
                  src={Course3}
                  className="col-sm img-fluid"
                  id="certificate"
                ></img>
                <div className="col-sm text-center">
                  <button
                    onClick={this.handleClick2}
                    className="btn"
                    id="buttonaya"
                  >
                    Verify Here!
                  </button>
                </div>
              </div>
              <div>
                <div
                  className="text-center row justify-content-center"
                  id="certificate"
                >
                  <div className="col-sm " id="verify">
                    <AwesomeButton
                      size="150"
                      href="http://coursera.org/verify/F752N24L94H7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                    </AwesomeButton>
                  </div>
                </div>
                <div className="col-sm text-center">
                  <button
                    className="btn btn-success"
                    onClick={this.handleClick2}
                    id="butt"
                  >
                    Certificate
                  </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="col-sm mt-5">
            <h5 id="iconaya2">UI AND FRONT END FRAMEWORKS DEVELOPMENT</h5>
            <ReactCardFlip
              isFlipped={this.state.isFlipped3}
              flipDirection="vertical"
              className="justify-content-center "
            >
              <div id="certificate">
                <img
                  src={Course2}
                  className="col-sm img-fluid"
                  id="certificate"
                ></img>
                <div className="col-sm text-center">
                  <button
                    onClick={this.handleClick3}
                    className="btn "
                    id="buttonaya"
                  >
                    Verify Here!
                  </button>
                </div>
              </div>
              <div>
                <div
                  className="text-center row justify-content-center"
                  id="certificate"
                >
                  <div className="col-sm " id="verify">
                    <AwesomeButton
                      size="150"
                      href="http://coursera.org/verify/F752N24L94H7"
                      target="_blank"
                    >
                      Verify
                    </AwesomeButton>
                  </div>
                </div>
                <div className="col-sm text-center">
                  <button
                    className="btn btn-success"
                    onClick={this.handleClick3}
                    id="butt"
                  >
                    Certificate
                  </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}
