import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar NavbarTitle="NewsTechs"/>
        <News/>
      </div>
    )
  }
}
