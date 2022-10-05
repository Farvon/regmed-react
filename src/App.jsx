import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import HeaderComponent from './components/HeaderComponent';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;
