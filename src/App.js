import React from 'react';

import './App.css';
import NewIssueForm from './components/New';
import SignIn from './components/SignIn';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <div>
      <SignIn />
      <NewIssueForm />
      <AppRouter />
    </div>
  );
};

export default App;
