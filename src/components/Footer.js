import React from 'react';
import styled from 'styled-components'

const FooterDiv = styled.footer `
display: flex;
position:relative;
   h6 {
     margin: 20px;
     font-size: 15px;
   }

 h6:hover{
  color:#d5e1df;
}

`


const Footer = () => {
    return (
        <FooterDiv>
            <h6>Sobre Nosotras</h6>
      <h6>Contactenos</h6>
        </FooterDiv>
    );
};

export default Footer;