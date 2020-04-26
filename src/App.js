import React from 'react';
import CardContainer from './components/CardContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import background from './components/img/background.jpg'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FormTest from './components/FormTest'



const Principal = styled.div`
border: 1px solid #000;
background-image: url(${background});
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
   
`

const Titulo = styled.h1`
font-family: 'Roboto', helvetica, Arial, sans-serif;
margin: 0;
font-weight: bold;
font-size:36px;
color: #0066ff;
text-align:center;
padding-bottom: 15px;

`



const  App = () => {
  console.log(process.env.REACT_APP_API_KEY)
  console.log(process.env.REACT_APP_API_KEY_SECRET)
 
  return (
    <Router>

    <Principal>
       <Nav/>   
           <Titulo>Encuentra el mejor destino para tu presupuesto</Titulo>
           <Route   path={`/`} component={FormTest}></Route>
          
      <Route    path={`/results/:buscado`} component={CardContainer}></Route>
    <Footer/>
      
    </Principal>
    </Router>
     
  );
}

export default App;
