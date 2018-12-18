import React, { Component } from "react";
import PizzaInfo from "./PizzaInfo";
import { Container, Row, Col } from "reactstrap";

const Pizza = ({ pizzas}) => {
	console.log(pizzas);
	 return (
		pizzas.map(pizza=>{ 
			return (
				<Col sm="6">
				<div className="pizzaItem">
			<img src={pizza.image} width="40%" className="rounded"/> <h4>{pizza.name}</h4><h5>${pizza.price}</h5><h6>{pizza.calories}</h6>
			</div>
		</Col>



				)
		})
		
	)
};

class PizzaMenu extends Component {
	render() {
		const { pizzas } = this.props;
		return (
			<Container>
				<Row>
					<Pizza pizzas={pizzas} />
				</Row>
			</Container>
		);
	}
}

export default PizzaMenu;
