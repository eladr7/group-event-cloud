import React, { Component } from "react";

import Img from '../../../GeneralAtoms/Img';

const NoResults = ({
  imgSrc = "https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png",
  imgAlt = 'Empty Tree',
  title = 'Sorry, no objects matched your search!',
  suggestionMsg = 'Enter a different keyword and try.',
  ...props
}) => (
  <div className="no-results">
        <Img
          src={imgSrc}
          alt={imgAlt}
          {...props}
        />
        <h2>{title}</h2>
        <p>{suggestionMsg}</p>
  </div>
);

export default NoResults;

// const NoResults = () => {
//   return (
//     <div className="no-results">
//         <Img
//           src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
//           alt="Empty Tree"
//         />
//         <h2>Sorry, no objects matched your search!</h2>
//         <p>Enter a different keyword and try.</p>
//     </div>
//   );
// };
