import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import AllRoutes from "./AllRoutes";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    constructor(){
      super();
      this.state = {
        progress:0
      }
    }
    setProgress=(p)=>{
      this.setState({
        progress:p
      })
    }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
            />
          <Navbar NavbarTitle="NewsTechs" />
          <AllRoutes setProgress={this.setProgress}/>
        </Router>
      </div>
    );
  }
}
