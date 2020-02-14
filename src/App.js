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
    <Switch>
    <Route exact path='/' component={BeerTaps} />
    </Switch>
    <h1 className ="Bailey"> Bailey's Taphouse</h1>
    <HomeBody />
    </div>
  );
}

export default App;
