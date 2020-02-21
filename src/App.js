import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import HomeBody from './components/HomeBody.jsx'
import { Switch, Route } from 'react-router-dom';
import BeerTaps from './components/BeerTaps.jsx';
import NewBeerControl from './components/NewBeerControl.jsx';
import PropTypes from "prop-types";




function App() {
  return (
    <div className="App">
    <Header />
    <h1 className ="Bailey"> Bailey's Taphouse</h1>
    <Switch>
    <Route path='/beertaps' component={BeerTaps} />
    <Route path='/homebody' component={HomeBody} />
    <Route path='/newbeer' component={NewBeerControl} />
    </Switch>
    <div className ="theBody">
      <HomeBody />
    </div>
    </div>
  );
}

export default App;
