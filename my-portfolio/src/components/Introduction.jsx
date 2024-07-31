import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import '../styling/Introduction.css';
import profilePic from '../assets/Image.jpeg'

function Introduction() {
    const [myRole] = useTypewriter({
        words: ["a Software Developer", "a Web Developer", "an Explorer"],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 120,
    });
    return (
        <React.Fragment>
            <div className="introduction_component">
                <div className="d-flex flex-row mb-3 justify-content-center align-items-center flex-wrap">
                    <div className="p-2 mx-5 content-flex-item">
                        <div className="card" style={{ border: "none" }}>
                            <div className="card-body intro-content" style={{ backgroundColor: "rgb(30, 30, 30)", color: "white" }}>
                                <span className="hello">Hello,</span>
                                <span className="intro-text">I'm <span className="intro-name">Devansh Agarwal</span><br /><span className="intro-role">I'm <span style={{ color: "yellow" }}>{myRole}</span></span><Cursor /></span>
                                <p className="card-text intro-summary">Logical and organized individual with a robust foundation in Software
                                    Engineering. Demonstrated versatility in playing key roles as a proactive
                                    developer, contributing to the enhancement of software quality and functionality.
                                    Known for excellent teamwork, and good communication skills, which have been
                                    instrumental in fostering collaborative environments and driving successful
                                    project outcomes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card" style={{ border: "none", backgroundColor: "rgb(30, 30, 30)", color: "white" }}>
                            <img src={profilePic} class="card-img-center profile-pic" alt="Profile Pic" />
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Introduction;