import React from 'react'
import styled from 'styled-components'
import CircularImages from './CircularImages';

 const About = ({id}) =>(
  <Div id={id}>
    <ContentDiv >
      <IntroSection>
        <h2>About Kritika..</h2>
          <p>
            I am an aspiring Software Developer, based out of Salt Lake City, Utah, who is comfortable working in front-end(React, HTML, CSS, Javascript) or back-end(Java, Nodejs).
          </p>
          <p>
             I always knew I wanted to be Software Developer and learn more technologies. 
            After graduating, I worked at Infosys(Chennai, India) as Java Developer for 3.5 years where I was working in an enterprise web application.
            Last Fall, I graduated from  Univeristy Of Utah, Professional Education, Full Stack Web Development Program(DevPoint Labs) where I learnt React, Ruby, Rails and PostgreSQL.
            After the bootcamp, I started working a lot in React and building simple applications by integrating technologies like MongoDB, Springs, REST with it.</p>
          <p>Apart from coding, I am passionate about dancing and performed in some of the events in Salt Lake area. I also love to cook and travel.</p>
        </IntroSection>
      <SkillDiv>
        <CircularImages skill="front"/>
        <CircularImages skill="back"/>
        <CircularImages skill=""/>
      </SkillDiv>
    </ContentDiv>
  </Div>
)
const IntroSection = styled.aside`
  position: relative;
  color: white;
  text-align: center;
  @media screen and (max-width:350px){
    top:6vh;
    width:100%;
    height:58%;
    h2{
      font-size: 4vh;
    }
    p{
      font-size: 1.85vh;
      padding: 0;
    }
  }
  @media screen and (min-width:350px){
    top:3rem;
    width:100%;
    height:25%;
    h2{
      font-size:3vh;
    }
    p{
      font-size: 1.85vh;
      padding: 0;
    }
  }
  @media screen and (min-width:700px){
    top:6rem;
    width:65%;
    height:90%;
    p{
      font-size: 1.35rem;
      padding: 1rem;
    }
  }
  @media screen and (min-width:1000px){
    top:8rem;
    width:60%;
    height:100%;
    p{
      width: 100%;
      font-size: 1.85rem;
      padding: 1rem;
    }
  }
  @media screen and (min-width:1100px){
    top:5rem;
    width:100%;
    height:90%;
    h2{
      font-size:5vh;
    }
    p{
      width: 80%;
      left: 5vw;
      position: relative;
      font-size: 1.15rem;
      padding: 1rem;
    }
  }
`
const ContentDiv = styled.div`
  background-color:rgba(25, 24, 26, 0.7);
   color: white;
   height:100%;
   width:100%;
   @media screen and (max-width:650px){
    display: flex;
    flex-direction: column;
    }
   @media screen and (min-width:700px){
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width:1000px){
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width:1100px){
    display: flex;
    flex-direction: row-reverse;
  }
  
`

const SkillDiv = styled.div`
  position: relative;
  @media screen and (max-width:350px){
    top: -15vh;
    height:60%;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width:350px){
    top: 18vh;
    height:60%;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width:700px){
    top: 3rem;
    height:90%;
    width:50%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width:1000px){
    top: 6rem;
    height:100%;
    width:50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width:1100px){
    top: 5rem;
    height:90vh;
    width:50%;
    display: flex;
    flex-direction: row;
  }
`

const Div = styled.div`
  height: 100vh;
  background-color: rgba(243, 210, 80,0.2);
  background-image: url(${process.env.PUBLIC_URL+'/about.jpg'});
  background-size: cover; 
  background-repeat: no-repeat;
  background-attachment: fixed;

`

export default About