import React from "react";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import './Portfolio.css';

function Portfolio() {
    return (
        <React.Fragment>
            <div className="portfolio-page">
                <div className="navbar-div">
                    <nav id="portfolio-navbar" className="navbar px-3 mb-3 custom-navbar">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingHome">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingWorkExperience">Work Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingSkills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingEducation">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingProjects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingCertificates">Certificates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeadingContactMe">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                    <div data-bs-spy="scroll" data-bs-target="#portfolio-navbar" data-bs-root-margin="100px 0px 0px 0px" data-bs-smooth-scroll="true" className="scrollspy-navbar bg-body-tertiary" tabIndex="0">
                        <div className="porfolio-components">
                            <div id="scrollspyHeadingHome">
                                <Introduction />
                            </div>
                            <div id="scrollspyHeadingWorkExperience">
                                <WorkExperience />
                            </div>
                            <div id="scrollspyHeadingSkills">
                                <Skills />
                            </div>
                            <div id="scrollspyHeadingEducation">
                                <Education />
                            </div>
                            <div id="scrollspyHeadingProjects">
                                <Projects />
                            </div>
                            <div id="scrollspyHeadingCertificates">
                                {/* < /> */}
                            </div>
                            <div id="scrollspyHeadingContactMe">
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