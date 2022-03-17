import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Content() {
    return (
        <main className="main-content">
            <h3 className="name">Syahreza Pratama</h3>
            <p className="occupation">Business Information System Student</p>
            <div className="buttons">
                <button type="button" className="btn-email" onClick="window.location.href='google.com'">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>
                </button>
                <button type="button" className="btn-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </button>
            </div>
            <div className="description">
                <h4 className="title">About</h4>
                <p className="text">
                    I am a Bachelor Student studying Business
                    Information System at Technical University of Brandenburg, Germany.
                    I'm interested in frontend development and planning to pursue
                    a career in the future as a full stack developer. 
                </p>
                <h4 className="title">Interests</h4>
                <p className="text">
                    Film photography enthusiast. 
                    Non-fiction and self development books reader. 
                    Movies, food, music, and the internet.
                </p>
            </div>
        </main>
    );
}

export default Content;