import React, { Component } from "react";
import "./agile-quote.css";

class AgileQuoteComponent extends Component {
  render() {
    return (
      <div className="agile-quote">
        <p className="headline" style={{ color: "#f26d64"  , textTransform:"capitalize"}}>
          Me?
        </p>
        <p className="quote">
          <span className="quote-marks">&ldquo;</span>
          <span className="quote-content">
            I'm MERN-Stack Developer Always seeking for extending my development
            knowledge, <br></br>I code in React Javascript based framework,
            Supporting that by Node JS Back-End runtime, Build REST API by
            Express JS, <br></br>
            Then Back it up by MongoDB
          </span>
          <span className="quote-author">-Hassan Fouad</span>
        </p>
      </div>
    );
  }
}

export default AgileQuoteComponent;
