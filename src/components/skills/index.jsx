import React from "react";

import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import TechIcons from "../../images/portfolio/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/My ";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Technical Skills Languages | JavaScript, CSS, HTML, HTML
                        5, CSS3, and TypeScript|.React Tools | React.js,
                        Webpack, Enzyme, Redux, and Flux.| Frameworks | Angular,
                        Mocha, Vue.js, Ember.js, and Jest|. *AR and Creative* |
                        8th wall, A-frame, Spark AR, Lens Studio, and Adobe
                        Illustrator. Education and Certifications BS in Computer
                        Science from Islamiya University BWP, ReactJS Developer
                        Certification, Vskills, Online Full Stack Web
                        Development Certification, Coursera, Online.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
