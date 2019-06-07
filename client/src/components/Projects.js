import React from 'react'
import styled from 'styled-components'
import { 
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap'

const Div = styled.div`
  height: 80vh;
  margin: auto;
  margin-left:1vw;
`
const StyledCardImg = styled(CardImg)`
  height:20vh;
`
const StyledCard = styled(Card)`
  width: 20vw;
  height: 30vh; 
  margin: auto;
  text-decoration: none;
`
const A = styled.a`
  width: 12vw;
  height: 15vh;
  margin: 2% 3%;
`
const StyledCardBody = styled(CardBody)`
  height:10vh;
  padding: 0.5rem;  
  border: 0.2vh solid black;
`

const items =[
  {
    src:<A href="https://github.com/kritikaumashankar/ruby-blackjack">
          <StyledCard>
              <StyledCardImg top width="50%" src="https://i.pinimg.com/originals/b2/50/56/b250564f763fec02945a31e564c639b4.jpg" alt="black jack" />
              <StyledCardBody>
                <CardTitle style={{fontSize:'1vw', color:'black'}}>BlackJack - Ruby</CardTitle>
              </StyledCardBody>
          </StyledCard>
        </A>
  },
  {
    src:<A href="https://bingoinjquery.netlify.com/game.html">
          <StyledCard>
              <StyledCardImg top width="50%" src="https://media.gettyimages.com/photos/bingo-picture-id182149905" alt="bingo" />
              <StyledCardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>Bingo - HTML|CSS|JQuery</CardTitle>
              </StyledCardBody>
          </StyledCard>
        </A>
  },
  {
    src: <A href="https://kritikaumashankar.herokuapp.com">
          <StyledCard>
              <StyledCardImg top width="50%" src="portfolio.png" alt="Kritika Umashankar"/>
              <StyledCardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>Portfolio - React|Bootstrap|Express</CardTitle>
              </StyledCardBody>
          </StyledCard>
        </A>

  },
  {
    src:<A href="https://kitzspace.herokuapp.com">
          <StyledCard>
              <StyledCardImg top width="50%" src="k-network.png" alt="KitzSpace"/>
              <StyledCardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>KitzSpace - React|Rails</CardTitle>
              </StyledCardBody>
          </StyledCard>
        </A>
  },
  {
    src: <A href="https://github.com/kritikaumashankar/FlashCardsFullStack">
          <StyledCard>
              <StyledCardImg top width="50%" src="flashcards.png" alt="Flash Cards"/>
              <StyledCardBody>
                <CardTitle style={{fontSize:'1vw',color:'black'}}>FlashCards - React|Spring Boot|REST </CardTitle>
              </StyledCardBody>
          </StyledCard>
        </A>
  }
]
 class Projects extends React.Component{
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
        <Div>
          <h1 className="display-3" style={{fontSize:'4vw',margin: '0 7vw', }}>Projects</h1>
          <p style={{fontSize:'1.5vw',margin: '1vw',}}>To see my work, <a href="https://github.com/kritikaumashankar" style={{color:'blue',}}>Go To My GitHub Page</a></p>
          <Carousel
              style={{height: '50vh',width : '20vw'}}
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {slides}
              <CarouselControl style={{color:'black',height: '50vh'}} direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl style={{color:'black',height: '50vh'}} direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        </Div>
        )
    }
 }


export default Projects