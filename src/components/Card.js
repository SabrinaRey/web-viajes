import React from 'react';
import styled from 'styled-components';

const DivCard =styled.div`
margin: 10px;
`
const Card = ({ origin, destination, departureDate, returnDate, price }) => {
    // const formatterDolar = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD'
    //   })
    //console.log(formatterDolar.format(value))
 
    return (
        <DivCard>
            <h4>{origin}</h4>
            <h4>{destination}</h4>
            <p>{departureDate} to {returnDate}</p>
            <p>Price: ${price}</p>
        </DivCard>
    );
}
export default Card;