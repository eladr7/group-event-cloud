import React from 'react';

const Img = ({ children, ...props }) => (
  <img {...props}>{children}</img>
);

export default Img;
