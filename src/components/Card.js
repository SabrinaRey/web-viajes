import React from 'react';
import styled from 'styled-components';
// No es bueno dejar variables sin usar, como en este caso. Si VSCode las pone en gris, borrenlas!
import { FaPlaneDeparture, FaPlaneArrival, FaCommentsDollar,  FaDollarSign, FaCalendarAlt, FaLuggageCart } from "react-icons/fa";



// Privilegien usar nombres mas descriptivos que DivCard, y usar article en lugar de div
// Por otro lado, height auto es innecesario. 
const DivCard =styled.div`
height: auto;
width: 50%;
padding: 25px;
justify-content: space-around;
margin: 20px;
border: 0.5px solid #f4f4f4;
color: #8186d5;
border-radius:5px;
display:flex;
font-family: 'Roboto', helvetica, Arial, sans-serif;
box-shadow: 10px 10px 8px #888888;

.submit {
    background-color: #512c62;
    box-shadow: 10px 10px 8px #888888;
        height: 30px;
        color:#fff;
       margin-left: 20px;


  }
span {
    font-weight: bold;
    color: #3282b8;
}
 .price {
     color:#16817a;
 }

 

  
`
// Traten de no dejar comentarios como este sueltos en el codigo. 

// const Origen = styled.div`
// span {
    
// }
// `
const Card = ({ origin, destination, departureDate, returnDate, price }) => {
    // const formatterDolar = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    //   })
    //console.log(formatterDolar.format(value))
 
    return (
        <>
       
        <DivCard>
        {/* Estos dos divs a continuacion podrian componentizarse */}
            <div>
                <h4> <span><FaPlaneDeparture/> Origen:</span> {origin}</h4>
                <p><span><FaCalendarAlt/> Fecha de Salida: </span> {departureDate}</p>
                </div>
           
            <div>
                <h4> <span><FaPlaneArrival/> Destino: </span>{destination}</h4>
                {returnDate &&<p><span> <FaCalendarAlt/> Fecha de Regreso: </span>{returnDate}</p>}
                </div>
            
            <div>
                <span><p className="price"> <FaDollarSign/>{price}</p></span>
                <input className="submit" type="submit"  value = "Seleccionar"/>
                </div>
            
        </DivCard>
       
        </>
    );
}
export default Card;
