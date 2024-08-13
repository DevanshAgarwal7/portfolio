import React from "react";
import { Navbar } from "react-bootstrap";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

function Portfolio() {
    return ( 
        <React.Fragment>
            {/* <Navbar /> */}
            <Introduction />
            <WorkExperience />
            <Skills />
            <Education />
            <Footer />
        </React.Fragment>
     );
}

export default Portfolio;