import React from 'react';

import DelimitedAlink from '../atoms/DelimitedAlink';

const FooterLinks = ({ footerLinks, ...props }) => {
    const slicedFooterLinks = footerLinks.slice(0, footerLinks.length - 1);
    const lastLink = footerLinks[footerLinks.length - 1];

    return (
        <p className="footer-links" {...props}>
            {slicedFooterLinks.map((footerLink, index) =>
                <DelimitedAlink
                    href={footerLink.link}
                    target="_blank"
                >{footerLink.title}</DelimitedAlink>)}

            <a href={lastLink.link} target="_blank"> {lastLink.title} </a>
        </p>
    );
};

export default FooterLinks;
