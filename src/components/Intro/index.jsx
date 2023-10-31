import React from "react";

import cloud from "../../images/portfolio/cloud.png";
import cloudSoft from "../../images/portfolio/cloud-soft.png";
import Navigation from "./navigation-bar";
import IntroContent from "./Intro-content";

import "./style.scss";

const Intro = () => {
    return (
        <div className="Intro-section">
            <div
                className="vector-bg"
                id="parallax"
            ></div>
            <img
                src={cloud}
                className="cloud"
            />
            <img
                src={cloudSoft}
                className="cloud-soft"
            />
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;
