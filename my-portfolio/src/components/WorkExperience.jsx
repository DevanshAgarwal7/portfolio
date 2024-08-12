import React from "react";
import '../styling/WorkExperience.css';
import { Cursor } from "react-simple-typewriter";

function WorkExperience() {

    const workExperienceDetails = {
        workExperience1: {
            company: "Nagarro Software Private Limited",
            designation: "Associate Engineer",
            timeline: "March 2023 - Present",
            description: [
                "Developed and optimized RESTful endpoints using Spring Boot, resulting in improvement in overall application performance and a seamless user experience with  response time.", "Hands-on with the concepts of Microservices, Microfrontends, Docker and How teamwork in a collaborative way to develop a production-ready application.",
                "Hands-on with the concepts of Amazon Web Services (AWS) and Docker images. upload the Backend applications on EC2 services for pre-production testing and used RDS, Elastic BeanStalk, and CDN services for serving applications to users."
            ]
        },
        workExperience2: {
            company: "IIIT Allahabad",
            designation: "Apprentineship",
            timeline: "July 2022 - August 2022",
            description: [
                "Demonstrated proficiency in Object-Oriented Programming and work on popular Frameworks.", "Developed Result portal. The front end is developed in Angular and Backed is developed in Spring Boot.",
                "Developed Restful End Points for Teachers and Students. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        }
    }
    return (
        <React.Fragment>
            <div className="workexperience_Component">
                <h2>Work Experience<Cursor /></h2>
                <div className="workexperience_div">
                    {Object.keys(workExperienceDetails).map((key, index) => {
                        const experience = workExperienceDetails[key];
                        return (
                            <div key={index} className="card each_workexperience_div">
                                <div class="card-header each_workexperience_header">
                                    <div className=" each_workexperience_header_flex">
                                        <div className="p-2 mx-5"><h6>{experience.company}</h6></div>
                                        <div className="p-2 mx-5 each_work_experience_timeline"><h6>{experience.timeline}</h6></div>
                                    </div>
                                    <div className="d-flex flex-row mb-1 justify-content-start align-items-center">
                                        <div className="p-2 mx-5 each_work_experience_designation">{experience.designation}</div>
                                    </div>
                                </div>
                                <div class="card-body each_workexperience_body">
                                    <ul>
                                        {experience.description.map((description, idx) => (
                                            <li key={idx} className="each_work_experience_each_deacription_listitem">{description}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div class="card">
                        <div class="card-header">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <div className="p-2 mx-5"><h6>Nagarro</h6></div>
                                <div className="p-2 mx-5"><h6>March 2023 - Present</h6></div>
                            </div>
                            <div className="d-flex flex-row mb-1 justify-content-start align-items-center">
                                <div className="p-2 mx-5">Associate Engineer</div>
                            </div>
                        </div>
                        <div class="card-body workexperience_body">
                            <ul>
                                <li>Developed and optimized RESTful endpoints using Spring Boot,
                                    resulting in improvement in overall application performance and a
                                    seamless user experience with reduced response time.</li>
                                <li>Hands-on with the concepts of Microservices, Microfrontends, Docker
                                    and How teamwork in a collaborative way to develop a production-
                                    ready application.</li>
                                <li>Hands-on with the concepts of Amazon Web Services (AWS) and
                                    Docker images. upload the Backend applications on EC2 services for
                                    pre-production testing and used RDS, Elastic BeanStalk, and CDN
                                    services for serving applications to users.</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default WorkExperience;