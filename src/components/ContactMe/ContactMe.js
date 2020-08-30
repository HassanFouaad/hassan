import React, { Fragment } from "react";
import Me from "../../images/me.jpg";
import "./contact.css";
import { Button, Container } from "reactstrap";
export default function ContactMe() {
  return (
      <Fragment><div id="aboutDestination"></div>
    <Container id="sub" style={{ marginTop: "150px"}} className="my-5">
      <div className="text-center headline" id="engaya" data-aos="fade-left">
        <p className="headline">Contact</p>
      </div>
      <div className="row ">
        <div className="col-md-4 col-sm-3" data-aos="fade-up">
          <img className="img img-fluid rounded" src={Me}></img>
        </div>
        <div className="col-sm-8 ml-auto" data-aos="fade-down">
          <div id="listaya" className="row">
            <li>
              <i className="fas fa-signature" id="adi"></i>
              <span>Hassan Fouad</span>
            </li>
            <hr></hr>
          </div>
          <div id="listaya" className="row">
            <li>
              <i className="fas fa-map-marker-alt" id="adi"></i>
              <span>Cairo</span>
            </li>
            <hr></hr>
          </div>
          <div id="listaya" className="row">
            <li>
              <i className="fas fa-envelope" id="adi"></i>
              <span>
                <a
                  href="mailto:mrhassanfouad1@gmail.com"
                  rel="noopener noreferrer"
                >
                  MailMe
                </a>
              </span>
            </li>
            <hr></hr>
          </div>
          <div id="listaya" className="row">
            <li>
              <i className="fas fa-phone" id="adi"></i>
              <span>
                <a href="tel:+201202021670" rel="noopener noreferrer">
                  +2 01202021670
                </a>
              </span>
            </li>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="text-center mt-2" id="listaya">
        <li>
          <a
            className="text-center"
            target="_blank"
            href="https://drive.google.com/file/d/1OOC1rAigsZRbP7iiJEdRoUpZ6R65yn9Z/view?usp=sharing"
            rel="noopener noreferrer"
          >
            <Button
              style={{ background: "#f26d64", border: "none" }}
              id="butonaya"
            >
              View Full Resume
            </Button>
          </a>
        </li>
      </div>
    </Container></Fragment>
  );
}
