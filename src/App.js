import React from 'react';
import './App.css';
import Header from './Component/Header'
import Body from './Component/Body'
import Footer from './Component/Footer'
import Ndas from './Component2/Ndas'
import Awak from './Component2/Awak'
import Galery from './Component2/Galery'
import Sikel from './Component2/Sikel'

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="template1">
          <Header/>
          <Body/>
          <Footer/>
        </div>

        <div className="template2">
          <h2>Template 2</h2>
          <Ndas/>
          <Awak/>
          <Galery/>
          <Sikel/>
        </div>
      </div>
    </div>
  );
}

export default App;
