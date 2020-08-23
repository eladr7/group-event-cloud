import React from 'react';
import './gridPage.css';


const GridPage = ({
  title = 'Find a scene',
  placeholder = 'Find a video',
  ...props
}) => {
  return (
    <div className="grid-page-container">
        <div className="item1">hi Suka</div>
        <div className="item2">Know that you are much Blat</div>
        <div className="item3">Ate pizdyetz</div>
        <div className="item4">Ya Nahui harasho</div>
    </div>
  );
};

export default GridPage;

{/* <SomeModal className="item1"
        />
        <DataPreview
          className="item2"
        />
        <SomeGraph className="item3"
        />
        <SomeData className="item4"
        /> */}