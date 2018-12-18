import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PizzaMenu from "./PizzaMenu";
import pepperoni from "./pepperoni.jpg";
import hawaian from "./hawaian.jpg";
import mushroom from "./mushroom.jpg";
import veggie from "./veggie.jpg";
import cheese from "./Cheese.jpg";
import Intro from "./intro";
import Navs from "./Nav";
import white from "./white.jpg";
const pizzas = [
  {
    image: pepperoni,
    price: "5.00",
    name: "Pepperoni Pizza",
    calories: "229 calories per slice"
  },
  {
    image: veggie,
    price: "4.50",
    name: "Grilled Veggie Pizza",
    calories: "274 calories per slice"
  },
  {
    image: mushroom,
    price: 3.75,
    name: "Double-Mushroom Pizza",
    calories: "365 calories per slice"
  },
  {
    image: hawaian,
    name: "Hawaiian Pizza",
    price: 6.75,
    calories: "450 calories per slice"
  },
  {
    image: cheese,
    price: "2.50",
    name: "Cheese Pizza",
    calories: "100 calories per slice"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "white" }}>
        <Intro />
        <Navs />
        <div className="container">
          <div
            className="main"
            style={{
              backgroundImage: `url(${white})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "",
              borderRadius: "15px",
              padding: "20px",
              border: "1px solid black"
            }}
          >
            <section>
              {" "}
              <a href="menu"> </a>
              <PizzaMenu pizzas={pizzas} />
            </section>
          </div>
          <footer>
            <h2 />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
