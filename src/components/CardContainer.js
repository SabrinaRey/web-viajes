import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Card from './Card';
import styled from 'styled-components';
// import backgroundCard from './img/dondequieras.jpg' 








const Resultados = styled.div`
  display:flex;
justify-content: center;
flex-wrap:wrap;



`


const CardContainer = (props) => {
    console.log(props)
    const [resultados, setResultados] = useState([])

    const getParams = useParams()
    

    const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

    // datos para obtener el access token
    const item = {
        grant_type: 'client_credentials',
        client_id: 'yFccJ58lomQWDAkZ0dHFxW36vKgSYgGe',
        client_secret: 'REACT_APP_API_KEY'
    };

    // hacemos el fetch a la API para solicitar el nuevo access token
    useEffect(() => {
        fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: toUrlEncoded(item)
        })
            .then(res => res.json())
            .then(data =>{
            fetch(`https://test.api.amadeus.com/v1/shopping/flight-destinations?${getParams.buscado}`, {
                // el header es para enviarle ese token a la API
                headers: {
                    'Authorization': `Bearer ${data.access_token}`
                }
            })
                .then(res => res.json())
                .then(data => setResultados(data))
                // .catch(error => console.log(error))
            }) 
           
    }, [getParams.buscado])
    
    return (
        <>
       
        <Resultados>
        { resultados.data &&
            resultados.data.map((element, i) =>(
                <Card
                key={i}
                origin={element.origin}
                destination={element.destination}
                departureDate={element.departureDate}
                returnDate={element.returnDate}
                price={element.price.total}
                />
            ))
        }
        </Resultados>
        
         </>
    )

}

export default CardContainer;

// https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=MAD&oneWay=false&duration=10&nonStop=false

//https://test.api.amadeus.com/v1/shopping/
//flight-destinations?origin=MAD&departureDate=2020-05-20&oneWay=false&duration=10&nonStop=false&maxPrice=3000
