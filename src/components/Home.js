import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactTypingEffect from "react-typing-effect";
import Carousel from "./Slider/Carousel";

import AOS from "aos";
import "aos/dist/aos.css";
import Touch from "./Touch";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 700,
      easing: "ease-in-out-back",
    });
  }
  render() {
    const wave = <div>hey</div>;
    return (
      <div>
        <Jumbotron>
          <Container className="d-flex justify-content-start">
            <h1 id="hello">
              <ReactTypingEffect
                text={[
                  "Hello I'm Hassan",
                  "FullStack Developer",
                  "Graphic Designer",
                  "Glad to see you here",
                ]}
                speed="100"
                eraseDelay="1000"
                typingDelay="500"
                style={{ color: "white" }}
              />
            </h1>
          </Container>
        </Jumbotron>
        <Container>
          <div
            className="row mb-5 mt-5"
            align="center"
            id="touch"
            data-aos="fade-up"
          >
            <div className="col-sm " id="education">
              <h1
                id="what"
                className="mt-3"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Me?
              </h1>
              <div className="row mt-1">
                <div
                  className="col-md"
                  id="what2"
                  data-aos="zoom-in-down"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p id="me">
                    I'm MERN-Stack Developer ALWAYS seeking for extending my
                    development knowledge, I code in ReactJS Javascript based
                    library, Support that by NodeJS based Back-End runtime,
                    Build API REST by Express JS Then Back it up by MONGODB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Carousel></Carousel>
          </div>
        </Container>
        <Container className="mb-5">
          <div
            className="mb-5"
            data-aos="zoom-in-down"
            data-aos-anchor-placement="top-bottom"
          ></div>
        </Container>

        <Container>
          <div>
            <div className="row">
              <div
                className="col-sm-3 text-center mt-5"
                id="morerow"
                data-aos="fade-right"
              > 
              <Link to="/about" id="viewmore">About Me</Link>
              </div>
              <div className=" col-sm-3 ml-auto" data-aos="fade-left">
                <Touch></Touch>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
