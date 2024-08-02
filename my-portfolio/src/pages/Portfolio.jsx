import React from "react";
import { Navbar } from "react-bootstrap";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Portfolio() {
    return ( 
        <React.Fragment>
            {/* <Navbar /> */}
            <Introduction />
            <Skills />
            <Footer />
        </React.Fragment>
     );
}

export default Portfolio;