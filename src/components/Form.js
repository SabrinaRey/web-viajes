import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory, Route } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

const FormDiv = styled.div`
display:flex;
justify-content: center;

`


const Formulario = styled.form`
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

const Choice = styled.div`
margin-left: 15px;


`
const DivAdd = styled.div`
height:500px;`



const Form = () => {
    
    const [divExtra, setDivExtra] = useState(true);
    const [buscado, setBuscado] = useState({
    origin: '',
    departureDate: '',
    returnDate: '',
    duration: 0,
    priceMax: 0,
    // passenger: 1,
    // oneWay: true,
  })

  const toUrlEncoded = obj => {
    return Object.keys(obj).map(k => {
      if (obj[k]) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
      }
    }).join('&');
  }

  let history = useHistory();
  const locationHome = history.location.pathname

    const handleChange = e => {
        if (e.target.name === "oneWay") {
            if(e.target.value === "oneWay"){
          setBuscado({ ...buscado, [e.target.name]: true})
        } else {
            setBuscado({ ...buscado, [e.target.name]: false})
        }}
        else {
          setBuscado({ ...buscado, [e.target.name]: e.target.value })
        }
    
      }
    
      const handleSubmit = e => {
        e.preventDefault()
        setDivExtra(!divExtra)
        console.log(divExtra)
        
       
      }
    
      const handleClick = () => {
           
        history.push(`/results/${ toUrlEncoded(buscado)}`)
       
      }
      console.log(buscado)
    //   console.log(locationHome)
    return (
        <>
            <FormDiv>

                <Formulario onSubmit={handleSubmit}>
                    <Choice>
                        Solo Ida<input type="radio" name="oneWay" onChange={handleChange} value='oneWay'  />
  Ida y Vuelta<input type="radio" name="oneWay" onChange={handleChange} value='roundtrip'  />
                    </Choice>
                    <input onChange={handleChange} type="text" name="origin" placeholder="Origen"></input>
                    <input type="number" name="duration" min="0" step="1" onChange={handleChange} placeholder="Duración"></input>
                    <input type="number" name="priceMax" min="0" onChange={handleChange} placeholder="Monto Máximo"></input>
                    <input type="date" name="departureDate" placeholder="Fecha de Inicio" onChange={handleChange}></input>
                    <input type="date" min="0" step="1" name="returnDate" placeholder="Fecha de Finalización" onChange={handleChange}></input>
                    {/* <input type="number" name="passenger" min="0" placeholder="Cant.Pasajeros" onChange={handleChange}></input> */}

                    <input className="submit" type="submit" value="Buscar Vuelos" onClick={handleClick}></input>


                </Formulario>
                {locationHome == "/" && <DivAdd/>}
            </FormDiv>

        </>
    );
};

export default Form;