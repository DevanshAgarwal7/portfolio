import React, { useState } from "react";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import './Portfolio.css';
import { motion, useScroll, useMotionValueEvent, easeInOut } from "framer-motion";

function Portfolio() {
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if(latest > previous && latest > 50){
            setHidden(true);
        } else{
            setHidden(false);
        }
    })
    return (
        <React.Fragment>
            <div className="portfolio-page">
                <div className="navbar-div">
                    <motion.nav 
                    variants={{
                        visible: {y:0},
                        hidden: {y: "-100%"}
                    }}
                    animate={hidden ? "hidden": "visible"}
                    transition={{duration: "0.35", ease: easeInOut}}
                    id="portfolio-navbar" className="navbar px-3 mb-3 custom-navbar">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href="#introduction">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#work-experience">Work Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cerfications">Certificates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Me</a>
                            </li>
                        </ul>
                    </motion.nav>
                    <div data-bs-spy="scroll" data-bs-target="#portfolio-navbar" data-bs-root-margin="100px 0px 0px 0px" data-bs-smooth-scroll="true" className="scrollspy-navbar bg-body-tertiary" tabIndex="0">
                        <div className="porfolio-components">
                            <div id="introduction">
                                <Introduction />
                            </div>
                            <div id="work-experience">
                                <WorkExperience />
                            </div>
                            <div id="skills">
                                <Skills />
                            </div>
                            <div id="education">
                                <Education />
                            </div>
                            <div id="projects">
                                <Projects />
                            </div>
                            <div id="cerfications">
                                {/* < /> */}
                            </div>
                            <div id="contact">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Portfolio;