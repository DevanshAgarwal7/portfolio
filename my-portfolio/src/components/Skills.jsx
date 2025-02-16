import React from "react";
import '../styling/Skills.css';
import { Cursor } from "react-simple-typewriter";
import javaLogo from '../assets/Skills/java.png';
import liferayLogo from '../assets/Skills/liferay.png';
import springbootLogo from '../assets/Skills/Spring_boot.png';
import springLogo from '../assets/Skills/Spring.png';
import jUnitLogo from '../assets/Skills/JUnit.png';
import dsaLogo from '../assets/Skills/dsa.png';
import oopsLogo from '../assets/Skills/oops.png'
import awsLogo from '../assets/Skills/aws.png';
import microservicesLogo from '../assets/Skills/microservices.png';
import microfrontendsLogo from '../assets/Skills/microfrontends.png';
import dockerLogo from '../assets/Skills/docker.png';
import gitLogo from '../assets/Skills/git.png';
import angularLogo from '../assets/Skills/Angular.png';
import reactLogo from '../assets/Skills/react.png';
import htmlLogo from '../assets/Skills/html.png';
import bootstrapLogo from '../assets/Skills/bootstrap.png';
import cssLogo from '../assets/Skills/CSS.png';
import jsLogo from '../assets/Skills/JS.png';
import mysqlLogo from '../assets/Skills/mysql.png';
import nosqlLogo from '../assets/Skills/noSQL.png';

function Skills() {
    const mySkills = [
        { skillName: "Java", skillLogo: javaLogo },
        { skillName: "Liferay DXP", skillLogo: liferayLogo },
        { skillName: "Spring", skillLogo: springLogo },
        { skillName: "Spring Boot", skillLogo: springbootLogo },
        { skillName: "JUnit", skillLogo: jUnitLogo },
        { skillName: "Data Structures", skillLogo: dsaLogo },
        { skillName: "OOPS", skillLogo: oopsLogo },
        { skillName: "AWS", skillLogo: awsLogo },
        { skillName: "Microservices", skillLogo: microservicesLogo },
        { skillName: "Microfrontends", skillLogo: microfrontendsLogo },
        { skillName: "Docker", skillLogo: dockerLogo },
        { skillName: "GIT", skillLogo: gitLogo },
        { skillName: "Angular", skillLogo: angularLogo },
        { skillName: "React.js", skillLogo: reactLogo },
        { skillName: "HTML", skillLogo: htmlLogo },
        { skillName: "CSS", skillLogo: cssLogo },
        { skillName: "Bootstrap", skillLogo: bootstrapLogo },
        { skillName: "Javascript", skillLogo: jsLogo },
        { skillName: "MYSQL", skillLogo: mysqlLogo },
        { skillName: "No SQL", skillLogo: nosqlLogo }
      ];
      
    return (
        <React.Fragment>
            <div className="skills_component">
                <h2>Skills<Cursor /></h2>
                <div className="skills_defined">
                <div className="container overflow-hidden text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 justify-content-center">
                        {
                            mySkills.map((mySkill, index) => (
                                <React.Fragment key={index}>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 skill">
                                    <img src={mySkill.skillLogo} className="img-fluid" alt={mySkill.skillName} />
                                    <div className="skillName">{mySkill.skillName}</div>
                                </div>
                                </React.Fragment>
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