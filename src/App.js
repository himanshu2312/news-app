import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar NavbarTitle="NewsTechs" />
          
          <Routes>
            <Route exact path="/" element={<News key="home" pageSize="10" category="home" country="in" />}/>
            <Route exact path="/science" element={<News key="si"   pageSize="10" category="science" country="in" />}/>
            <Route exact path="/technology" element={<News key="tech" pageSize="10" category="technology" country="in" />}/>
            <Route exact path="/sports" element={<News key="spo"  pageSize="10" category="sports" country="in" />}/>
            <Route exact path="/health" element={<News key="he"   pageSize="10" category="health" country="in" />}/>
            <Route exact path="/business" element={<News key="bu"   pageSize="10" category="business" country="in" />}/>
            <Route exact path="/entertainment" element={<News key="en"   pageSize="10" category="entertainment" country="in" />}/>
            <Route exact path="/general" element={<News key="ge"   pageSize="10" category="general" country="in" />}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
