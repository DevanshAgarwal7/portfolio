import React from "react";
import { Navbar } from "react-bootstrap";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";

function Portfolio() {
    return ( 
        <React.Fragment>
            {/* <Navbar /> */}
            <Introduction />
            <Skills />
        </React.Fragment>
     );
}

export default Portfolio;