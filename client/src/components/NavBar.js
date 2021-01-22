import React from 'react'
import styled from 'styled-components'
import  {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
 } from 'reactstrap'
import { Link } from "react-scroll";
class NavBar extends React.Component {
  //myRef = React.createRef();
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed === false) {
    this.toggleNavbar();
    }
  }

  render() {
    return (
      <>
        
        <StyledNavBar color="dark" dark expand="lg" fixed="top">
        <StyledNavbarBrand href="/" className="mr-auto"><H5>Kritika Uma Shankar</H5></StyledNavbarBrand>
          <NavbarToggler style={{border:'none'}} onClick={this.toggleNavbar} className="mr-2"/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <StyledNav pills className="ml-auto">
            <StyledNavItem>
                <Link activeClass="active"
                    onClick={this.closeNavbar}
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>
                  <H5>Home</H5>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link activeClass="active"
                onClick={this.closeNavbar}
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>
                  <H5>About</H5>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link activeClass="active"
                onClick={this.closeNavbar}
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}>
                  <H5>Work</H5>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link activeClass="active"
                onClick={this.closeNavbar}
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}>
                  <H5>Contact</H5>
                </Link>
              </StyledNavItem>
            </StyledNav>
          </Collapse>
        </StyledNavBar>
      </>
    )
  }
}

const StyledNavBar = styled(Navbar)`
  background-color: #353434! important;
  width:100%;
  height:10%;
`

const StyledNavbarBrand = styled(NavbarBrand)`
  height:100%;

`
const StyledNav = styled(Nav)`
  
  justify-content:center;
  
  @media(max-width:900px){
    flex-direction: column;
    background-color:#353434;
    width: 35%;
  }
  @media(min-width:900px){
    flex-direction: row;
    width: 100%;
  }
  
`
const StyledNavItem = styled(NavItem)`
cursor: pointer;
a.active{
  h5{
    border-bottom: 4px solid rgb(255, 0, 84);
    color:rgb(255, 0, 84)! important;
  }
}
@media(max-width:500px){
  width: 100%;
}
@media(min-width:500px){
  width: 100%;
}
@media(min-width:700px){
  width: 100%;
}
@media(min-width:992px){
  width: 25%;
}
@media(min-width:1200px){
  width: 10%;
}
`
const H5 = styled.h5`
color:white;
text-align:center;
@media (max-width: 300px){
    font-size: 3vh;
    margin: 0 auto;
}
@media(min-width: 300px){
  font-size: 4vh;
  margin: 0 auto; 
}

@media(min-width:700px){
  font-size: 4vw;
  margin: auto; 
}

@media(min-width:1200px){
  font-size: 1.5rem;
  margin: 0rem; 
}
`

export default NavBar
