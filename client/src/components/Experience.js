import React from 'react';
import{Container,Row, Col} from 'reactstrap';
import styled from 'styled-components';
const Experience =()=>{
  const pdfUrl = process.env.PUBLIC_URL+"/KritikaUmaShankar.pdf";
  const docUrl = process.env.PUBLIC_URL+"/KritikaUmaShankar.docx";
  return(
    <StyledContainer>
      <ResumeDiv>
        <span><H2>Resume Download</H2></span>
        <a href={pdfUrl} download><I className='far fa-file-pdf' style={{color:'red',backgroundColor:'white'}}></I></a>
        <a href={docUrl} download><I className='far fa-file-word' style={{color:'blue',backgroundColor:'white'}}></I></a>
      </ResumeDiv>
      <Container>
        <h1>Experience</h1>
        <Row style={{margin:'1.5vh 0'}}>
            <StyledCol><H2>Aug 2018 - Oct 2018</H2></StyledCol>
            <Col>
              <H2>Full Stack Web Developer (Student)</H2><H3>Dev Point Labs</H3>
            </Col>
        </Row>
        <Row style={{margin:'1.5vh 0'}}>
          <StyledCol><H2>Mar 2013 - Apr 2014</H2></StyledCol>
          <Col>
            <H2>Senior System Engineer</H2><H3>Infosys Ltd.</H3>
          </Col>
        </Row>
        <Row style={{margin:'1.5vh 0'}}>
          <StyledCol><H2>Dec 2010 - Mar 2013</H2></StyledCol>
          <Col>
            <H2>System Engineer</H2><H3>Infosys Ltd.</H3>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  width:100%;
  height:50%;
  position: relative;
  top:10vh;
  color:white;
  display: flex;
  margin:0;
  text-align: center;
  .row > .col>p>h2,h3,h4{
    margin-bottom:0!important;
  }
  @media screen and (min-width:300px){
    .container > h1{
      font-size:3vh;
    }
  }
  @media screen and (min-width:700px){
    .container > h1{
      font-size:4.5vh;
    }
  }
  @media screen and (min-width:1100px){
    .container > h1{
      font-size:3.5vh;
    }
  }
`

const ResumeDiv = styled.div`
  width:25%;
  height:50%;
  position: relative;
    top: 10vh;
    left: 3vw;
`
const StyledCol =styled(Col)`
  border-right: 5px solid #FF0054;
  width:0;
  height:10vh;
`
const H2 = styled.h2`
text-align:center;
@media screen and (min-width:300px){
  font-size:2vh;
}
@media screen and (min-width:700px){
  font-size:3.5vw;
}
@media screen and (min-width:1100px){
  font-size:2vw;
}`
const H3 = styled.h3`
@media screen and (min-width:300px){
  font-size:1.5vh;
}
@media screen and (min-width:700px){
  font-size:2.5vh;
}
@media screen and (min-width:1100px){
  font-size:2vw;
}`
const I = styled.i`
margin:1vw;
@media screen and (min-width:300px){
  font-size:5vh;
}
@media screen and (min-width:700px){
  font-size:5vh;
}
@media screen and (min-width:1100px){
  font-size:5vw;
}
`
export default Experience;