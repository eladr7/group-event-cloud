import React from 'react';

const Info = ({
  className = 'info',
  divCN = 'mb-12',
  h4CN = 'inline mr12',
  data = 'information of info',
  title = 'title of info',
  ...props
}) => (
  <div className={className}>
    <div className={divCN}>{data}</div>
    <h4 className={h4CN}>{title}</h4>
  </div>
);

export default Info;
