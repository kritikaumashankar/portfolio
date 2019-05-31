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
        <div>
        </div>
        <LogoDiv>
          <a target="blank" href="https://www.facebook.com/kritikaumashankar" style={styles}><I style={styles.svg} className="fab fa-facebook"></I></a><span>|</span> 
          <a target="blank" href="https://www.linkedin.com/in/kritikaumashankar/" style={styles}><I style={styles.svg} className="fab fa-linkedin"></I></a> | 
          <a target="blank" href="https://github.com/kritikaumashankar" style={styles}><I style={styles.svg} className="fab fa-github-square"></I></a> | 
          <a target="blank" href="https://twitter.com/kritikaASK" style={styles}><I style={styles.svg} className="fab fa-twitter"></I></a>
        </LogoDiv>
        <H5>[ Visits : {this.state.views} ]  </H5>
      </Div>
    )
  }
}

const H5 = styled.div`
  font-size: 1vw;
  float: right;
  margin: 2vh 2vw;
`
const I = styled.i`
&:hover {
    background: black;  
    opacity: 1;
  }
`
const Div = styled.div`
  height: 8vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: 	hsl(0, 0%, 90%);
`
const LogoDiv = styled.div`
  width: 50%; 
  text-align: center;
  margin: 2vh auto;
`
const styles = {
  svg: {
    color: '#999999', 
    width: '1.5vw',
    height: '1.5vw',
    margin: 'auto 2.5vw'  
  }
}

export default Footer;

