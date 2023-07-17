import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import './App.css'

export default class App extends Component {
  constructor(){
    super()

    this.state={
       pageSize:10
    }
  }
  render() {
    return (
      <div>
        <Navbar NavbarTitle="NewsTechs" />
        <News pages={this.state.pageSize}/>
      </div>
    )
  }
}
