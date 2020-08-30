import React, { Component } from "react";
import { Container, Button, Link } from "react-floating-action-button";
import { lightColors } from "react-floating-action-button";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Link
          icon="fas fa-phone fa-2x"
          rotate={true}
          styles={{
            backgroundColor: "#f26d64",
            color: lightColors.white,
          }}
          href="tel:+1202021670"
        ></Link>
        <Link
          href="mailto:mrhassanfouad1@gmail.com"
          icon="fas fa-envelope fa-2x"
          rotate={true}
          styles={{
            backgroundColor: "#f26d64",
            color: lightColors.white,
          }}
        ></Link>

        <Button
          icon="fas fa-address-book fa-2x"
          rotate={true}
          styles={{
            backgroundColor: "#f26d64",
            color: "white",
          }}
        ></Button>
      </Container>
    );
  }
}
