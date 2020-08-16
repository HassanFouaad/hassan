import React, { Component } from "react";
import AOS from "aos";
export default class Skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 700,
      easing: "ease-in-out-back",
    });
  }
  render() {
    return (
      <div className="col" id="skillrow">
        <div className="col-sm" id="skillLeft" data-aos="fade-right">
          <div className="row">
            {/*  <div className="col-sm-8">
              <i
                style={{ color: "white" }}
                id="myi"
                className="fas fa-file-code fa-5x"
              ></i>
            </div> */}
            <span className="col-sm-8" id="front">
              Back-End Skills
            </span>
          </div>
        </div>
        <div className="col-sm" id="skillRight" data-aos="fade-left">
          <span className="col-sm-8" id="front" style={{ right: "0" }}>
            Front-End
          </span>
        </div>
      </div>
    );
  }
}
