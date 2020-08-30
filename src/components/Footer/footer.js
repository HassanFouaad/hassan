import React, { Component } from "react";
import "./footer.css";
import FlatButton from "material-ui/FlatButton";
const scrollTo = require("scroll-to");

class FooterComponent extends Component {
  onScrollToTop() {
    scrollTo(0, 0, {
      ease: "out-bounce",
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a
            target="_blank"
            href="https://github.com/hassanfouaad"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            &nbsp;GitHub
          </a>
          /
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hassan-fouad-76a417159/"
          >
            <i className="fab fa-linkedin"></i>
            &nbsp;Linked In
          </a>
          /
          <a
            target="_blank"
            href="https://www.facebook.com/foqsh"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
            &nbsp;Facebook
          </a>
          /<br></br>
          <a
            target="_blank"
            href="mailto:mrhassanfouad1@gmail.com"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
            &nbsp;Mail
          </a>
        </div>
        <FlatButton
          labelStyle={{
            color: "white",
            background:"#F26D64"
          }}
          label="Back to top"
          onClick={this.onScrollToTop}
        />

        <div id="copyRights">
          {" "}
          <div>
            <p>Designed and Developed by HassanFouad</p>
          </div>
          <div> Copyrights &copy; {new Date().getFullYear()} Rights Reserved</div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
