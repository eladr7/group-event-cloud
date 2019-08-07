import React from "react";
import Span from '../../../../GeneralAtoms/Span';
import Iframe from '../../../../GeneralAtoms/Iframe';

const IframeView = ({
  iframClassName = 'quick-view',
  title = '',
  srcUrl = '',
  frameborder = '0',
  alowRules = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  ...props
}) => (
    <div className={iframClassName}>
      <Span className="object-name">{title}</Span>
      <Iframe
        className="quick-view-image"
        src={srcUrl}
        frameborder={frameborder}
        allow={alowRules}
        {...props}
      >
      </Iframe>
    </div>
  );
export default IframeView;