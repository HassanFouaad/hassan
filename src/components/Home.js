import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import FooterComponent from "../components/Footer/footer.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Touch from "./Touch";
import About from "./About";
import ProgSkills from "./Skills/ProgSkills";
import AgileQuoteComponent from "./AgileQuote/AgileQuote";
import HeaderComponent from "./Jumbos/Jumbos";
import ContactMe from "./ContactMe/ContactMe.js";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <div className="section dark" id="homeDestination">
          <div
            className="section-container header-component"
            data-aos="fade-up"
          >
            <HeaderComponent></HeaderComponent>
          </div>
        </div>
        <div className="section" style={{ background: "#EBEDF0" }}>
          <div className="section-container">
            <AgileQuoteComponent></AgileQuoteComponent>
          </div>
        </div>
        <div className="section dark" style={{ background: "white" }}>
          <div className="section-container">
            <ProgSkills></ProgSkills>
          </div>
        </div>
        <div className="section dark py-5" style={{background:"#060606"}}>
          <ContactMe></ContactMe>
        </div>
        <About></About>
        <Container>
          <div className="row">
            <div className=" col-sm-3 ml-auto" data-aos="fade-left">
              <Touch></Touch>
            </div>
          </div>
        </Container>
        <div className="section dark">
          <div className="section-container footer-component">
            <FooterComponent></FooterComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
