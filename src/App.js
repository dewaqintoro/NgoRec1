import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Body1 from './Component/Body1'
import Body2 from './Component/Body2';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header/>
        <Body1/>
        <Body2/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
