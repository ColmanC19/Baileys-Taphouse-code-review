import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import HomeBody from './components/HomeBody.jsx'
import { Switch, Route } from 'react-router-dom';
import BeerTaps from './components/BeerTaps.jsx'




function App() {
  return (
    <div className="App">
    <Header />
    <h1 className ="Bailey"> Bailey's Taphouse</h1>
    <Switch>
    <Route exact path='/beertaps' component={BeerTaps} />
    <Route exact path='/homebody' component={HomeBody} />
    </Switch>
    <div className ="theBody">
      <HomeBody />
    </div>
    </div>
  );
}

export default App;
