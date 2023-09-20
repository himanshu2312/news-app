import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import AllRoutes from "./AllRoutes";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar NavbarTitle="NewsTechs" />
          <AllRoutes/>
        </Router>
      </div>
    );
  }
}
