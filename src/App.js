import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main'
import CardContainer from './components/CardContainer'
import {BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom'

const  App = () => {
 
  return (
    <Router>
    <Main/>
     
    </Router>
  );
}

export default App;
