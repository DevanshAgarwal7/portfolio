import React from "react";
import '../styling/Skills.css';
import { Cursor } from "react-simple-typewriter";

function Skills() {
    const mySkills = ["Java", "Spring Boot", "Spring", "Hibernate", "JUnit", "Data Structures",  "OOPS", "AWS", "Microservices", "Microfrontends", "Docker", "GIT", "Angular", "React.js", "Node.js", "HTML", "CSS", "Javascript", "MYSQL", "NoSQL"];
    return (
        <React.Fragment>
            <div className="skills_component">
                <h2>Skills<Cursor /></h2>
                <div className="skills_defined">
                <div className="container overflow-hidden text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 justify-content-center">
                        {
                            mySkills.map((mySkill, index) => (
                                <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 skill" key={index}>{mySkill}</div>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;