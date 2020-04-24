import React, { useState } from 'react';
import { useHistory, Route } from 'react-router-dom';
import CardContainer from './CardContainer';
import styled from 'styled-components'





const Div = styled.div `
height: 75%;
`

const FormDiv = styled.div `
display:flex;
justify-content: center;

`
const Titulo = styled.h1`
font-family: 'Roboto', helvetica, Arial, sans-serif;
margin: 0;
font-weight: 200;
font-size:36px;
color: #fff;
text-align:center;
padding-bottom: 15px;

`

const Form = styled.form `
   input {
     height:20px;
    border-radius: 3px;
    margin: 5px;
    font-family: 'Roboto', helvetica, Arial, sans-serif;
      }
      input:hover{
        background-color:#c2d4dd;
        
        
      }

      .submit {
        background-color: #034f84;
        height: 30px;
        color:#fff;
       margin-left: 40px;

      }
`

const Choice = styled.div `
margin-left: 15px;


`





const Main = () => {
  const [buscado, setBuscado] = useState({
    origin: '',
    departureDate: '',
    returnDate: '',
    duration: 0,
    priceMax: 0,
    passenger: 1,
    flydirection: 'roundtrip',
  })

  let history = useHistory();

  const handleChange = e => {
    if (e.target.name === "flydirection") {
      setBuscado({ ...buscado, [e.target.name]: e.target.value })
    }
    else {
      setBuscado({ ...buscado, [e.target.name]: e.target.value })
    }

  }

  const handleSubmit = e => {
    e.preventDefault()
    
   
  }

  const handleClick = () => {
    history.push(`/results/origin=${buscado.origin}&departureDate=${buscado.departureDate}&oneWay=false&duration=${buscado.duration}&nonStop=false&maxPrice=${buscado.priceMax}`)
  }
  console.log(buscado)
  return (
    <>
   
      
    <Div>
      <Titulo>Encuentra el mejor destino para tu bolsillo</Titulo>
      <FormDiv>
  
      <Form onSubmit={handleSubmit}>
      <Choice>
       Solo Ida<input type="radio" name="flydirection" onChange={handleChange} value='oneway' checked={buscado.flydirection === 'oneway'} />
      Ida y Vuelta<input type="radio" name="flydirection" onChange={handleChange} value='roundtrip' checked={buscado.flydirection === 'roundtrip'} />
      </Choice>
        <input onChange={handleChange} type="text" name="origin" placeholder="Origen"></input>
         <input type="number" name="duration" min="0" step="1" onChange={handleChange} placeholder="Duración"></input>
         <input type="number" name="priceMax" min="0" onChange={handleChange} placeholder="Monto Máximo"></input>
        <input type="date" name="departureDate" placeholder="Fecha de Inicio" onChange={handleChange}></input>
        <input type="date" min="0" step="1" name="returnDate" placeholder="Fecha de Finalización" onChange={handleChange}></input>
      <input type="number" name="passenger" placeholder= "Cant.Pasajeros" onChange={handleChange}></input>
      
     
      <input className = "submit" type="submit" value="Buscar Vuelos" onClick={handleClick}></input>
      
       
      </Form>
      </FormDiv>
      <Route  path={`/results/:buscado`} component={CardContainer}></Route>
    </Div>
   
      
    
    </>
  )
}
export default Main;