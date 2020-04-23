import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = (props) => {
    console.log(props)
    const [resultados, setResultados] = useState([])

    const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

    // datos para obtener el access token
    const item = {
        grant_type: 'client_credentials',
        client_id: 'dx3lEK0ruziTIsWbAFvWvHN5RaoQrR7K',
        client_secret: 'DmWSjOhyOWDpTGYZ'
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
            fetch(`https://test.api.amadeus.com/v1/shopping/flight-destinations?${props.match.params.buscado}`, {
                // el header es para enviarle ese token a la API
                headers: {
                    'Authorization': `Bearer ${data.access_token}`
                }
            })
                .then(res => res.json())
                .then(data => setResultados(data))
            }) 
    }, [])
    console.log(resultados)
    return (
        <div>
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
        </div>
    )

}

export default CardContainer;

// https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=MAD&oneWay=false&duration=10&nonStop=false

//https://test.api.amadeus.com/v1/shopping/
//flight-destinations?origin=MAD&departureDate=2020-05-20&oneWay=false&duration=10&nonStop=false&maxPrice=3000
