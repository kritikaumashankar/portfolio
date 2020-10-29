import React from 'react'
import {  Button, Form, FormGroup,Container, Input,Row,Col } from 'reactstrap'
import axios from 'axios'
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components'
import Footer from './Footer';

class Contact extends React.Component{
  state = { name:'', email: '', subject: '', message: '' }

  handleChange =(e) => {
    this.setState( { [e.target.id]: e.target.value } )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    axios.post('/api/form', 
    {
        name: name,   
        email: email,  
        subject: subject,
        message: message
    }
    ).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
        this.setState({ name:'', email: '', subject: '', message: '' })
    })
  }
  render(){
    const { name, email, subject, message } = this.state
    return(
      <MainContainer id={this.props.id}>
      <StyledLazyHero imageSrc={process.env.PUBLIC_URL+'/Hero.jpg'}>
          <ContentDiv>
            <LogoDiv>
              <Span id="contact"><h5>You can get in touch <br/>with me via</h5></Span>
              <Container>
              <Row>
                <Col>
                    <LinkDiv><a target="blank" href="https://www.facebook.com/kritikaumashankar" style={styles.aflex}><h5>Facebook </h5><I style={styles.svg} className="fab fa-facebook"></I></a> </LinkDiv>
                </Col>
                 <Col>
                    <LinkDiv><a target="blank" href="https://www.linkedin.com/in/kritikaumashankar/" style={styles.aflex}><h5>LinkedIn</h5><I style={styles.svg} className="fab fa-linkedin"></I></a> </LinkDiv> 
                </Col>
              </Row>
              <Row>
                <Col>
                    <LinkDiv><a target="blank" href="https://hangouts.google.com/call/QUKZbaNCNgqkV-FfOqWeAEEE" style={styles.aflex}><h5>Hangout</h5><I style={styles.svg} className="fab fa-google"></I></a></LinkDiv>
                </Col>
                 <Col>
                    <LinkDiv><a target="blank" href="https://www.instagram.com/kritikashiv/" style={styles.aflex}><h5>Instagram</h5><I style={styles.svg} className="fab fa-instagram"></I></a></LinkDiv>
                </Col>
              </Row>
              </Container>
              <br/>
            </LogoDiv>
            <Span>(Or)</Span>
            <StyledForm onSubmit={this.handleSubmit}>
              <span>Shoot me a message.</span>
              <FormGroup style={{width: '85%'}}>
                  <Input 
                    type="text" 
                    required
                    name="name" 
                    id="name" 
                    value={name} 
                    placeholder="Full Name" 
                    onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup style={{width: '85%'}}>
                  <Input 
                    type="email" 
                    required
                    name="email" 
                    id="email" 
                    value={email} 
                    placeholder="Email" 
                    onChange={this.handleChange}
                    />
              </FormGroup>
              <FormGroup style={{width: '85%'}}>
                  <Input 
                    type="text" 
                    name="subject"
                    required 
                    id="subject" 
                    value={subject} 
                    placeholder="Subject" 
                    onChange={this.handleChange}
                    />
              </FormGroup>
              <FormGroup style={{width: '85%'}}>
                  <textarea 
                    id="message" 
                    required
                    value={message} 
                    style={{width:'100%',height:'150%'}}
                    placeholder="Enter your message.." 
                    onChange={this.handleChange}
                    />
              </FormGroup>
                  <Button style={styles.button} className="text-center">Submit</Button>
            </StyledForm>
          </ContentDiv>
          </StyledLazyHero>
          {/* <Footer/> */}
      </MainContainer>
    )
  }
}
const MainContainer = styled.div`
  height: 100vh;
`
const Span = styled.span`
  font-size: 3rem;
    margin: 2.5rem;
    color: white;
`
const StyledLazyHero = styled(LazyHero)`
  min-height: 100vh;
  .cYNVMb{
    background-color: transparent! important;
  }

`
const ContentDiv = styled.div`

  display: flex;
  @media only screen and (max-width:1030px){
      height: 100vh;
      background-color: rgba(25, 24, 26, 0.7);
      flex-direction: column;
      position: relative;
      text-align: center;
      width:100vw;
      span{
        margin:1rem! important;
        width:100%;
        position:inherit;
        top:2vh;
        left:-1rem;
        font-size:1.5rem;
      }
      div:nth-child(1){
        position:relative;
        height:30vh;
        width:100%;
        text-align:center;
        top: 1vh;
        left:0;
        .row{
          top:0;
          left:0;
          width:100%;
          height:50%;
        }
        .col{
          top:0;
          left:0;
          width:100%;
          height:50%;
          a{
            margin:0.5vh 0; 
          }
        }
        #contact{
          top:1rem;
          h5{
            font-size: 1.65rem! important;
          }
        }
        a svg{
          width: 1.5rem! important;
          height: 1.5rem! important;
          margin: 0.25rem! important;
        }
      }
      form{
        width: 100%;
        height: 45%;
        top: 0;
        left: 2rem;
        span{
          position: inherit;
          top: -0.5rem;
          left: -1.5rem;
          font-size: 1.5rem;
          margin: 1rem;
          color: white;
        }
        font-size: 0.75rem! important;
        div{
          input{  
            height: 100%;
            font-size: 0.75rem! important;
          }
          #body{
            height:15%;
          }
          height: 15%;
        }
        button{
          width:50%! important;
          height: 15%! important;
          left: -2rem;
          top: 1rem! important;
          font-size: 1rem! important;
        }
      }
    }
    @media only screen and (max-width:1030px) and (min-height:1000px) and (max-height:1400px){
      position:relative;
      height: 100vh;
      width:100vw;
      background-color: rgba(25, 24, 26, 0.7);
      flex-direction: column;
      text-align: center;
      span{
        position:inherit;
        top:5.5rem;
        margin:0.5rem;
        font-size:3rem;
      }
      div:nth-child(1){
        position:relative;
        height:25vh;
        width:100%;
        text-align:center;
        top: 3rem;
        left:0;
        .row{
          top:0;
          left:-13rem;
          width:100%;
          height:50%;
        }
        .col{
          top:-7rem;
          left:8rem;
          width:100%;
          height:50%;
          a{
            margin:0.5vh 0; 
          }
        }
        #contact{
          top:0;
          width:100%;
          height:50%;
          left:0;
           text-align: center;
           color: white;
           h5{
           font-size: 3rem! important;
           }
         }
        a svg{
          width: 3rem! important;
          height: 3rem! important;
          margin:0 0.75vw! important;
        }
      }
      form{
        width: 100%;
        height: 43%;
        top: 7.5rem;
        left: 5rem;
        font-size: 1.5rem! important;
        span{
          position: inherit;
          top: -3rem;
          left: -4rem;
          font-size: 3rem;
          margin: 2rem;
          color: white;
        }
        div{
          input{  
            height: 100%;
            font-size: 1.5rem! important;
          }
          #body{
            height:15%;
          }
          height: 15%;
        }
        button{
          height: 25%;
          left: -5rem;
          top: 4rem! important;
          font-size: 2rem! important;
        }
      }
    }
  @media only screen and (min-width:1030px){
    position:relative;
    width:100vw;
    height: 100vh;
      background-color: rgba(25, 24, 26, 0.5);
      flex-direction: row;
      text-align: center;
      div:nth-child(1){
        height: 40%;
        width: 37.5%;
        text-align: center;
        position: relative;
        top: 30vh;
        left: 14rem;
        .row{
          top:0rem;
          left:0rem;
          width:100%;
          height:50%;
        }
        .col{
          top:0rem;
          left:-15rem;
          width:100%;
          height:50%;
        }
         #contact{
           top:0;
           left:0;
          text-align: center;
          color: white;
          h5{
          font-size: 2.5rem! important;
          }
        }
      }
      span{
        position: inherit;
        height: 11%;
        top: 20rem;
        left: 12vw;
      }
      form{
        width: 45%;
        height: 75%;
        top: 10rem;
        left: 10vw;
        font-size: 1.5rem! important;
        span{
          position: inherit;
          top: -3rem;
          left: -4rem;
          font-size: 2.5rem;
          margin: 3rem;
          color: white;
        }
        div{
          input{  
            height: 100%;
            font-size: 1.5rem! important;
          }
          width: 88%;
          height: 10%;
        }
        button{
          height: 10%;
          top: 3rem! important;
          font-size: 2rem! important;
        }
      }
    }
`
const styles = {

  h1:{
    textAlign: 'center',
    margin: '5%',
    fonstSize: '4vw',
  },
  realign: {
    width: '50%',

  },
  
  button:{
    width: '20rem',
    height: '4rem',
    backgroundColor: '#ff0054',
    position:'relative',
    margin:'0 2rem'
  },
  svg: {
    color: 'white', 
    width: '2.5rem',
    height: '2.5rem',
    margin: '0.5rem'  
  },
  aflex:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  }
}

const StyledForm = styled(Form)`
position: relative;
float: right;
width: 50%;
`


const LogoDiv = styled.div`
  width: 50%;
  text-align: center;
  position: relative;
  left: 17.5vw;
  top: 10vh;
`
const LinkDiv = styled.div`
width:100%!important;
position: relative;
@media only screen and (max-width:1030px){
  height:50%!important;
  top:0rem;
  & > a> h5{
    font-size:5vw;
    color:white;
  }
}
@media only screen and (max-width:1030px) and (min-height:1000px) and (max-height:1400px){
  height:100%;
  top:0rem;
  & > a> h5{
    font-size:4.5vw;
    color:white;
  }
}
@media only screen and (min-width:1030px){
  height:100%!important;
  top:-3rem!important;
  & > a> h5{
    font-size:2.25vw;
    color:white;
  }
}


`
const I = styled.i`
&:hover {
    background: black;  
    opacity: 1;
  }
`

export default Contact