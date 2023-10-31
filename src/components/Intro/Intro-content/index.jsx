import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/portfolio/girl.png";
import hand from "../../../images/portfolio/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Tahira Shabban</span>
                    </h1>
                    <p className="title">
                        For most web designers, it is not just a job; it is a
                        passion. And passion cannot exist without a good dose of
                        inspiration. The link between inspiration and creativity
                        is undeniable and, most importantly, consistent.
                    </p>
                    <CallToAction text="Contact me" />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Tahira Shabban"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
