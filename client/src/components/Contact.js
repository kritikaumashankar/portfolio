import React from 'react'
import { Col, Button, Form, FormGroup, Input } from 'reactstrap'
import axios from 'axios'
import { Column, Row } from 'simple-flexbox'
import styled from 'styled-components'

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
      <Div>
        <Column flexGrow={1}>
          <Row vertical='center'>
            <Column flexGrow={1}>
              <h1 style={styles.h1}>Connect With Me!</h1>
            </Column>
          </Row>
          <Row vertical='center' >
              <Column flexGrow={2}  style={styles.colPadding}>
                <h5 style={{fontSize: '1vw'}}>To connect with me, Please leave your details below. <br/>
                  I look forward to hear from you! :)</h5>
              </Column>
              <Column style={styles.realign} >
                <h5 style={{fontSize: '1vw'}}>Download <br/>My Resume <br/>
                  <a href={process.env.PUBLIC_URL +'/KritikaUmashankar.pdf'} download>
                    <img style={styles.svg} src="pdf.svg" alt="pdf"/>
                  </a>
                </h5>
              </Column>
          </Row>
        </Column>
        <StyledForm onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Col sm={10}>
              <Input 
                type="text" 
                required
                name="name" 
                id="name" 
                value={name} 
                placeholder="Full Name" 
                onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input 
                type="email" 
                required
                name="email" 
                id="email" 
                value={email} 
                placeholder="Email" 
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input 
                type="text" 
                name="subject"
                required 
                id="subject" 
                value={subject} 
                placeholder="Subject" 
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <textarea 
                name="text" 
                id="message" 
                required
                value={message} 
                placeholder="Enter your message.." 
                style={{width:"100%", height: '150%'}}
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button style={styles.button}>Submit</Button>
            </Col>
          </FormGroup>
        </StyledForm>
      </Div>
    )
  }
}

const styles = {
  svg: {
    width: '100px',
    height: '45px',
  },
  h1:{
    textAlign: 'left',
    margin: '5%',
    fonstSize: '4vw',
  },
  realign: {
    width: '50%',

  },
  colPadding:{
    margin: '1vh 3vw',
  },
  button:{
    width: '20vw',
    marginTop: '5vh',
    marginLeft: '-5vw',
    backgroundColor: '#ff0054',
  }
}

const StyledForm = styled(Form)`
  width: 85%;
  margin-left: 5vw;
  padding: 1% 0%;
  position: relative;
`

const Div = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height:75vh;

`
export default Contact