import React from 'react';
import styled from 'styled-components'



const DivAdd = styled.div`
font-family: 'Roboto', helvetica, Arial, sans-serif;
display:flex;
flex-direction:row;
margin-top:30px;
@media (max-width: 860px) {
    flex-direction: column;
  }

     div{
        margin: 100px 40px 0px 0px;
        width:250px;
        text-align: center;
        font-size:15px;
    
                    img {
                height:30%;
                transition: opacity .4s ease-in-out;
            }
        h2 {
            color:#0033cc;
        }
        p{
            text-align:center;
            color:#d5e1df;
        }

           
    }`

const Info = () => {
    return (
        <DivAdd>
            <div>
                <img alt="viajero" src="https://js.skyscnr.com/sttc/blackbird/static/media/anywhere.992d8e73.svg"></img>
                <h2>Encuentra el mejor vuelo o paquete</h2>
                <p>El mundo es tuyo y te ayudaremos a explorarlo.
                Encuentra los mejores precios entre millones de opciones de vuelos, hoteles y paquetes
                     y organiza el viaje perfecto para tu presupuesto.</p>
            </div>
            <div>
                <img alt="uncomplicated" src="https://js.skyscnr.com/sttc/blackbird/static/media/simple.ac9139b9.svg"></img>
                <h2>Viaja sin complicaciones</h2>
                <p>Busca vuelos, hoteles y paquetes acorde a tu presupuesto, sin cargos ocultos.
                    Olvídate de las preocupaciones y relájate antes de que empiece tu viaje.</p>
            </div>
            <div>
                <img alt="yourway" src="https://js.skyscnr.com/sttc/blackbird/static/media/travel.dc26a1ad.svg"></img>
                <h2> Viaja a tu manera</h2>
                
                <p>¿No sabes a dónde queres viajar pero si cuánto podes gastar?
                    Descubre cuál es el destino acorde a tu presupuesto desde escapadas para desconectar hasta aventuras para recordar.</p>
            </div>

        </DivAdd>
    );
};

export default Info;