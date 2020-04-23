import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main'
import CardContainer from './components/CardContainer'
import {BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import background from './components/img/nice.jpg'

const Principal = styled.div`
border: 1px solid #000;
background-image: url(${background});
position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
`

const  App = () => {
 
  return (
    <Principal>
    <Router>
    <Main/>
    <Route  path={`/results/:buscado`} component={CardContainer}></Route>
    </Router>
    </Principal>
  );
}

export default App;
