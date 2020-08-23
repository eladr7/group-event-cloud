import React from 'react';

import Img from '../../../GeneralAtoms/Img';

const PopupModalIcon = ({
  onClick,
  imgSrc,
  imgAlt,
  ...props
}) => (
  <div>
    <a 
      className="popup-modal-icon"
      href="#"
      onClick={onClick}
    >
      <Img src={imgSrc} alt={imgAlt} {...props}/>
    </a>
  </div>
);

export default PopupModalIcon;
