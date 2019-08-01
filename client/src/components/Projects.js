import React from 'react';
import styled from 'styled-components';
import { 
  Card,
  CardBody,
  Button,
  CardText,
  CardHeader,
} from 'reactstrap';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experience from './Experience';

 class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = { projectList: [] };
    }

  componentDidMount(){
    const base_url = "https://api.github.com/users/kritikaumashankar/repos"
    axios.get(base_url)
           .then(response => {
            this.setState({projectList: response.data
           .filter(i=> ["Blackjack","KS-Billboard","Magic8Ball","FlashCards","Portfolio"].includes(i["name"]))
                          });
      });

  }

  displaySlides=() =>{
     return this.state.projectList.sort((a,b)=>(a.id - b.id)).map((item,i)=>{
      return(
            <StyledCard key="front">
            <CardHeader><strong>{item["name"]}</strong></CardHeader>
              <StyledCardBody>
              <CardText><strong>{item["description"]}</strong></CardText>
              <A href={item["svn_url"]} key={0}><Button>GitHub</Button></A>
              </StyledCardBody>
            </StyledCard>
     )});
    
  }
  
  render(){
    const slides = this.displaySlides();
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
            slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]

    };
    return(
      <StyledContainer id={this.props.id}>
        <Div> 
          <Experience />
          <ProjectDiv>       
            <div id="project">These are some of my highlighted projects. For all of my projects, Visit my <a href="https://github.com/kritikaumashankar?tab=repositories"><strong>GitHub</strong></a> page</div>
          <StyledSlider {...settings}>
            {slides}
              <StyledCard key="front">
                <CardHeader><strong>Enterprise International</strong></CardHeader>
                <StyledCardBody>
                <CardText> <strong>
                    Final Portfolio project in bootcamp with a team of 5.
                    I designed and developed, Destination , Booking Confirmation, 
                    Contact Us and Register pages, CRUD actions for 
                    Destinations and Trips as Admin user. Technologies: Front-End: React,styled-components, Semantic; Back-End: Rails;
                    DB: PostgreSQL.</strong>
                  </CardText>
                  <A href="https://dps-enterprise-international.herokuapp.com/" key={0}><Button>Website</Button></A>
                </StyledCardBody>
              </StyledCard>
          </StyledSlider>
         </ProjectDiv>
        </Div>
        </StyledContainer>
        )
    }
 }

 const StyledContainer = styled.div`
 height: 100vh;
 background-image: url(${process.env.PUBLIC_URL+'/Project.jpg'});
   background-size: cover; 
   background-repeat: no-repeat;
   background-attachment: fixed;
 `
 const Div = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 background-color: rgba(25, 24, 26, 0.5);
 
 `
 const ProjectDiv = styled.div`
    width:100%;
    height:50%;
    position: relative;
    @media screen and (min-width:300px){
      div#project{
        color: white;
        text-align: center;
        font-size:2vh;
      }
      
    }
    @media screen and (min-width:700px){
      div#project{
        color: white;
        text-align: center;
        font-size:2rem;
      }
  
    }
    @media screen and (min-width:1100px){
      top:4vh;
      div#project{
        color: white;
        text-align: center;
        font-size:1.75vw;
      }
    }
 `
 const StyledSlider = styled(Slider)`
  .slick-dots button:before{
      color: white;
      opacity: 1;
      font-size:12px;
    }
    
    // &.slick-slider > .slick-prev{
    //   left: -7vw;
    // }
    
  @media screen and (min-width:300px){
    top: 2vh;
    left: 2rem;
    width:80%;
    
  }
  @media screen and (min-width:700px){
    top: 2vh;
    width:92%;
    &.slick-slider > .slick-prev{
      left: -3vw;
    }
    .slick-dots{
      bottom:-2vh;
    }
  }
  @media screen and (min-width:1100px){
    top: 2vh;
    left: 10rem;
    width:80%;
    .slick-dots{
      bottom:-30px;
    }
    &.slick-slider > .slick-prev{
      left: -7vw;
    }
  }
      
 `
 const StyledCard = styled(Card)`
   margin: auto;
   text-decoration: none;
   @media screen and (min-width:300px){
    width: 80vw!important;
    height: 38vh;
   }
   @media screen and (min-width:700px){
    width: 42vw!important;
    height: 35vh;
    .card-header{
      font-size:3vw;
      text-align:center;
    }
   }
   @media screen and (min-width:1100px){
    width: 35vw!important;
    height: 35vh;
    .card-header{
      font-size:2.5vw;
      text-align:center;
    }
   }
 `
 const A = styled.a`
   width: 100%;
   height: 100%;
   margin: 2% 3%;
 `
 const StyledCardBody = styled(CardBody)`
   
   width: 100%;
   padding: 0.5rem;  
   text-align: center;
   @media screen and (max-width:350px){
    height:100%;
     &:nth-child(1){
       span{
        font-size:1rem;
       }
     }
    span, p,button{
      font-size:3vw;
    }
  }
  @media screen and (min-width:350px){
    height:100%;
    span,p, button{
      font-size:0.7rem;
    }
  }
  @media screen and (min-width:700px){
    height:88%;
    span,p,button{
      font-size:2vw;
    }
  
  }
  @media screen and (min-width:1000px){
    height:92%;
    span,p,button{
      font-size:1.7vh;
    }
  }
  @media screen and (min-width:1100px){
    height:100%;
    span,p,button{
      font-size:1vw;
    }
  }
 `

 
export default Projects