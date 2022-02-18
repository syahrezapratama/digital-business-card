import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="icon-twitter">
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="icon-facebook">
                <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="icon-instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="icon-github">
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </div>
    );
}

export default Footer;