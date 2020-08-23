import React from 'react';

import Head from './head/Head';
import './comp1.css';

const Comp1 = ({
  ...props
}) => {
  return (
    <div className="comp1-container">
      <div className="item1">HOVER BLAT!!</div>
      <Head
        className={props.headProps.className}
        divCN={props.headProps.divCN}
        h4CN={props.headProps.h4CN}
        data={props.headProps.data}
        title={props.headProps.title}
        pCN={props.headProps.pCN}
        pInfo={props.headProps.pInfo}
      />
      <div className="item3">GRAPH  BLAT!!</div>
      <div className="item4">FOOT  BLAT!!</div>
    </div>
  );
};

export default Comp1;
