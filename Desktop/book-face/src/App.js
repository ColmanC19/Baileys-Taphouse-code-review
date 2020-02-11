import React from 'react';
import propic from './propic.jpg';
import './App.css';
import RightBox from './components/rightbox/RightBox'
import MidBox from './components/midbox/MidBox'
import LeftBox from './components/leftbox/LeftBox'
import Header from './components/header/Header'
import SocialMedia from './components/socialmedia/SocialMedia'

function App() {
  return (
    <div className="App">
    <SocialMedia/>
    <img src={propic} className="App-logo" alt="logo" />
    <Header/>
      <div className="Grid">
        <LeftBox/>
        <MidBox/>
        <RightBox/>
        </div>
      </div>
  );
}

export default App;
