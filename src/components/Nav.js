import React from "react";
import styled from "styled-components";
import { FaPlane, FaHotel, FaSuitcase, FaDollarSign } from "react-icons/fa";

const Header = styled.header`
  font-family: "Roboto", helvetica, Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 5px 0px 0px 20px;

  h1 {
    color: #000080;
    span {
      color: #9966ff;
    }
  }

  h1:hover {
    color: #d5e1df;
  }
  h1 span:hover {
    color: #d5e1df;
  }

  button {
    font-family: "Roboto", helvetica, Arial, sans-serif;
    margin: 20px 30px;
    height: 40px;
    text-align: center;
    background-color: transparent;
    border: none;
    img {
      height: 50%;
    }
    span {
      font-weight: bold;
    }
  }
`;
const NavBar = styled.nav`
  display: flex;
  height: 100px;
  justify-content: space-around;
  font-size: 15px;
  font-family: "Roboto", helvetica, Arial, sans-serif;
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #d5e1df;
  }
`;

const Nav = () => {
  return (
    <>
      <Header>
        <h1>
          Cool<span>Trip</span>
        </h1>
        <button>
          Español{" "}
          <img
            alt="bandera"
            src="https://images.skyscnr.com/images/country/flag/header/ar.png"
          ></img>{" "}
          Argentina{" "}
          <span>
            <FaDollarSign />
            ARS
          </span>
        </button>
      </Header>
      <NavBar>
        <a href="">
          <FaPlane /> Vuelos
        </a>
        <a href="">
          <FaHotel /> Hoteles
        </a>
        <a href="">
          <FaSuitcase /> Paquetes
        </a>
      </NavBar>
    </>
  );
};

export default Nav;
