import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ArrowIcon from "material-ui/svg-icons/hardware/keyboard-arrow-down";
import ReactTypingEffect from "react-typing-effect";
import me3 from "../../images/me3.png";
import "./header.css";
const scrollTo = require("scroll-to");
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      scrollTo: props.height,
    };
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight + "px",
      scrollTo: window.innerHeight,
    });
  }

  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onScrollToIntro() {
    scrollTo(0, this.state.scrollTo, {
      ease: "out-bounce",
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="header-wrapper" style={{ height: this.state.height }}>
        <div className="header">
          <img src={me3} className="img-fluid" />
          <h3>
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
              id="heyaya"
            />
          </h3>
        </div>
        <div className="scroll-down-btn">
          <FloatingActionButton
            mini={true}
            backgroundColor="#F26D64"
            onClick={this.onScrollToIntro.bind(this)}
          >
            <ArrowIcon />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
