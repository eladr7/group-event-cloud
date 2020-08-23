import React from "react";
import Span from '../../../../GeneralAtoms/Span';
// import Iframe from '../../../../GeneralAtoms/Iframe';
import VideosPlayer from '../../../../GeneralAtoms/VideosPlayer';

const IframeView = ({
  iframClassName = 'quick-view',
  title = '',
  srcUrl,
  opts,
  onReady,
  ...props
}) => (
    <div className={iframClassName}>
      <Span className="object-name">{title}</Span>
      {(srcUrl != null) ? (<VideosPlayer
        className="quick-view-image"
        videoId={srcUrl}
        opts={opts}
        onReady={onReady}
        {...props}
      >
      </VideosPlayer>) : null}
      
    </div>
  );
export default IframeView;

// const IframeView = ({
//   iframClassName = 'quick-view',
//   title = '',
//   srcUrl = '',
//   frameborder = '0',
//   alowRules = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
//   ...props
// }) => (
//     <div className={iframClassName}>
//       <Span className="object-name">{title}</Span>
// <Iframe
// className="quick-view-image"
// src={srcUrl}
// frameborder={frameborder}
// allow={alowRules}
// {...props}
// >
// </Iframe>);