import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom'


const Main = () =>{
    const [origenBuscado , setOrigenBuscado] = useState("MAD")
    const [accessToken, setAccessToken] = useState("")
     const [resultados, setResultados] =useState([])

     let history = useHistory();
  
     
    const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
  
  // datos para obtener el access token
  const item = {
   grant_type: 'client_credentials',
   client_id: 'dx3lEK0ruziTIsWbAFvWvHN5RaoQrR7K',
   client_secret: 'DmWSjOhyOWDpTGYZ'
  };
  
  // hacemos el fetch a la API para solicitar el nuevo access token
  useEffect (() => {fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
     method: 'post',
     headers: {
       "Content-Type": "application/x-www-form-urlencoded"
     },
     body: toUrlEncoded(item)
   })
   .then(res => res.json())
   .then(data => setAccessToken(data.access_token))
  }, [])
  
     // cuando la API nos responde, podemos guardarnos ese código que vamos a utilizarlo para hacer el fetch a la API de Amadeus
     // como este token vence cada cierto tiempo, por seguridad, siempre vamos a tener que obtener uno nuevo antes de llamar a la API
  
     
    
  
  
     
    //  // haga el pedido a la API de Amadeus para obtener unos vuelvos de ejemplo
    //  fetch('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-11-01&returnDate=2020-11-15&adults=2', {
    //      // el header es para enviarle ese token a la API
    //      headers: {
    //        'Authorization': `Bearer ${accessToken}`
    //      }
    //    })
    //    .then(res => res.json())
    //    .then(data => {
    //      // cuando la API nos responde, obtenemos el objeto general que tiene todos los datos
    //      console.log(data)
    //    })
   
   
  
   
   
  

    const handleChange = e => {
        setOrigenBuscado(e.target.value)
        console.log(origenBuscado)
      }
     
      const handleSubmit = e => {
       e.preventDefault()
       
       
       fetch(`https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origenBuscado}`, {
        // el header es para enviarle ese token a la API
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
         .then(res => res.json())
         .then(data=> setResultados(data))
         
     }
     
     const handleClick = () => {
             
       history.push(`/resultados/${origenBuscado}`)
     
     }
      
    return (
        <div className="App">
      <form onSubmit = {handleSubmit}>
        <input onChange = {handleChange} type= "text" placeholder="Origen"></input>
        Duración <input type= "number" min="0" step="1" onChange = {handleChange} placeholder="Duración"></input>
        Monto Máximo <input type= "number" min="0"  onChange = {handleChange} placeholder="Monto Máximo"></input>
        Fecha de Inicio<input type= "date" placeholder="Fecha de Inicio" onChange = {handleChange}></input>
        Fecha de Finalización <input type= "date" placeholder="Fecha de Finalización" onChange = {handleChange}></input>
      <input  type ="submit" value="Buscar" onClick={handleClick}></input> 
      </form>

      

      
     
      
    </div>
    )
}


export default Main