import React from "react";

import Intro from "./components/Intro";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.scss";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
