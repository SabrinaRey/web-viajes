import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;
  position: relative;
  a {
    margin: 20px;
    font-family: "Roboto", helvetica, Arial, sans-serif;
    font-size: 15px;
    color: #0033cc;
    text-decoration: none;
  }

  a:hover {
    color: #d5e1df;
  }
`;
const Footer = () => {
  return (
    <FooterDiv>
      <a href=" ">Sobre Nosotras</a>
      <a href="">Contactenos</a>
    </FooterDiv>
  );
};

export default Footer;
