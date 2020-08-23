import React from 'react';

const Iframe = ({ children, ...props }) => (
  <iframe {...props}>{children}</iframe>
);

export default Iframe;
