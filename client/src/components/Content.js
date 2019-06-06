import React from 'react';
import styled from 'styled-components';
import {Container,} from 'reactstrap'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import { fadeIn } from 'animate.css'
import {Animated} from 'react-animated-css'


const items = [
  <About />,
  <Skills />,
  <Projects />,
  <Contact />
];

class Content extends React.Component {
  state = { activeIndex: 0 }
   
  componentDidUpdate(prevProps, prevState){
    if(prevProps.index !== this.props.index)
      this.setState({ activeIndex : this.props.index})
  }

  componentWillUnmount(){
    this.setState({ activeIndex : 0})
  }

  render() {
    const { activeIndex } = this.state;  
      return (
        <>
          <DivContent key={activeIndex} className={fadeIn}>
            {
              items.map((item,index) => { 
                if(index === activeIndex ){
                  return (
                    <Animated key={index} animationIn="slideInRight" animationOut="pulse" isVisible={!this.state.visible}>
                      <Container key={index}>
                        {item}
                      </Container>
                    </Animated>
                  );
                }else{
                  return <div></div>
                }
            })
            }
          </DivContent>
        </>
      )
  }
}
const DivContent = styled.div`
  margin: auto;
  position: relative;
  top: 4vh;
  width: 35vw;
  height: 72vh;
`

export default Content;