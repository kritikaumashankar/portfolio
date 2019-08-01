import React, {Component} from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import LazyHero from 'react-lazy-hero';
import {Jumbotron,Button} from 'reactstrap'
import {Link} from 'react-scroll'

 class Home extends Component{
   render(){
     return(
      <Container id={this.props.id}>
        <StyledJumbotron>
          <StyledLazyHero imageSrc={process.env.PUBLIC_URL+'/Hero.jpg'}>
            <Div>
              <Typist>
                <StyledP>Hi there! I am Kritika. </StyledP>
                <Typist.Delay ms={100} />
                <StyledP>Software Developer living in Salt Lake City. </StyledP>
              </Typist>
              <Link to="About"><AnimatedButton variant="outline-primary"><h1>Get to know me</h1></AnimatedButton></Link>
            </Div>
          </StyledLazyHero>
        </StyledJumbotron>
        </Container>
     )
   }
 }

 const Container = styled.div`
    height: 100vh;
    margin: auto;
`
 const AnimatedButton = styled(Button)`
  font-family: 'Open Sans', sans-serif! important;
  background-color: #FF0054;
  animation: hide-animation 7s;
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
      h1{
        font-size:4.5vw;
      }
    }
  @media(min-width:500px){
    position: relative;
      top: -3vh;
      h1{
        font-size:2.5vw;
      }
    }
  @media(min-width:700px){
    position: relative;
    top: -2vh;
    h1{
      font-size:4vw;
    }
  }
  @media(min-width:992px){
    position: relative;
    top: -1vh;
    h1{
      font-size: 4vw;
    }
  }
  @media(min-width:1200px){
    position: relative;
    top: -1vh;
    h1{
      font-size:2.25vw;
    }
  }
 `

const StyledLazyHero = styled(LazyHero)`
  min-height: 100vh;
  .cYNVMb{
    background-color: transparent! important;
  }

`
const Div = styled.div`
  position: relative;
  .Cursor{
    color: transparent;
  }
  @media(max-width:500px){
    left: -3vh;
    width: 55%;
    top: 3vh;
  }
  @media(min-width:500px){
    left: -10vh;
    width: 67%;
    top: 2vh;
  }
  @media(min-width:700px){
    left: -4vh;
    width: 50%;
    top: 2vh;
  }
  @media(min-width:992px){
    left: -4vh;
    width: 55%;
    top: 2vh;
  }
  @media(min-width:1200px){
    left: -12vh;
    width: 65%;
    top: 2vh;
  }
`
const StyledJumbotron = styled(Jumbotron)`
  padding: 0;
  height: 100%;
  margin: 0;
`

const StyledP = styled.p`
  font-family: 'Open Sans', sans-serif;  
  font-weight: bold;
  margin: 3vh 10vw;
  color: white;
  @media(max-width:500px){
    margin: 1rem;
    font-size: 4.5vw;
    width: 100%; 
  }
  @media(min-width:500px){
    margin: 1rem;
    font-size: 3vw;
    width: 93%;
  }
  @media(min-width:700px){
    margin: 1rem;
    font-size: 4vw;
    width: 100%;
  }
  @media(min-width:992px){
    margin: 1rem;
    font-size: 4vw;
    width: 100%;
  }
  @media(min-width:1200px){
    width: 90%;
    font-size: 2.25vw;
    margin: 1rem;

  }
`


export default Home 