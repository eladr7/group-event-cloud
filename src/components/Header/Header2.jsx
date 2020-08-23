import React from 'react';

import Button from '../GeneralAtoms/Button';
import Input from '../GeneralAtoms/Input';
import CurrTab from "../MoviesTabs/currTab";
import "../scss/style.scss";


import votingForm from './PopupModal/VotingModalPreview/voting.form';
import VotingModalPreview from './PopupModal/VotingModalPreview/VotingModalPreview';
import PopupModal from './PopupModal/PopupModal';
import Logout from './logout/Logout';


const ShoppingSiteHeader = ({
  title = 'Find a scene',
  placeholder = 'Find a video',
  ...props
}) => {
  const searchItems = event => {
    const genresContainer = props.genresContainer;
    let activeTabName = CurrTab.getTabName();

    genresContainer[activeTabName].setSearchPhrase(event.target.value);
  };

  const addVideo = () => {
    let activeTabName = CurrTab.getTabName();
    const moviesContainer = props.genresContainer[activeTabName];

    let videoName = prompt('Enter a scene-name');
    let url = prompt('Insert a video URL');
    if (url === "" || videoName === "" || url === null || videoName === null) {
      return;
    }

    moviesContainer.addObject(videoName, url);
  };


  return (
    <div className="header">
      <div className="headerBox1">
        <h3>{title}</h3>
        <Input
          className="searchBox"
          type="search"
          placeholder={placeholder}
          onChange={searchItems}
          {...props}
        />
      </div>
      <Button title="Add a scene" className="add-video" onClick={addVideo}>+</Button>
      <PopupModal
        src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
        alt="Empty Tree"
        width="35px"
        height="35px"
        modalView={<VotingModalPreview form={votingForm} onSubmit={console.log("submitted blat")} />}
      />
      <Logout
        logo="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
        {...props}
      />
    </div>
  );
};
export default ShoppingSiteHeader;


// import React from 'react';

// import Button from '../GeneralAtoms/Button';
// import Input from '../GeneralAtoms/Input';
// import CurrTab from "../MoviesTabs/currTab";
// import "../scss/style.scss";

// const ShoppingSiteHeader = ({
//   title = 'Find a scene',
//   placeholder = 'Find a video',
//   ...props
// }) => {
//   const searchItems = event => {
//     const genresContainer = props.genresContainer;
//     let activeTabName = CurrTab.getTabName();

//     genresContainer[activeTabName].setSearchPhrase(event.target.value);
//   };

//   const addVideo = () => {
//     let activeTabName = CurrTab.getTabName();
//     const moviesContainer = props.genresContainer[activeTabName];

//     let videoName = prompt('Enter a scene-name');
//     let url = prompt('Insert a video URL');
//     if (url === "" || videoName === "" || url === null || videoName === null) {
//       return;
//     }

//     moviesContainer.addObject(videoName, url);
//   };

//   return (
//     <div className="header">
//       <div className="headerBox1">
//         <h3>{title}</h3>
//         <Input
//           className="searchBox"
//           type="search"
//           placeholder={placeholder}
//           onChange={searchItems}
//           {...props}
//         />
//       </div>
//       <Button title="Add a scene" className="add-video" onClick={addVideo}>+</Button>
//     </div>
//   );
// };
// export default ShoppingSiteHeader;
