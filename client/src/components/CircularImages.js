import React from 'react';
import styled,{ keyframes } from 'styled-components';

const frontEndImages =[
  {src:process.env.PUBLIC_URL+'/frontEnd/html.png', alt:'HTML',y:20,sdeg:0,fdeg:360},
  {src:process.env.PUBLIC_URL+'/frontEnd/css.png', alt:'CSS',y:20,sdeg:72,fdeg:432},
  {src:process.env.PUBLIC_URL+'/frontEnd/js.png', alt:'JS',y:20,sdeg:144,fdeg:504},
  {src:process.env.PUBLIC_URL+'/frontEnd/react.png', alt:'REACT',y:20,sdeg:216,fdeg:576},
  {src:process.env.PUBLIC_URL+'/frontEnd/bootstrap.png', alt:'BOOTSTRAP',y:20,sdeg:288,fdeg:648},
]
const backEndImages =[
  {src:process.env.PUBLIC_URL+'/backEnd/java.png', alt:'JAVA',y:13.5,sdeg:360,fdeg:0},
  {src:process.env.PUBLIC_URL+'/backEnd/ruby.jpeg', alt:'RUBY',y:13.5,sdeg:432,fdeg:72},
  {src:process.env.PUBLIC_URL+'/backEnd/rails.png', alt:'RAILS',y:13.5,sdeg:504,fdeg:144},
  {src:process.env.PUBLIC_URL+'/backEnd/express.jpeg', alt:'EXPRESS',y:13.5,sdeg:576,fdeg:216},
  {src:process.env.PUBLIC_URL+'/backEnd/spring.png', alt:'SPRING',y:13.5,sdeg:648,fdeg:288},

]
const databaseImages =[
  {src:process.env.PUBLIC_URL+'/dataBase/sql.jpeg', alt:'SQL',y:7,sdeg:0,fdeg:360},
  {src:process.env.PUBLIC_URL+'/dataBase/oracle.png', alt:'ORACLE',y:7,sdeg:72,fdeg:432},
  {src:process.env.PUBLIC_URL+'/dataBase/postgres.jpeg', alt:'POSTGRESQL',y:7,sdeg:144,fdeg:504},
  {src:process.env.PUBLIC_URL+'/dataBase/mongo.png', alt:'MONGODB',y:7,sdeg:216,fdeg:576},
  
]
const CircularImages =({skill})=>{
  let images=[];
  let skillForPhone = "";
  let skills = ""; 
  if(skill === "front"){
     images = frontEndImages;
     skills = "FRONT-END";
     skillForPhone="FE";
  }else if(skill === "back"){
     images = backEndImages;
     skills = "BACK-END";
     skillForPhone="BE";
  }else{
     images = databaseImages;
     skills = "DB";
     skillForPhone="DB";
  }
  return(
      <ImageDiv>
        <Span><H3 skills={skills} skillForPhone={skillForPhone}></H3> </Span>
      {images.map((im,index)=>
        <Img key={index} y={im.y} sdeg={im.sdeg} fdeg={im.fdeg} src={im.src} alt={im.alt} title={im.alt}/>
      )}
      </ImageDiv>
  )
}

const H3 = styled.h3`
@media screen and (max-width:700px){
  &::before{
    content: "${props=> props.skillForPhone}";
  }
  width: 35vw;
  height: 5vh;
  position: inherit;
  left:-15vw;
  padding: 0.5rem;
  font-size:1rem;
  font-style: italic;
  font-weight: 900;
  border-radius: 30%;
}
  @media screen and (min-width:700px){
    &::before{
      content: "${props=> props.skills}";
    }
    width: 50%;
    height: 15%;
    padding: 0.5rem;
    font-size:1.6rem;
    font-style: italic;
    font-weight: 900;
    border-radius: 30%;
  }
  @media screen and (min-width:1100px){
    &::before{
      content: "${props => props.skills}";
    }
    width: 45%;
    height: 10%;
    padding: 0.5rem;
    font-size:1.6rem;
    font-style: italic;
    font-weight: 900;
    border-radius: 30%;
  }
`
const Span = styled.span`
@media screen and (max-width:700px){
  position: relative;
  top: 20vh;
  left: 30vw;
}
@media screen and (min-width:700px){
  position: relative;
  top: 15rem;
  left: 12rem;
}
  @media screen and (min-width:1000px){
    position: relative;
    top: 15rem;
    left: 12rem;
  }
  @media screen and (min-width:1100px){
    position: relative;
    top: 5rem;
    left: 5rem;
    
  }
`

