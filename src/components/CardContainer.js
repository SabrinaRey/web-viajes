import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";

const Resultados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Msje = styled.h2`
  height: 300px;
  color: red;
  h2:hover {
    color: #d5e1df;
  }
`;

const Volver = styled.button`
  background-color: #512c62;
  box-shadow: 10px 10px 8px #888888;
  height: 30px;
  color: #fff;
  margin-left: 20px;
`;

const CardContainer = props => {
  console.log(props);
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();
  const getParams = useParams();
  const toUrlEncoded = obj =>
    Object.keys(obj)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
      .join("&");

  // datos para obtener el access token
  const item = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_API_KEY,
    client_secret: process.env.REACT_APP_API_KEY_SECRET
  };

  useEffect(() => {
    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: toUrlEncoded(item)
    })
      .then(res => res.json())
      .then(data => {
        fetch(
          `https://test.api.amadeus.com/v1/shopping/flight-destinations?${getParams.buscado}`,
          {
            headers: {
              Authorization: `Bearer ${data.access_token}`
            }
          }
        )
          .then(res => res.json())
          .then(data => setResultados(data))
          .catch(err => setError(err));
      });
  }, [getParams.buscado]);

  const handleClick = e => {
    history.push("/");
  };

  return (
    <>
      <Resultados>
        <Volver onClick={handleClick}>Volver al Inicio</Volver>
        {resultados.data &&
          resultados.data.map((element, i) => (
            <Card
              key={i}
              origin={element.origin}
              destination={element.destination}
              departureDate={element.departureDate}
              returnDate={element.returnDate}
              price={element.price.total}
            />
          ))}
        {!resultados.data && (
          <Msje>
            <h2>No hay vuelos disponibles</h2>
          </Msje>
        )}
      </Resultados>
    </>
  );
};

export default CardContainer;
