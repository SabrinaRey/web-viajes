import React, { useState } from 'react';
import { useHistory, Route } from 'react-router-dom';
import CardContainer from './CardContainer';

const Main = () => {
  const [buscado, setBuscado] = useState({
    origin: '',
    departureDate: '',
    returnDate: '',
    duration: 0,
    priceMax: 0,
    passenger: 0,
    flydirection:'roundtrip',
  })

  let history = useHistory();

  const handleChange = e => {
    if (e.target.name === "flydirection") {
      setBuscado({ ...buscado, [e.target.name]: e.target.value})
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="origin" placeholder="Origen"></input>
        Duración <input type="number" name="duration" min="0" step="1" onChange={handleChange} placeholder="Duración"></input>
        Monto Máximo <input type="number" name="priceMax" min="0" onChange={handleChange} placeholder="Monto Máximo"></input>
        Fecha de Inicio<input type="date" name="departureDate" placeholder="Fecha de Inicio" onChange={handleChange}></input>
        Fecha de Finalización <input type="date" min="0" step="1" name="returnDate" placeholder="Fecha de Finalización" onChange={handleChange}></input>
        Pasajeros<input type="number" name="passenger" onChange={handleChange}></input>
        Solo ida<input type="radio" name="flydirection" onChange={handleChange} value='oneway' checked={buscado.flydirection === 'oneway'}/>
        Ida y vuelta<input type="radio" name="flydirection" onChange={handleChange} value='roundtrip' checked={buscado.flydirection === 'roundtrip'}/>
        <input type="submit" value="Buscar" onClick={handleClick}></input>
      </form>
      <Route  path={`/results/:buscado`} component={CardContainer}></Route>
    </div>
  )
}
export default Main;