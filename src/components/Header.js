import React, { Component } from "react";
/* import { Link } from "react-router-dom"; */
import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
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
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
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

  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md" className="Navbar mt-0 fixed-top">
          <div className="container">
            <NavbarBrand name className="mr-auto"></NavbarBrand>
            <NavbarToggler expand="sm" onClick={this.toggleNav}>
              <i className="fa fa-bars" style={{ color: "#d5674e" }}></i>
            </NavbarToggler>
            <Collapse isOpen={this.state.cvOpen} cv>
              <div cv> HEEEEEEEEEEEEEEY</div>
            </Collapse>

            <Collapse isOpen={this.state.navOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink href="/" id="hehe">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about" id="hehe">
                    AboutMe
                  </NavLink>
                </NavItem>
                <NavItem onMouseOver={this.toggleCv}>
                  <NavLink
                    to="https://drive.google.com/file/d/19JJrcZ0s79ySCpsQu-KoNuUqacBysOJ-/view?usp=sharing"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                  >
                    <span className="fa fa-file-pdf-o fa-1x"></span>

                    {this.state.isHovering && (
                      <a
                        style={{ color: "#d5674e", textDecoration: "none" }}
                        target="_blank"
                        href="https://drive.google.com/file/d/19JJrcZ0s79ySCpsQu-KoNuUqacBysOJ-/view?usp=sharing"
                      >
                        {"  "}View My Resume
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
