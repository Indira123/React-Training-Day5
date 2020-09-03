import React from 'react';
import './App.css';
import Routes from './Routes';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <Dashboard />
      <div className='renderRoutes'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
