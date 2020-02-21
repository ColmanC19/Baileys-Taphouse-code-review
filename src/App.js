import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import HomeBody from './components/HomeBody.jsx'
import { Switch, Route } from 'react-router-dom';
import BeerTaps from './components/BeerTaps.jsx';
import NewBeerControl from './components/NewBeerControl.jsx';




class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    masterBeerTapList: []
  };
  this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
}

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerTapList = this.state.masterBeerTapList.slice();
    newMasterBeerTapList.push(newBeer);
    this.setState({masterBeerTapList: newMasterBeerTapList});
}

  render(){
  return (
    <div className="App">
    <Header />
    <h1 className ="Bailey"> Bailey's Taphouse</h1>
    <Switch>
      <Route path='/beertaps' render={()=><BeerTaps beerTaps={this.state.masterBeerTapList} />} />
      <Route path='/homebody' component={HomeBody} />
      <Route path='/newbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
    </Switch>
    <div className ="theBody">
      <HomeBody />
    </div>
    </div>
    );
  }
}

export default App;
