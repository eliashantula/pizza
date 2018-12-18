import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import oven from './oven.jpg'

const Intro = (props) => {
  return (
    <div>
      <Jumbotron  style={{backgroundImage: `url(${oven})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

        <Container fluid>
          <h2 className="display-3">Welcome to Pizza Paradise!</h2>
          <p className="lead">Authentic Wood Fired Oven Pizzas!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Intro;