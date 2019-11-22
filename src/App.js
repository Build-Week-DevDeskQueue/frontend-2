import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
