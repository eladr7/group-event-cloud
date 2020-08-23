import React from 'react';
import Info from '../info/Info';

const Head = ({
  className = 'head',
  divCN = 'mb-12',
  h4CN = 'inline mr12',
  data = 'information of info',
  title = 'title of info',
  pCN = 'paragraph inline',
  pInfo = 'paragraph info',
  ...props
}) => (
    <div className={className}>
      <Info className="head-info"
        divCN={divCN}
        h4CN={h4CN}
        data={data}
        title={title}
      />
      <p className={pCN}>{pInfo}</p>
    </div>
  );

export default Head;
