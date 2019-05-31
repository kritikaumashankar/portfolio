import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, CardTitle, CardGroup, CardImg, CardText} from 'reactstrap'


 const Projects = () =>(
  <Div>
    <h1 className="display-3" style={{fontSize:'4vw',margin: '1vw', }}>Projects</h1>
    <p style={{fontSize:'1.5vw',margin: '1vw',}}>To see my work, <a href="https://github.com/kritikaumashankar" style={{color:'blue',}}>Go To My GitHub Page</a></p>
      <StyledCardGroup>
        <A href="https://github.com/kritikaumashankar/ruby-blackjack">
          <StyledCard>
              <StyledCardImg top width="50%" src="https://i.pinimg.com/originals/b2/50/56/b250564f763fec02945a31e564c639b4.jpg" alt="black jack" />
              <CardBody>
                <CardTitle style={{fontSize:'1vw', color:'black'}}>BlackJack - Ruby</CardTitle>
              </CardBody>
          </StyledCard>
        </A>
        <A href="https://bingoinjquery.netlify.com/game.html">
          <StyledCard>
              <StyledCardImg top width="50%" src="https://media.gettyimages.com/photos/bingo-picture-id182149905" alt="bingo" />
              <CardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>Bingo - HTML|CSS|JQuery</CardTitle>
              </CardBody>
          </StyledCard>
        </A>
        <A href="https://kritikaumashankar.herokuapp.com">
          <StyledCard>
              <StyledCardImg top width="50%" src="portfolio.png" alt="Kritika Umashankar"/>
              <CardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>Portfolio - React|Bootstrap|Express</CardTitle>
              </CardBody>
          </StyledCard>
        </A>
        <A href="https://kitzspace.herokuapp.com">
          <StyledCard>
              <StyledCardImg top width="50%" src="k-network.png" alt="KitzSpace"/>
              <CardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>KitzSpace - React|Rails</CardTitle>
              </CardBody>
          </StyledCard>
        </A>
        <A href="https://github.com/kritikaumashankar/FlashCardsFullStack">
          <StyledCard>
              <CardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>FlashCards - React|Spring Boot|REST </CardTitle>
              </CardBody>
          </StyledCard>
        </A>
      </StyledCardGroup>
  </Div>
)
const Div = styled.div`
  height: 80vh;
  margin-left:1vw;
`
const StyledCardImg = styled(CardImg)`
  height:10vh;
`
const StyledCard = styled(Card)`
  width:100%;
  height:80%;
  text-decoration: none;
`
const A = styled.a`
  width: 12vw;
  height: 15vh;
  margin: 2% 3%;
`
const StyledCardGroup = styled(CardGroup)`
  width: 100%;
  padding: 2%;
  margin: 0% 7%;
`
export default Projects