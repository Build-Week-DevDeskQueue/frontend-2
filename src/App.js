import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import './App.css';
import delta from './delta.png';
import NavBar from './components/NavBar';
import BottomNavBar from './components/BottomNavBar';
import AppRouter from './components/AppRouter';
import LandingPage from './LandingPage';


const App = props => {
  return (
      <>
        <NavBar />
        <div className="logo">
          <img src={delta} height="160px" width="160px" />
        </div>
        <br />
        <AppRouter />
        <br />
        <br />
        <br />
        <BottomNavBar />
      </>
  );
};

export default App;
