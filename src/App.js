import React, { useState, useEffect } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import delta from './delta.png';
import NavBar from './components/NavBar';
import BottomNavBar from './components/BottomNavBar';
import AppRouter from './components/AppRouter';
import LandingPage from './LandingPage';





const App = props => {

  return (
    <>
      <NavBar />
      <div className="logo"><img src={delta} height="160px" width="160px" /></div>
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
