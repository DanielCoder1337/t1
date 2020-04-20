import React, {useState, useEffect, useContext, Component} from 'react';
import { For } from 'react-loops'
import {Router} from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import './App.css';
import Nav from './headers/navigation/index'

function App() {
  return (
    <Router history={history}>
      <Nav/>
      <div className="container">
        <Routes/>
      </div>
    </Router>
  );
}

export default App;