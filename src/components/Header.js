import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Navbar,
} from "reactstrap";
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
      color: this.state.status === "top" ? "#d5674e" : "#d5674e",
      backgroundColor: this.state.status === "top" ? "" : "white",
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
              <i className="fas fa-bars" style={{ color: "#d5674e" }}></i>
            </NavbarToggler>

            <Collapse isOpen={this.state.navOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink href="/" id="hehe" style={outStyle}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about" id="hehe" style={outStyle}>
                    About Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={outStyle}
                    target="_blank"
                    href="http://www.github.com/hassanfouaad"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={outStyle}
                    target="_blank"
                    href="https://www.linkedin.com/in/hassan-fouad-76a417159/"
                  >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </NavLink>
                </NavItem>
                <NavItem onMouseOver={this.toggleCv}>
                  <NavLink
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
                        href="https://drive.google.com/file/d/19JJrcZ0s79ySCpsQu-KoNuUqacBysOJ-/view?usp=sharing"
                      >
                       &nbsp; VIEW MY RESUME
                      </a>
                    )}
                  </NavLink>
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
