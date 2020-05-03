import React from 'react';
import styled from 'styled-components'

// Tanto display flex como position relative son innecesarios aqui
// Flex porque los a son elementos en linea
// Position relative porque no se esta posicionando nada. 
// Y ya adivinaron qué opino sobre el nombre FooterDiv, no?
const FooterDiv = styled.footer `
display: flex;
position:relative;
   a {
     margin: 20px;
     font-family:'Roboto', helvetica, Arial, sans-serif;
     font-size: 15px;
     color:#0033cc;
     text-decoration: none;
   }

 a:hover{
  color:#d5e1df;
}

`


const Footer = () => {
    return (
        <FooterDiv>
            <a href=" ">Sobre Nosotras</a>
      <a href="">Contactenos</a>
        </FooterDiv>
    );
};

export default Footer;
