import  React,{ Component } from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'
import SideNavBar from './SideNavBar';
import Content from './Content';

export default class Main extends Component{

  state={ index:0, visible:false }

  handleHover = (id) => {
    if(parseInt(id) > 0 && parseInt(id) <5)
      this.setState({index: parseInt(id)})
    else
      this.setState({index: 0})
    this.setState({visible : !this.state.visible})
 }

  componentWillUnmount(){
    this.setState({ index : 0, visible: false})
  }

  render(){
    const{ index, visible} = this.state
    return(
      <Div>
        <NavBar />
        <SideNavBar index ={index} onMouseOverParent={this.handleHover}/>
        <Content index = {index}/> 
      </Div>
    )
  }

}

const Div = styled.div`
  height: 92vh;
  background: url(${process.env.PUBLIC_URL + '/main.jpg'});
  background-size: 100vw 100vh;
`