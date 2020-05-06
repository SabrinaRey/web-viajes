import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPlane, FaHotel, FaSuitcase, FaDollarSign } from "react-icons/fa";

const Header = styled.header`
  font-family: "Roboto", helvetica, Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 5px 0px 0px 20px;

  .titulo {
    margin: 10px;
    color: #000080;
    font-size: 30px;
    font-weight: bolder;
    text-decoration: none;
    span {
      color: #9966ff;
    }
  }

  .titulo:hover {
    color: #d5e1df;
  }
  .titulo span:hover {
    color: #d5e1df;
  }

  button {
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
        <Link to="/" className="titulo">
          Cool<span>Trip</span>
        </Link>
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
        <Link to="/flights">
          <FaPlane /> Vuelos
        </Link>
        <Link to="/hotels">
          <FaHotel /> Hoteles
        </Link>
        <Link to="/packages">
          <FaSuitcase /> Paquetes
        </Link>
      </NavBar>
    </>
  );
};

export default Nav;
