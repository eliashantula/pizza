import React from "react";
import { Jumbotron, Container } from "reactstrap";
import oven from "./oven.jpg";
import fire from "./fire.jpg";

const Intro = props => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${fire})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "0px",
          padding: "0px",
          boxShadow: "0px -8px 0 rgba(0,0,0,0.1)"
        }}
      >
        <Container fluid>
          <h2 className="display-3">Welcome to Pizza Paradise!</h2>
          <p className="lead" style={{ color: "white", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
            Authentic Wood Fired Oven Pizzas!
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Intro;
