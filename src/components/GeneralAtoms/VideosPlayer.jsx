import React from 'react';
import YouTube from 'react-youtube';

const VideosPlayer = ({ children, ...props }) => (
  <YouTube {...props}>{children}</YouTube>
);

export default VideosPlayer;
