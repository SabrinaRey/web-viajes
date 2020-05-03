import React from 'react';
// Intenten siempre poner punto y coma después de cada sentencia import. 
import CardContainer from './components/CardContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import background from './components/img/background.jpg'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FormTest from './components/FormTest'


// Presten atención a los espacios aquí (por que hay dos saltos de linea entre los import y el estilo?
//   y al tabulado en esta sección de estilo: todo a partir de border debería estar dos espacios después de
//   la declaración de la const Principal)

// Top, left, height y width son totalmente innecesarias. Top y left se usan solo cuando un elemento
// esta posicionado. Height y width ya son por defecto del 100%. 
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

// Privilegien alinear con flex y no con text-align. 
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
   // Presten atención al tabulado inconsistente en este componente (los dos Route deberían
   // estar en la misma jerarquía, por ejemplo) y al uso inconsistente de los enter. 
   // No es bueno dejar espacios porque sí, por ejemplo entre Route y path
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
