import React from 'react';
import styled from 'styled-components'

const NavBar = styled.nav `
display: flex;
height: 100px;
justify-content: space-around;
font-size: 20px;

        h3:hover{
          color:#d5e1df;
        }
        h6:hover{
          color:#d5e1df;
        }


`

const Nav = () => {
    return (
        <NavBar>
           <h3>CoolTrip</h3>
      <h6>Vuelos</h6>
      <h6>Hoteles</h6>
      <h6>Autos</h6>
        </NavBar>
    );
};

export default Nav;