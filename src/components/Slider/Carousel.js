import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import front from "../../images/front.jpg";
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 3500,
    };
    return (
      <div className="mt-3" id="slide">
        <Slider {...settings}>
          <div className="text-center justify-content-center" id="backimage">
            <div id="a7a"></div>
            <div id="frontcontent" className="">
              <div>
                <i
                  style={{ color: "white" }}
                  id="myi"
                  className="fas fa-server fa-5x"
                ></i>
              </div>
              <div>
                <span id="front">Back-End Developement</span>
              </div>
              <div className="row justify-content-center mt-3">
                <div id="KFS" className="col-sm-2">
                  <span>Node.Js</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>Express.JS</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>MongoDB</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>GIT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center justify-content-center" id="frontimage">
          <div id="a7a"></div>
            <div id="frontcontent">
              <div>
                <div>
                  <i
                    style={{ color: "white" }}
                    id="myi"
                    className="fas fa-file-code fa-5x"
                  ></i>
                </div>
                <span id="front">Front-End Developement</span>
              </div>

              <div className="row justify-content-center mt-3">
                <div id="KFS" className="col-sm-2">
                  <span>HTML</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>CSS</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>REACT JS</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>BOOSTRAP</span>
                </div>
                <div id="KFS" className="col-sm-2">
                  <span>jQUERY</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
