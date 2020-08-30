import React, { Component, Fragment } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Navbar,
} from "reactstrap";
import { Link as Linker } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      isHovering: false,
      status: "top",
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.listener = null;
  }
  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 700,
      easing: "ease-in-out-back",
    });
    this.listener = document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 700) {
        if (this.state.status !== "colored") {
          this.setState({ status: "colored" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  render() {
    const outStyle = {
      color: this.state.status === "top" ? "#f26d64" : "#f26d64",
      backgroundColor: this.state.status === "top" ? "" : "#f7fafd",
    };
    const outStyle2 = {};
    return (
      <React.Fragment>
        <Navbar
          light
          expand="md"
          className="Navbar mt-0 fixed-top"
          style={outStyle}
        >
          <div className="container">
            <NavbarToggler expand="sm" onClick={this.toggleNav}>
              <i style={{ color: "#f26d64" }} className="fas fa-bars"></i>
            </NavbarToggler>

            <Collapse isOpen={this.state.navOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Linker
                    to="homeDestination"
                    style={{ textDecoration: "none" }}
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      id="hehe"
                      style={outStyle}
                      data-aos="fade-left"
                      className="nav-link"
                    >
                      Home
                    </span>
                  </Linker>
                </NavItem>
                <NavItem>
                  <Linker to="aboutDestination" smooth={true} duration={1000}>
                    <span
                      className="nav-link"
                      id="hehe"
                      style={outStyle}
                      data-aos="fade-left"
                      data-aos-delay="250"
                    >
                      About Me
                    </span>
                  </Linker>
                </NavItem>{" "}
                <NavItem>
                  <Linker
                    to="portfolioDestination"
                    smooth={true}
                    duration={1000}
                  >
                    <span
                      className="nav-link"
                      id="hehe"
                      style={outStyle}
                      data-aos="fade-up"
                      data-aos-delay="1000"
                    >
                      Portfolio
                    </span>
                  </Linker>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link"
                    data-aos="fade-left"
                    data-aos-delay="500"
                    style={outStyle}
                    target="_blank"
                    href="http://www.github.com/hassanfouaad"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link"
                    data-aos="fade-left"
                    data-aos-delay="750"
                    style={outStyle}
                    target="_blank"
                    href="https://www.linkedin.com/in/hassan-fouad-76a417159/"
                  >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </a>
                </NavItem>
                <NavItem onMouseOver={this.toggleCv}>
                  <a
                    className="nav-link"
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    style={outStyle}
                    to="https://drive.google.com/file/d/19JJrcZ0s79ySCpsQu-KoNuUqacBysOJ-/view?usp=sharing"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                  >
                    <span className="fas fa-file-pdf fa-2x"></span>

                    {this.state.isHovering && (
                      <a
                        style={{ color: "#d5674e", textDecoration: "none" }}
                        target="_blank"
                        href="https://drive.google.com/file/d/1OOC1rAigsZRbP7iiJEdRoUpZ6R65yn9Z/view?usp=sharing"
                      >
                        VIEW MY RESUME
                      </a>
                    )}
                  </a>
                </NavItem>
                <NavItem></NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
