import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer'
import  '../App.css'
import Home from './Home';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/main' component={Main} />
        </Switch> 
          <Footer />
      </>
    )
  }
}


export default App