import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import HomeBody from './components/HomeBody.jsx'

function App() {
  return (
    <div className="App">
    <Header />
    <h1 className ="Bailey"> Bailey's Taphouse</h1>
    <HomeBody />
    </div>
  );
}

export default App;
