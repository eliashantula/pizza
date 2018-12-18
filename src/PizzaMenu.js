import React, { Component } from "react";
import PizzaInfo from "./PizzaInfo";
import { Container, Row, Col } from "reactstrap";

const Pizza = ({ pizzas }) => {
	console.log(pizzas);
	return pizzas.map(pizza => {
		return (
			<Col sm="12" style={{ margin: "10px" }}>
				<div className="pizzaItem">
					<h4 className="title" style={{ paddingBottom: "0px" }}>
						{pizza.name}
					</h4>
					<img src={pizza.image} className="rounded img" />{" "}
					<h5 className="price" style={{ paddingTop: "5px", fontSize: "30px" }}>
						${pizza.price}
					</h5>
					<h6 className="calories" style={{fontSize:"15px"}}>{pizza.calories}</h6>
				</div>
			</Col>
		);
	});
};

class PizzaMenu extends Component {
	render() {
		const { pizzas } = this.props;
		return (
			<section id="menu">
				<Container>
					<Row>
						<Pizza pizzas={pizzas} />
					</Row>
				</Container>
			</section>
		);
	}
}

export default PizzaMenu;
