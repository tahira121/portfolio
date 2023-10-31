import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any question you may have about
                freelance writing or content marketing!
            </h4>
            <div className="content-option">
                <FaPhoneAlt />
                <span className="text">+91 3467170121</span>
            </div>
            <div className="content-option">
                <MdEmail />
                <span className="text">tahirashabban121@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
