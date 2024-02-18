/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";

export const SEO = ({ title, description, name, type, image, socialLinks, tags }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="keywords" content={tags}></meta>
            <meta name="google-site-verification" content="Haio5E0BtLUAwiECRPWpfa5LqA70sBDyYFJqFjaRQCY" />
            {image && <meta property="og:image" content={image} />}
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
            {/* End Twitter tags */}

            {/* Social media links */}
            {socialLinks &&
                socialLinks.map((social, index) => (
                    <meta
                        key={index}
                        property={`og:${social.icon}`}
                        content={social.link}
                    />
                ))}
            {/* End Social media links */}
        </Helmet>
    );
};