const keyframesForImage1 =(y,sdeg,fdeg)=> keyframes`

  0% {
    transform: rotate(${sdeg}deg) translate(${y}vw) rotate(${-1*(sdeg)}deg);
  }

  100% {
    transform: rotate(${fdeg}deg) translate(${y}vw) rotate(${-1*(fdeg)}deg);
  }

`
const Img=styled.img`
&:nth-child(2){
  animation: ${props => keyframesForImage1(props.y,props.sdeg,props.fdeg)} 25s infinite linear;
}  
&:nth-child(3){
  animation: ${props => keyframesForImage1(props.y,props.sdeg,props.fdeg)} 25s infinite linear;
}  
&:nth-child(4){
  animation: ${props => keyframesForImage1(props.y,props.sdeg,props.fdeg)} 25s infinite linear;
}  
&:nth-child(5){
  animation: ${props => keyframesForImage1(props.y,props.sdeg,props.fdeg)} 25s infinite linear;
}  
&:nth-child(6){
  animation: ${props => keyframesForImage1(props.y,props.sdeg,props.fdeg)} 25s infinite linear;
}  
&:nth-child(7){
  animation: ${props => keyframesForImage1(props.y,props.sdeg,props.fdeg)} 25s infinite linear;
}  
&:hover {
    width:8vw;
    height:auto;
    z-index: 9999;
  }
  border: 1px solid white;
  border-radius: 30%;
  @media screen and (max-width:700px){
    width:9vw;
    height:5vh;
    position: absolute;
    top: 75%; left: 50%;
    margin: calc( -5vh / 2 );
    &:nth-child(2){
      animation: ${props => keyframesForImage1((props.y ),props.sdeg,props.fdeg)} 25s infinite linear;
    }  
    &:nth-child(3){
      animation: ${props => keyframesForImage1((props.y ),props.sdeg,props.fdeg)} 25s infinite linear;
    }  
    &:nth-child(4){
      animation: ${props => keyframesForImage1((props.y ),props.sdeg,props.fdeg)} 25s infinite linear;
    }  
    &:nth-child(5){
      animation: ${props => keyframesForImage1((props.y ),props.sdeg,props.fdeg)} 25s infinite linear;
    }  
    &:nth-child(6){
      animation: ${props => keyframesForImage1((props.y ),props.sdeg,props.fdeg)} 25s infinite linear;
    }  
    &:nth-child(7){
      animation: ${props => keyframesForImage1((props.y ),props.sdeg,props.fdeg)} 25s infinite linear;
    }  
  }
  @media screen and (min-width:700px){
    width:6vw;
    height:6vh;
    position: absolute;
    top: 65%; left: 50%;
    margin: calc( -5vh / 2 );
  }
  @media screen and (min-width:1000px){
    width:6vw;
    height:6vh;
    position: absolute;
    top: 18vh; left: 50%;
    margin: calc( -5vh / 2 );
    
  }
  @media screen and (min-width:1100px){
    width:5vw;
    height:5vh;
    position: absolute;
    top: 50%; left: 50%;
    margin: calc( -5vh / 2 );
   
  }
`
const divAnimation = keyframes`
  from{
    display : none; 
  }
  
  to{
    display : block; 
  }
`
const ImageDiv = styled.div`
@media screen and (max-width:700px){
  width:45%;
  height:30vh;
  margin:0 1.5vw;
  position: relative;
  top:1rem;
  &:nth-child(1){
    top:10vh;
    left: 6vw;
  }
  &:nth-child(2){
    top:10vh;
    left: 8vw;
  }
  &:nth-child(3){
    top: -2vh;
    left: 26vw;
    width: 50%;
    span{
      top:10vh;
      left:36vw;
    }
  }
}
@media screen and (min-width:700px){
  width:100%;
  height:35vh;
  margin:0 1.5vw;
  position: relative;
  &:nth-child(1){
    top: 2vh;
    left: 0vw;
    span{
      top:18vh;
      left:14vw;
    }
  }
  &:nth-child(2){
    top: 6vh;
    left: -3vw;
    span{
      top:18vh;
      left:14vw;
    }
  }
  &:nth-child(3){
    top: 5vh;
    left: -3vw;
    span{
      top:18vh;
      left:20vw;
    }
  }
}
@media screen and (min-width:1000px){
  width:100%;
  height:35vh;
  margin:0 1.5vw;
  position: relative;
  
  &:nth-child(1){
    top: 0vh;
    left: 0vw;
    span{
      left:14vw;
    }
  }
  &:nth-child(2){
    top: 3vh;
    left: -3vw;
  }
  &:nth-child(3){
    top: -5vh;
    left: -3vw;
  }
}
@media screen and (min-width:1100px){
  
  position: relative;
  top:-1vh;
  &:nth-child(1){
    width:65vw;
    height:75vh;
    margin:0 1vw;
    top: 5vh;
    left: 0vw;
    border:1px solid white;
    border-radius: 50%;
    animation: ${divAnimation} 5s infinte linear;
    span{
      position: relative;
      top: 1rem;
      left: 15rem;
    }
  }
  &:nth-child(2){
    width:35vw;
    height:55vh;
    margin:0 1vw;
    top: -60vh;
    left: 7vw;
    border:1px solid white;
    border-radius: 50%;
    animation: ${divAnimation} 10s infinte linear;
    span{
      position: relative;
      top: 2rem;
      left: 10.5rem;
    }
  }
  &:nth-child(3){
    width:15vw;
    height:25vh;
    margin:0 1vw;
    top: -100vh;
    left:17vw;
    border:1px solid white;
    border-radius: 50%;
    animation: ${divAnimation} 15s infinte linear;
    span{
      position: relative;
      top: 5rem;
      left: 5rem;
    }
  }
  
}

`
export default CircularImages;