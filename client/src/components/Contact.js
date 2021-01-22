import React from 'react'
import {  Button, Form, FormGroup,Container, Input,Row,Col } from 'reactstrap'
import axios from 'axios'
import styled from 'styled-components'

class Contact extends React.Component{
  state = { name:'', email: '', message: '' }

  handleChange =(e) => {
    this.setState( { [e.target.id]: e.target.value } )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = this.state
    axios.post('/api/form', 
    {
        name: name,   
        email: email,  
        message: message
    }
    ).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
        this.setState({ name:'', email: '', message: '' })
    })
  }
  render(){
    const { name, email, message } = this.state
    return(
      <MainContainer id={this.props.id}>
          <ContentDiv>
            <LogoDiv>
              <h5 id="contact">Get In Touch!</h5>
              <div id="social">
                    <LinkDiv><a target="blank" href="https://www.facebook.com/kritikaumashankar" style={styles.aflex}><I style={styles.svg} className="fab fa-facebook"></I></a> </LinkDiv>
                
                    <LinkDiv><a target="blank" href="https://www.linkedin.com/in/kritikaumashankar/" style={styles.aflex}><I style={styles.svg} className="fab fa-linkedin"></I></a> </LinkDiv> 
                
                    <LinkDiv><a target="blank" href="https://www.instagram.com/kritikashiv/" style={styles.aflex}><I style={styles.svg} className="fab fa-instagram"></I></a></LinkDiv>
              </div>
              <br/>
            </LogoDiv>
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
      </MainContainer>
    )
  }
}
const MainContainer = styled.div`
  height: 100vh;
  background-image: url(Hero.jpg);
  background-position:center;
  background-size:cover;
`
const Span = styled.span`
  font-size: 3rem;
    margin: 2.5rem;
    color: white;
`

const ContentDiv = styled.div`

  display: flex;

  @media only screen and (max-width:500px){
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    flex-direction: column;
    position: relative;
    text-align: center;
    width:100vw;
    h5{
      font-size: 5vh;
    }
      
      #social{
        top:0;
        display: flex;
        flex-direction: row;
        justify-center:center;
      }
      #contact{
        color: white;
        top:1vh;
        h5{
          font-size: 1.65rem! important;
        }
      }
      a svg{
        width: 3vw;
        height: 3vh;
        margin: 1vh 1vw;
      }
    }

  @media only screen and (min-width:500px) and (max-width:700px){
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    flex-direction: column;
    position: relative;
    text-align: center;
    width:100vw;
    h5{
      font-size: 5vw;
        }
    
    #social{
      top:0;
      display: flex;
      flex-direction: row;
      justify-center:center;
    }
      #contact{
        color: white;
        top:1vh;
        h5{
          font-size: 1.65rem! important;
        }
      }
      a svg{
        width: 3vw;
        height: 3vh;
        margin: 1vh 1vw;
      }
    }
  }
  @media only screen and (min-width:700px) and (max-width:1030px){
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    flex-direction: column;
    position: relative;
    text-align: center;
    width:100vw;
    h5{
      font-size: 5vw;
        }
    
    #social{
      position: relative;
      top:0;
      display: flex;
      flex-direction: row;
      justify-center:center;
    }
      #contact{
        color: white;
        top:1vh;
        h5{
          font-size: 1.65rem! important;
        }
      }
      a svg{
        width: 3vw;
        height: 3vh;
        margin: 1vh 1vw;
      }
    }
  }
  
    
  @media only screen and (min-width:1030px){
    position:relative;
    width:100%;
    height: 95%;
      background-color: rgba(25, 24, 26, 0.5);
      flex-direction: row;
      text-align: center;
      h5{
        font-size: 3.5vw;
          }
      #social{
        position: relative;
        top:7vh;
        display: flex;
        flex-direction: row;
        justify-center:center;
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
      
      span{
        position: inherit;
        height: 11%;
        top: 20rem;
        left: 3vw;
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
@media only screen and (max-width:500px){
  width: 100%;
      height: 45%;
      top: 7vh;
      left: 7vw;
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

  @media only screen and (min-width:500px) and (max-width:1030px){
      width: 75%;
      height: 45%;
      top: 5vh;
      left: 18vw;
      span{
        position: inherit;
        top: 0;
        left: -1.5rem;
        font-size: 3vw;
        margin: 1rem;
        color: white;
      }
      font-size: 2vw;
      div{
        input{  
          height: 100%;
          font-size: 2vw;
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
        top: 3vh! important;
        font-size: 1rem! important;
      }
  }
 
  @media only screen and (min-width:1030px){
        width: 50%;
        height: 75%;
        top: 10rem;
        left: 15vw;
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
          width: 100%;
          height: 10%;
        }
        button{
          height: 10%;
          top: 3rem! important;
          font-size: 2rem! important;
        }
      
    }
`


const LogoDiv = styled.div`
  width: 80%;
  height:20%;
  text-align: center;
  display:flex;
  flex-direction:column;
  position: relative;
  @media only screen and (max-width:1030px){
    width: 80%;
    top: 5vh;
    left: 5vw;
  }
  @media only screen and (min-width:1030px){
    width: 40%;
    top: 45vh;
    left: 15vw;
  }
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