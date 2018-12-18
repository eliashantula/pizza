import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PizzaMenu from "./PizzaMenu";
import pepperoni from "./pepperoni.jpg";
import hawaian from "./hawaian.jpg";
import mushroom from "./mushroom.jpg";
import veggie from "./veggie.jpg";
import cheese from "./Cheese.jpg";
import Intro from  "./intro"
import Nav from './Nav'
const pizzas = [
  {
    image: pepperoni ,
    price: 5.0,
    name: "Pepperoni Pizza",
    calories: "229 calories per slice"
  },
  {
    image: veggie,
    price: 4.50,
    name: "Grilled Veggie Pizza",
    calories: "274 calories per slice"
  },
  {
    image: mushroom ,
    price: 3.75,
    name: "Double-Mushroom Pizza",
    calories: "365 calories per slice"
  },
  {
    image: hawaian ,
    name: "Hawaiian Pizza",
    price: 6.75,
    calories: "450 calories per slice"
  },{
  image: cheese,
  price: 2.50,
  name: "Cheese Pizza",
  calories: "100 calories per slice"
}
];

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "red"}}>
      <Intro/>
      <Nav/>
        <div className="container">
        
          
          
          <div className="main" style={{backgroundColor: "black", borderRadius: "15px", padding: "20px"}}>
            <PizzaMenu pizzas = {pizzas}/>
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
