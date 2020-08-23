import React from 'react';

const DelimitedAlink = ({ children, href, target, ...props }) => (
  <div className="delimitedAlink">
    <a href={href} target={target} {...props}>{children}</a>
    <span> / </span>
  </div>
);

export default DelimitedAlink;
