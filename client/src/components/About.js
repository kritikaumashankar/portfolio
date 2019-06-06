import React from 'react'
import styled from 'styled-components'

 const About = () =>(
  <Div>
    <h1 className="display-3" style={{fontSize:'2.75vw',fontWeight: 'bold'}}>A Little About Me..</h1>
    <p style={{fontSize:'1vw',}}>I am originally from South India. I did my Electrical Engineering from Anna University, Chennai, TamilNadu, India.</p>
    <p style={{fontSize:'1vw',}}>I have 3.5 years of IT experience working for Infosys Ltd., Chennai. 
      After joining Infosys, I underwent 6 months of training in Java. I worked in a couple of Java projects mainly in financial domain.
    </p>
    <p style={{fontSize:'1vw',}}>
      I try to learn about everything I come across as much as possible. I enjoy working on complex functionality which 
      motivates me further to build it beautifully.
    </p>
    <p style={{fontSize:'1vw',}}> Apart from coding, I love dancing, travelling, exploring different cuisines and spending time with family and friends. 
      I have performed in many cultural events in California as well as Utah.
    </p>
  </Div>
)
const Div = styled.div`
  margin-left: 3vw;
  height: 50vh;
  top: 10vh;
  padding: 3%;
  font-family: 'Montserrat', sans-serif;
`

export default About