import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";

export default class Carousel extends Component {
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
      <Container className="mt-3" id="slide">
        <Slider {...settings}>
          <Container className="text-center justify-content-center">
            <div>
              <div>
                <i
                  style={{ color: "#212845" }}
                  id="myi"
                  className="fa fa-file-code-o fa-5x"
                ></i>
              </div>
              <span id="front">Front-End Developement</span>
            </div>
            <div>
              <span id="eng" className="mt-3">
                Skills I do
              </span>
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
            <div></div>
          </Container>
          <Container className="text-center justify-content-center">
            <div>
              <div>
                <i
                  style={{ color: "#212845" }}
                  id="myi"
                  className="fa fa-server fa-5x"
                ></i>
              </div>
              <span id="front">Back-End Developement</span>
            </div>
            <div>
              <span id="eng" className="mt-3">
                Skills I do
              </span>
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
            <div></div>
          </Container>
          <Container className="text-center justify-content-center">
            <div className="mt-5">
              <div>
                <i
                  style={{ color: "#212845" }}
                  id="myi"
                  className="fa fa-paint-brush fa-5x"
                ></i>
              </div>
              <span id="front">Graphic Design</span>
              <div>
                <span id="KFS">UX / UI</span>
              </div>
            </div>

            <div></div>
          </Container>
        </Slider>
      </Container>
    );
  }
}
