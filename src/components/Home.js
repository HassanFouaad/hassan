import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactTypingEffect from "react-typing-effect";
import Carousel from "./Slider/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import Touch from "./Touch";
import { Link } from "react-router-dom";
import Skills from "./Skills";
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
    return (
      <div style={{ overflowX: "hidden" }}>
        <Jumbotron>
          <Container className="d-flex justify-content-start">
            <h1 id="hello">
              <ReactTypingEffect
                text={[
                  "Hello I'm Hassan",
                  "MERN Stack Developer",
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
        <div className="row" align="center" id="touch" data-aos="fade-up">
          <div id="memeimage"></div>
          <div className="col-sm" id="education">
            <h1
              id="what"
              className="mt-3"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Me?
            </h1>
            <div className="row mt-4 mr-4 ml-4">
              <div
                className="col-md-6 offset-md-3"
                id="what2"
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-bottom"
              >
                <p id="me">
                  I'm MERN-Stack Developer Always seeking for extending my
                  development knowledge, I write codes in React JS Javascript
                  based library, Supporting that by Node JS Back-End runtime,
                  Build REST API by Express JS Then Back it up by MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <Carousel></Carousel>
        </div>
        <Container>
          <div>
            <div className="row">
              <div
                className="col-sm-3 text-center mt-5"
                id="morerow"
                data-aos="fade-right"
              >
                <Link to="/about" id="viewmore">
                  About Me?
                </Link>
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
