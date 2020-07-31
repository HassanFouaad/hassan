import React, { Component } from "react";
import { Container, Button, Link } from "react-floating-action-button";
import { lightColors, darkColors } from "react-floating-action-button";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          <Link
            rotate={true}
            styles={{
              backgroundColor: "#d5674e",
              color: lightColors.white,
            }}
          >
            <a
              className="fa fa-phone fa-x"
              href="tel:+201202021670"
              style={{ color: "white", textDecoration: "none" }}
            ></a>
          </Link>
          <Link
            rotate={true}
            styles={{
              backgroundColor: "#d5674e",
              color: lightColors.white,
            }}
          >
            <a
              className="fa fa-envelope fa-1x"
              href="mailto:mrhassanfouad1@gmail.com"
              style={{ color: "white", textDecoration: "none" }}
            ></a>
          </Link>
          <Button
            icon="fa fa-address-book fa-2x"
            rotate={true}
            styles={{
              backgroundColor: "#d5674e",
              color: "white",
            }}
          ></Button>
        </Container>
      </div>
    );
  }
}
