import React, { Component } from "react";
import "../scss/style.scss";
import FooterLinks from './molecules/FooterLinks'
import FooterSignature from './atoms/FooterSignature'

const Footer = props => {
  return (
    <footer>
      <FooterLinks 
        footerLinks={props.footerLinks}
      />
      
      <FooterSignature
        year="2019"
        stronged="Group event"
        phrase="Acting class"
      />
    </footer>
  );
};

export default Footer;
