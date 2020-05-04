import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Info from "./Info";

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const Formulario = styled.form`
  input {
    height: 20px;
    border-radius: 3px;
    margin: 5px;
    font-family: "Roboto", helvetica, Arial, sans-serif;
  }
  input:hover {
    background-color: #99ccff;
  }

  .submit {
    background-color: #0033cc;
    height: 30px;
    color: #fff;
    margin-left: 20px;
  }
`;

const Choice = styled.div`
  margin-left: 15px;
`;

const FormTest = () => {
  const [dataSearch, setDataSearch] = useState({
    origin: "",
    departureDate: "",
    returnDate: "",
    maxPrice: "",
    oneWay: "true"
  });

  const createQueryParams = obj => {
    let queryParams = JSON.stringify(obj);
    let s = "";
    for (let key in obj) {
      if (obj[key] !== "") {
        if (s !== "") {
          s += "&";
        }
        s += key + "=" + encodeURIComponent(obj[key]);
      }
    }
    queryParams = s;
    return queryParams;
  };

  const dayCounter = (date1, date2) => {
    let Difference_In_Time = Date.parse(date2) - Date.parse(date1);
    let days = Difference_In_Time / (1000 * 3600 * 24);
    return days;
  };

  const history = useHistory();
  const locationHome = history.location.pathname;

  const handleChange = e => {
    setDataSearch({ ...dataSearch, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { origin, departureDate, returnDate, oneWay, maxPrice } = dataSearch;
    if (oneWay === "true") {
      history.push(`/results/${createQueryParams(dataSearch)}`);
    } else {
      const newObj = {
        origin,
        departureDate,
        duration: dayCounter(departureDate, returnDate),
        maxPrice,
        oneWay
      };
      history.push(`/results/${createQueryParams(newObj)}`);
    }
  };
  return (
    <FormDiv>
      <Formulario onSubmit={handleSubmit}>
        <Choice>
          <input
            type="radio"
            name="oneWay"
            onChange={handleChange}
            value="true"
            checked={dataSearch.oneWay === "true"}
          ></input>
          Solo Ida
          <input
            type="radio"
            name="oneWay"
            onChange={handleChange}
            value="false"
            checked={dataSearch.oneWay === "false"}
          ></input>
          Ida y Vuelta
        </Choice>
        <input
          type="text"
          name="origin"
          onChange={handleChange}
          value={dataSearch.origin}
          placeholder="Origen"
        ></input>
        <input
          type="date"
          name="departureDate"
          onChange={handleChange}
          value={dataSearch.departureDate}
          placeholder="Fecha de Inicio"
        ></input>
        {dataSearch.oneWay === "false" && (
          <label>
            <input
              type="date"
              name="returnDate"
              onChange={handleChange}
              value={dataSearch.returnDate}
              placeholder="Fecha de Regreso"
            ></input>
          </label>
        )}
        <input
          type="number"
          name="maxPrice"
          min="0"
          onChange={handleChange}
          placeholder="Monto Máximo"
        ></input>
        <input
          className="submit"
          type="submit"
          name="submit"
          value="Buscar Vuelos"
        ></input>
      </Formulario>
      {locationHome === "/" && <Info />}
    </FormDiv>
  );
};

export default FormTest;
