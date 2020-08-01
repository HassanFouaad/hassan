import React, { Component } from "react";
import { Media, MediaProps, Jumbotron, Container } from "reactstrap";
import Me from "../images/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificates from "./Slider/Certificates";
export default class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out-back",
    });
  }
  render() {
    return (
      <div id="aboutjumpo">

        <Container id="sub" style={{marginTop:"120px"}}>
          <div className="text-center" id="eng" data-aos="fade-left">
            Contact
          </div>
          <div className="row ">
            <div className="col-sm-4" data-aos="fade-up">
              <img className="img-fluid" id="mey" src={Me}></img>
            </div>
            <div className="col-sm-8 ml-auto" data-aos="fade-down">
              <div id="listaya" className="row">
                <li>
                  <i className="fas fa-signature" id="adi"></i>
                  <span>Hassan Adel Ahmed Fouad</span>
                </li>
                <hr></hr>
              </div>
              <div id="listaya" className="row">
                <li>
                  <i className="fas fa-graduation-cap" id="adi"></i>
                  <span>Faculty Of Engineering - KFS University</span>
                </li>
                <hr></hr>
              </div>
              <div id="listaya" className="row">
                <li>
                  <i className="fas fa-map-marker-alt" id="adi"></i>
                  <span>Kafr ElSheikh, Egypt</span>
                </li>
                <hr></hr>
              </div>
              <div id="listaya" className="row">
                <li>
                  <i class="fas fa-envelope" id="adi"></i>
                  <span>
                    <a href="mailto:mrhassanfouad1@gmail.com">MailMe</a>
                  </span>
                </li>
                <hr></hr>
              </div>
              <div id="listaya" className="row">
                <li>
                  <i className="fas fa-phone" id="adi"></i>
                  <span>
                    <a href="tel:+201202021670">+2 01202021670</a>
                  </span>
                </li>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="text-left" id="listaya">
            <li>
              <a className="text-center" target="_blank" href="https://drive.google.com/file/d/19JJrcZ0s79ySCpsQu-KoNuUqacBysOJ-/view?usp=sharing">
                View Full Resume
              </a>
            </li>
          </div>
        </Container>
        <Container data-aos="fade-up" className="mt-5">
          <div className="text-center" id="eng" data-aos="fade-left">
            Certificates
          </div>
          <Certificates></Certificates>
        </Container>
      </div>
    );
  }
}
