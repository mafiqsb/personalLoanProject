import React, {useState} from 'react'

import PersonalInfo from './components/PersonalInfo.js';
import Nav from './components/Nav';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './img.jpg'


function App() {


  return (
    <>
    <Nav />
    <div>
      <div className="carousel-inner">
        <div>
          <img className="w-100" src={Image1} alt="image" />

        </div>
      </div>
    </div>
    <div className='container App'>
      <br/>
      <PersonalInfo />
      
    </div>
    </>
    
  );
}

export default App;
