import React from 'react'
import styled from 'styled-components'
import  {
  NavbarBrand,
 } from 'reactstrap'
 import Footer from './Footer'

class NavBar extends React.Component {
  state = { index:0 }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.index !== this.props.index)
      this.setState({ index : this.props.index})
  }
 
  render() {
    return (
      <>
        
        <StyledNavBar color="light" light expand="md">
          <NavbarBrand href="/" style={styles.logoNav}><Img style={styles.svgLogo} src="ku-logo.svg"/></NavbarBrand>
          <NavbarBrand href="/" style={styles.navBand}><StyledH1>Kritika Umashankar</StyledH1></NavbarBrand>
        </StyledNavBar>
      </>
    )
  }
}

const StyledNavBar = styled.nav`
  
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction :row;
  justify-content: space-between;
  width:100vw;
  font-family: 'Montserrat', sans-serif;
`

const Img = styled.img`
  &:hover {
    background: transparent;
    width: 100%;
  }
`

const StyledH1 = styled.h1`
  color: black;
  padding: 1%;
  font-size: 3.5vw;
  font-weight: bold;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  margin-right: 32vw;
`
const styles = {
  svgLogo: {
    width: '7vw',  
    marginLeft: '4vw'  
  },
  logoNav: {
    width: '15%',
    margin: '2vh 1vw'
  },
  navBand: {
    marginRight: '0'
  }
}

export default NavBar
