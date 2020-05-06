import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
 margin-bottom:15px;
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
    <FooterContainer>
      <Link to="/about-us">Sobre Nosotras</Link>
      <Link to="/contact-us">Contactenos</Link>
    </FooterContainer>
  );
};

export default Footer;
