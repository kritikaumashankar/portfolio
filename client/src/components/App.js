import React,{Component} from 'react'
import Footer from './Footer'
import  '../App.css'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
import NavBar from './NavBar';
import styled from 'styled-components'


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Home id="Home"/>
        <About id="About"/>
        <Projects id="Projects"/>
        <Contact id="Contact"/>
      </>
    )
  }
}

export default App