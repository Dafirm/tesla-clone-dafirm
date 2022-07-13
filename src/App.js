import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Section from './components/Section';
import footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <footer/>
      
    </div>
  );
}

export default App;
