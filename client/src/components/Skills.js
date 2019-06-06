import React,{Component} from 'react'
import { Container,
        Carousel,
        CarouselItem,
        CarouselControl,
  } from 'reactstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import styled from 'styled-components'

const Img = styled.img`
  width: 5vw;
  height: 5vh;
  padding: 1% 2%;
  margin: 0 7.5%;
  transition: .5s ease;
  backface-visibility: hidden;
  
`
const GridCol = styled(Col)`
  width: 35vw;
`

const Text = styled.div`
  position: fixed; 
  top: 23vh; 
  color: #f1f1f1; 
  width: 5vw;
  transition: .5s ease;
  opacity:0;
  color: black;
  font-size: 0.75vw;
  text-align: center;
`
const Text1 = styled.div`
  position: absolute; 
  top: 42.5vh; 
  color: #f1f1f1; 
  width: 3vw;
  transition: .5s ease;
  opacity:0;
  color: black;
  font-size: 0.75vw;
  text-align: center;
`
const Text2 = styled.div`
  position: absolute; 
  top: 63.5vh;  
  color: #f1f1f1; 
  width: 3vw;
  transition: .5s ease;
  opacity:0;
  color: black;
  font-size: 0.75vw;
  text-align: center;
`
const Wrapper = styled.div`
  &:hover ${Text} {
    opacity: 1;
  }
  &:hover ${Text1} {
    opacity: 1;
  }
  &:hover ${Text2} {
    opacity: 1;
  }
`
const items = [
  {
    caption: 'Front - End',
    src: <Grid style={{ width:'102%',left: '5vw'}}>
    <Row>
      <GridCol>
        <Row style={{textAlign: 'left'}}>
          <Col><h3 style={{margin:'1vh 10vw', width: '100%', fontSize: '2vw'}}> Front - End</h3></Col>
        </Row>
        <Row className="show-grid" style={{marginLeft:'1%'}}>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="html.png" alt="HTML"/>
              <Text>HTML</Text>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="css.png" alt="CSS"/>
              <Text>CSS</Text>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="bootstrap.png" alt="Bootstrap"/>
              <Text>Bootstrap</Text>
            </Wrapper>
          </Col>
          </Row>
          <Row className="show-grid" style={{marginLeft:'1%'}}>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="semantic.png" alt="Semantic-ui"/>
              <Text>Semantic</Text>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="js.png" alt="Javascript"/>
              <Text>Javascript</Text>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="jQuery.png" alt="jQuery"/>
              <Text>jQuery</Text>
            </Wrapper>
          </Col>
          </Row>
          <Row className="show-grid" style={{marginLeft:'1%'}}>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="react.png" alt="React"/>
              <Text>React</Text>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="react-router.png" alt="React Router"/>
              <Text>Router</Text>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="redux.png" alt="Redux"/>
              <Text>Redux</Text>
            </Wrapper>
          </Col>
        </Row>
      </GridCol>
      </Row>
      </Grid>
  },
  {
    caption: 'Back - End',
    src: <Grid style={{ width:'102%'}}>
    <Row>
      <GridCol>
            <Row style={{textAlign: 'left'}}>
                <Col><h3 style={{margin:'1vh 10vw', width: '100%', fontSize: '2vw'}}> Back - End</h3></Col>
              </Row>
              <Row style={{marginLeft:'1%'}}>
                <Col style={{margin:'2%',}}>
                  <Wrapper>
                    <Img src="java.png" alt="JAVA"/>
                    <Text1>Java</Text1>
                  </Wrapper>
                </Col>
                <Col style={{margin:'2%',}}>
                  <Wrapper>
                    <Img src="express.jpeg" alt="Node - Express"/>
                    <Text1>Express</Text1>
                  </Wrapper>
                </Col>
                <Col style={{margin:'2%',}}>
                  <Wrapper>
                    <Img src="ruby.jpeg" alt="RUBY"/>
                    <Text1>Ruby</Text1>
                  </Wrapper>
                </Col>
                </Row>
                <Row style={{marginLeft:'1%'}}>
                <Col style={{margin:'2%',}}>
                  <Wrapper>
                    <Img src="rails.png" alt="Rails"/>
                    <Text1>Rails</Text1>
                  </Wrapper>
                </Col>
                <Col style={{margin:'2%',}}>
                  <Wrapper>
                    <Img src="spring.png" alt="Springs"/>
                    <Text1>Spring</Text1>
                  </Wrapper>
                </Col>
                <Col style={{margin:'2%',}}>
                  <Wrapper>
                    <Img src="rest.png" alt="REST Api"/>
                    <Text1>REST</Text1>
                  </Wrapper>
                </Col>
              </Row>
            </GridCol>
      </Row>
      </Grid>
  },
  {
    caption: 'Database',
    src: <Grid style={{ width:'102%'}}>
    <Row>
      <GridCol>
        <Row style={{textAlign: 'left'}}>
          <Col><h3 style={{margin:'1vh 10vw', width: '100%', fontSize: '2vw'}}>Database</h3></Col>
        </Row>
        <Row style={{marginLeft:'1%'}}>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="sql.jpeg" alt="SQL"/>
              <Text2>SQL</Text2>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="postgres.jpeg" alt="Postgresql"/>
              <Text2>PostgreSQL</Text2>
            </Wrapper>
          </Col>
          <Col style={{margin:'2%',}}>
            <Wrapper>
              <Img src="mongo.png" alt="MongoDB"/>
              <Text2>MongoDB</Text2>
            </Wrapper>
          </Col>
        </Row>
      </GridCol>
      </Row>
      </Grid>
  }
];
 class Skills extends Component{
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render(){
    const { activeIndex } = this.state;

    const slides = items.map((item,i) => {
      return (
        <CarouselItem
        style={{height: '50vh'}}
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={i}
        >
          {item.src}
        </CarouselItem>
      );
    });

    return(
      <StyleContainer>
      <h1 className="display-4" style={{fontSize:'3vw',fontWeight: 'bold'}}>Skill Set</h1>
      <Carousel
        style={{height: '50vh'}}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl style={{color:'black'}}direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
            
  </StyleContainer>
    )
  }
   
 }
const StyleContainer= styled(Container)`
  margin-top: -4%;
  margin-left:0%;
  width: 100%;
  height: 70vh;
  position: relative;
  top:2vh;
  text-align: center;
`

export default Skills