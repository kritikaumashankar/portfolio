import React from 'react'
import styled from 'styled-components'

class Footer extends React.Component{
  state = { views : 0}

  componentDidMount(){
    fetch('/',{
      method : "post",
      body: JSON.stringify({views: this.state.views+1}),
      headers : {
        "Content-Type" : "application/json; charset=utf-8"
      }
    })
    .then((response)=>{
      return response.json();

    })
    .then((data)=>{
      if(data.ok!== 1 && data.error){
        alert("Error while inserting the DB");
      }else{
        this.setState({views : data.views})
      }
        
    })
  }
  
  fetchViews = () =>{
    fetch('/',{
      method : "get",
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      if(data.ok!== 1 && data.error){
        alert("Error while fetching views from DB");
      }else{
        this.setState({views : data.document.length})
      }
    });
  }
  render() {
    return(
      <Div>
        <H5>[ Visits : {this.state.views} ]  </H5>
      </Div>
    )
  }
}

const H5 = styled.div`
  font-size: 1vw;
  margin: 2vh 2vw;
  float: right;
  color: rgb(121, 118, 118);
`

const Div = styled.div`
  background-color: #313030;
  width:100%;
  height: 7.5vh;
`


export default Footer;

