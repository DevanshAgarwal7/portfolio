import React from "react";
import { Navbar } from "react-bootstrap";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorkExperience";

function Portfolio() {
    return ( 
        <React.Fragment>
            {/* <Navbar /> */}
            <Introduction />
            <WorkExperience />
            <Skills />
            <Footer />
        </React.Fragment>
     );
}

export default Portfolio;