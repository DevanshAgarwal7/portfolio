import React from "react";
import '../styling/Projects.css';
import { Cursor } from "react-simple-typewriter";

function Projects() {
    const projectsDetail = {
        project1: {
            projectName: "E-Banka",
            projectTechnology: "React.js, Spring Boot, Bootstrap, GIT, MySQL",
            projectLink: "Github",
            projectDescription: [
                "Developed and optimized RESTful endpoints using Spring Boot, resulting in improvement in overall application performance and a seamless user projectDetail with  response time.", "Hands-on with the concepts of Microservices, Microfrontends, Docker and How teamwork in a collaborative way to develop a production-ready application.",
                "Hands-on with the concepts of Amazon Web Services (AWS) and Docker images. upload the Backend applications on EC2 services for pre-production testing and used RDS, Elastic BeanStalk, and CDN services for serving applications to users."
            ]
        },
        project2: {
            projectName: "Your Own Notes",
            projectTechnology: "Apprentineship",
            projectLink: "July 2022 - August 2022",
            projectDescription: [
                "Demonstrated proficiency in Object-Oriented Programming and work on popular Frameworks.", "Developed Result portal. The front end is developed in Angular and Backed is developed in Spring Boot.",
                "Developed Restful End Points for Teachers and Students. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        },
        project3: {
            projectName: "Your Own Notes",
            projectTechnology: "Apprentineship",
            projectLink: "July 2022 - August 2022",
            projectDescription: [
                "Demonstrated proficiency in Object-Oriented Programming and work on popular Frameworks.", "Developed Result portal. The front end is developed in Angular and Backed is developed in Spring Boot.",
                "Developed Restful End Points for Teachers and Students. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        },
        project4: {
            projectName: "Your Own Notes",
            projectTechnology: "Apprentineship",
            projectLink: "July 2022 - August 2022",
            projectDescription: [
                "Demonstrated proficiency in Object-Oriented Programming and work on popular Frameworks.", "Developed Result portal. The front end is developed in Angular and Backed is developed in Spring Boot.",
                "Developed Restful End Points for Teachers and Students. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        }
    }
    return (
        <React.Fragment>
            <div className="project_component">
                <h2>Projects<Cursor /></h2>
                <div className="work_projectdetail_div container">
                    <div className="row g-5 justify-content-center">
                        {
                            Object.keys(projectsDetail).map((key, index) => {
                                const projectDetail = projectsDetail[key];
                                return (

                                    <div className="col-6 project" key={index}>
                                        <div key={index} className="card each_project_grid_item_div">
                                            <div className="card-header each_project_grid_item_header">
                                                <div className="d-flex flex-column mb-1 justify-content-center align-items-center">
                                                    <div className="p-2 mx-5"><h6>{projectDetail.projectName}</h6></div>
                                                    <div className="p-2 mx-5 each_project_grid_item_projectLink"><h6>{projectDetail.projectTechnology}</h6></div>
                                                    <div className="p-2 mx-5 each_project_grid_item_projectTechnology">{projectDetail.projectLink}</div>
                                                </div>
                                            </div>
                                            <div className="card-body each_project_grid_item_body">
                                                <ul>
                                                    {projectDetail.projectDescription.map((projectDescription, idx) => (
                                                        <li key={idx} className="each_project_grid_item_each_projectDescription_listitem">{projectDescription}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Projects;