import React from 'react'
import styled from 'styled-components'
import{
  Image,
} from 'react-bootstrap'

class SideNavBar extends React.Component{
  state = { index:0 }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.index !== this.props.index)
      this.setState({ index : this.props.index})
  }

  render(){
    
    console.log(this.props)
    return(
      <StyledDiv>
        <StyledImage src="1.jpeg" circle alt="Kritika Umashankar"/>
        <StyledSideNav defaultSelectedPath={this.state.index}>
          <StyledNav id="0" style={{top:'22vh'}}className={ this.state.index === 0? "active" : ""} onClick={() => this.props.onMouseOverParent(0)}><StyledH3>About</StyledH3></StyledNav>
          <StyledNav id="1" style={{top:'33vh'}}className={ this.state.index === 1? "active" : ""} onClick={() => this.props.onMouseOverParent(1)}><StyledH3>Skill</StyledH3></StyledNav>
          <StyledNav id="2" style={{top:'44vh'}}className={ this.state.index === 2? "active" : ""} onClick={() => this.props.onMouseOverParent(2)}><StyledH3>Projects</StyledH3></StyledNav>
          <StyledNav id="3" style={{top:'55vh'}}className={ this.state.index === 3? "active" : ""} onClick={() => this.props.onMouseOverParent(3)}><StyledH3>Contact</StyledH3></StyledNav>
        </StyledSideNav>
      </StyledDiv>  
    )
  }

}

const StyledDiv= styled.div`
  position: absolute;
  background: transparent;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  text-align: center !important;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
`

const StyledImage= styled(Image)`
  position:relative;
  width: 30vw;
  height: 50vh;
  border-radius:100%;
  padding: 3%;
`
const StyledNav = styled.div`
  position: fixed;
  width:25vw !important;
    @media screen and (max-width:667px){
      &.active{ 
        -webkit-transform: rotate(-50deg) translateX(0);
      } 
  
      &:hover{
        -webkit-transform: rotate(0deg) translateX(0);
      }
      &.active h3, &:hover h3{
        -webkit-transform: rotate(0deg) translateX(0);
      }
    }

    @media screen and (max-width:1366px){
      &.active{ 
        -webkit-transform: rotate(-45deg) translateX(0);
      } 
  
      &:hover{
        -webkit-transform: rotate(0deg) translateX(0);
      }
      &.active h3, &:hover h3{
        -webkit-transform: rotate(0deg) translateX(0);
      }
      
    }
    @media screen and (min-width:1280px){
      &.active{ 
        -webkit-transform: rotate(-25deg) translateX(0);
      } 
  
      &:hover, &:hover h3{
        -webkit-transform: rotate(0deg) translateX(0);
      }
      &.active h3, &:hover h3{
        -webkit-transform: rotate(0deg) translateX(0);
      }
    }
    
`

const StyledH3 = styled.h3`
  text-decoration: none;
  font-size: 4vw;
  font-weight: bold;
  padding: 0vh 2vw;
  @media screen and (max-width:823px){
    -webkit-transform: rotate(-50deg) translateX(0);
    margin: 2.5vh 0;
  }
  @media screen and (max-width:1366px){
    -webkit-transform: rotate(-45deg) translateX(0);
    margin: 2.5vh 0;
  }
  @media screen and (min-width:1280px){
    -webkit-transform: rotate(-25deg) translateX(0);
   margin-top: 1vh;
  }
`
const StyledSideNav = styled.div`
  width: 25vw;
  top: 8vh;
  position: static;
  display: flex;
  flex-direction: column;
`
export default SideNavBar