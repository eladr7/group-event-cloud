import React from 'react';

const Span = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);

export default Span;
