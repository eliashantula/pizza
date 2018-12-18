import React from "react";
import pizzaIcon from "./pizzaicon.png";
import { Navbar, Nav } from "react-bootstrap";

const Navs = () => {
	return (
		<Navbar className="sticky-top">
			<Navbar.Header>
				<Navbar.Brand className="navbar-brand">
					 
					<a href="#" style={{ fontSize: "1em", color: "black"}}>
						<img src={pizzaIcon} style={{ height: "45px", paddingRight: "150px"}} />
					</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Text>
			
				<a href="#menu" style={{color: "black", fontSize: "2em"}}>Menu</a>
			</Navbar.Text>
		</Navbar>
	);
};

export default Navs;
