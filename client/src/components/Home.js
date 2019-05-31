import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

 const Home = () =>(
   <Container>
    <Div>
      <StyledP>Hi there! Welcome to my website. </StyledP>
      <StyledP>My Name is Kritika. </StyledP>
      <StyledP>I am a Full Stack Web Developer from Salt Lake City.</StyledP>
      <StyledP><Link to="/main">Come On In -></Link></StyledP>
    </Div>
    </Container>
)

const StyledP = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8vw;
  font-weight: bold;
  margin: 3vh 10vw;
`

const Div = styled.div`
  top: 35vh;
  left: 24vw;
  position: fixed;
  width: 50vw;
  height: 50vh;
  text-align: center;
  margin: 5vh auto;
`
const Container = styled.div`
width: 100vw;
height: 92vh;
background: url(${process.env.PUBLIC_URL + '/home.jpg'}) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: 100vw 100vh;
`

export default Home