import React from 'react';

const FooterSignature = ({ year, stronged, phrase, ...props }) => (
  <p {...props}>
    &copy; {year} <strong>{stronged}</strong> - {phrase}
  </p>
);

export default FooterSignature;
