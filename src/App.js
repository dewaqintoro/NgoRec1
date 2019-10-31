import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Body1 from './Component/Body1'
import Body2 from './Component/Body2';
import Footer from './Component/Footer';
import Ndas from './Component2/Ndas';
import Awak from './Component2/Awak';
import Galery from './Component2/Galery';

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="template1">
          <Header/>
          <Body1/>
          <Body2/>
          <Footer/>
        </div>

        <div className="template2">
          <h2>Template 2</h2>
          <Ndas/>
          <Awak/>
          <Galery/>
        </div>
      </div>
    </div>
  );
}

export default App;
