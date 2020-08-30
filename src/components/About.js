import React, { Component } from "react";
import { Container, Button } from "reactstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import Certificates from "./Slider/Certificates";
import Black from "../images/blackcat.png";
import Black2 from "../images/mew2.jpg";
import ita1 from "../images/ita1.jpg";
import ita2 from "../images/ita2.jpg";
import bekam from "../images/bekam.jpg";
import bekam2 from "../images/bekam2.jpg";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 600,
      easing: "ease-in-out-back",
    });
  }
  render() {
    const customAos = {
      overflowX: "hidden",
    };
    return (
      <div>
        <Container data-aos="fade-up" className="mt-5 mb-5">
          <div
            className="text-center mb-3 mt-5"
            id="engaya"
            data-aos="fade-left"
          >
            Certificates
          </div>
          <Certificates></Certificates>
        </Container>
        <div className="mt-5">
          <span>&nbsp;</span>
        </div>
        <Container className="mt-5" id="portfolioDestination">
          <div className="text-center mt-5" id="engaya" data-aos="fade-up">
            Personal Apps
          </div>
          <div className=" row mt-5">
            <div className="col-sm-4" data-aos="fade-right">
              <img src={bekam} alt="Mewoers" className="img-fluid"></img>
            </div>
            <div className="col-sm">
              <div className="text-left ml-5" id="meow1" data-aos="fade-left">
                <span>Bekam - Online Shopping / Trading Ecommerce App</span>
              </div>
              <div className="text-left ml-5" id="meow2" data-aos="fade-right">
                <span>
                  <a
                    target="_blank"
                    href="https://github.com/HassanFouaad/bekam"
                    rel="noopener noreferrer"
                  >
                    Git Repo
                  </a>
                </span>
                &nbsp; &nbsp;
                <span>
                  <a
                    target="_blank"
                    href="http://beekam.herokuapp.com/"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </span>
              </div>
              <div className="text-left ml-5" id="meow3" data-aos="fade-up">
                <span>
                  <p>
                    Bekam is a MERN Stack Online Shopping / Trading Ecommerce
                    App that includes
                  </p>
                </span>
              </div>
              <div className="text-left ml-3" id="meow3" data-aos="fade-up">
                <span>
                  <ul>
                    <li>
                      Full Athentication "Signup - Signin - Logout" System.
                    </li>
                    <li>Shopping Filteration based on Client selection</li>
                    <li>Cart & Checkout Full working Systems</li>
                    <li>
                      Order Tracker that shows the status of the order as it's
                      un processed , in processing, Shipped, Delivered or
                      Cancelled
                    </li>
                    <li>
                      Products available quantity instantly decreases from
                      Database at Delivery or Shipping
                    </li>
                    <li>
                      Product Details Showing Page <br></br>
                    </li>
                    <li>
                      Seller Dashboard Page <br></br>"Adding Products to the
                      website". delete or update his publishes products
                    </li>
                    <li>
                      Client Dashboard Page <br></br>"Tracking his Orders,
                      Orders history and everyting related to buyer"
                    </li>
                    <li>
                      Check Online Demo
                      <a
                        href="http://beekam.herokuapp.com/"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        here
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-sm-2 text-center" data-aos="fade-right">
              <img
                src={bekam2}
                alt="Mewoers"
                className="img-fluid"
                style={{ maxHeight: "200px", border: "solid black 1px" }}
              ></img>
            </div>
          </div>
          <hr></hr>
          <div className=" row mt-5">
            <div className="col-sm-4" data-aos="fade-right">
              <img src={Black} alt="Mewoers" className="img-fluid"></img>
            </div>
            <div className="col-sm">
              <div className="text-left ml-5" id="meow1" data-aos="fade-left">
                <span>MEOWERS - Social Network App</span>
              </div>
              <div className="text-left ml-5" id="meow2" data-aos="fade-right">
                <span></span>
                <span>
                  <a
                    target="_blank"
                    href="https://github.com/HassanFouaad/meowers"
                    rel="noopener noreferrer"
                  >
                    Git Repo
                  </a>
                </span>
                &nbsp; &nbsp;
                <span>
                  <a
                    target="_blank"
                    href="http://meowers.herokuapp.com/"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </span>
              </div>
              <div className="text-left ml-5" id="meow3" data-aos="fade-up">
                <span>
                  <p>
                    Meowers is a social network MERN Stack Application that
                    includes
                  </p>
                </span>
              </div>
              <div className="text-left ml-3" id="meow3" data-aos="fade-up">
                <span>
                  <ul>
                    <li>
                      Full Athentication "Signup - Signin - Logout" System.
                    </li>
                    <li>Adding,editing and deleting posts.</li>
                    <li>Follow-UnFollow Full Working System.</li>
                    <li>Like - Unlike Full Working System.</li>
                    <li>
                      Profile Page Showing <br></br>"Posts by User + Following /
                      Followers Lists".
                    </li>
                    <li>
                      Edit Account Page <br></br>"Upload/Edit Profile Picture -
                      Edit Account's Informations".
                    </li>
                    <li>
                      Check Online Demo
                      <a
                        href="http://meowers.herokuapp.com/"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        here
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-sm-2 text-center" data-aos="fade-right">
              <img
                src={Black2}
                alt="Mewoers"
                className="img-fluid"
                style={{ maxHeight: "200px", border: "solid black 1px" }}
              ></img>
            </div>
          </div>
          <hr></hr>
          <div className=" row mt-5">
            <div className="col-sm-4" data-aos="fade-right">
              <img src={ita1} alt="Mewoers" className="img-fluid"></img>
            </div>
            <div className="col-sm">
              <div className="text-left ml-5" id="meow1" data-aos="fade-left">
                <span>ITALIANO - Restaurant Web App</span>
              </div>
              <div className="text-left ml-5" id="meow2" data-aos="fade-right">
                <span>
                  <a
                    target="_blank"
                    href="https://github.com/HassanFouaad/Restaurant"
                    rel="noopener noreferrer"
                  >
                    Git Repo
                  </a>
                </span>
                &nbsp; &nbsp;
              </div>
              <div className="text-left ml-5" id="meow3" data-aos="fade-up">
                <span>
                  <p>Italiano is a responsive Restaurant Web Application</p>
                </span>
              </div>
              <div className="text-left ml-3" id="meow3" data-aos="fade-up">
                <span>
                  <ul>
                    <li>
                      Full Athentication "Signup - Signin - Logout" System.
                    </li>
                    <li>Adding Dishes to Favourites</li>
                    <li>Admin can Add - Remove Dishes</li>
                    <li>Admin can Update Dishes Currency</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-sm-2 text-center" data-aos="fade-right">
              <img
                src={ita2}
                alt="Mewoers"
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              ></img>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
