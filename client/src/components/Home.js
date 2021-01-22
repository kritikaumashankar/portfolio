import React, {Component} from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import {Button} from 'reactstrap'
import {Link} from 'react-scroll'

 class Home extends Component{
   render(){
     return(
      <Container id={this.props.id}>
            <Div>
              <Typist>
                <StyledP>Hi there! I am Kritika. </StyledP>
                <Typist.Delay ms={100} />
                <StyledP>Software Developer <br/> Salt Lake City, UT. </StyledP>
              </Typist>
              <AnimatedButton variant="outline-primary"><Link to="About">Get to know me</Link></AnimatedButton>
            </Div>
        </Container>
     )
   }
 }

 const Container = styled.div`
    height: 100vh;
    margin: auto;
    background-image: url(Hero.jpg);
    background-position: center;
    background-size:cover;
`
 const AnimatedButton = styled(Button)`
  font-family: 'Open Sans', sans-serif! important;
  background-color: #FF0054;
  animation: hide-animation 7s;
  width:50%;
  align-self: center;
  @keyframes hide-animation {
    0% {
      opacity: 0;
      visibility: hidden;
    }

    50% {
      opacity: 0;
      visibility: hidden;
    }

    100% {
      visibility: visible;
    }
  
  }
  @media(max-width:500px){
    position: relative;
      top: -4vh;
      left: 5vw;
      
    }
  @media(min-width:500px){
    position: relative;
      top: -3vh;

    }
  @media(min-width:700px){
    position: relative;
    top: -4vh;
   
  }

  @media(min-width:1200px){
    position: relative;
    top: -8vh;
  }
 `

const Div = styled.div`
  position: relative;
  .Cursor{
    color: transparent;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width:500px){
    left: -12vw;
    width: 80%;
    top: 35vh;
    font-size: 2.35vh;
  }
  @media(min-width:500px){
    left: 1vw;
    width: 60%;
    top: 35vh;
    font-size: 2.5vh;
  }

  @media(min-width:800px){
    left: 7vw;
    width: 50%;
    top: 35vh;
    font-size: 2.25vw;
  }

  @media(min-width:1000px){
    left: 0vw;
    width: 62%;
    top: 37vh;
    font-size: 2.75vw;
  }
  
  @media(min-width:1200px){
    left: 10vw;
    width: 45%;
    top: 34vh;
    font-size: 2.25vw;
  }
`


const StyledP = styled.p`
  font-family: 'Open Sans', sans-serif;  
  font-weight: bold;
  margin: 3vh 10vw;
  color: white;
  text-align: center;
  
`


export default Home 