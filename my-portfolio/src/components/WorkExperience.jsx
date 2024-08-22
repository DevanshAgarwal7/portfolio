import React from "react";
import '../styling/WorkExperience.css';
import { Cursor } from "react-simple-typewriter";

function WorkExperience() {

    const workExperienceDetails = {
        workExperience1: {
            company: "Nagarro Software Private Limited",
            designation: "Associate Engineer",
            timeline: "March 2023 - Present",
            workPlace: "Gurugram, Haryana, India",
            description: [
                "Developed and optimized RESTful endpoints using Spring Boot, improving overall application performance and a seamless user experience with reduced response time.", 
                "Worked on the project having the architecture of Microservices, Microfrontends, and Docker and collaboratively developed a production-ready application.",
                "Hands-on with the concepts of Amazon Web Services (AWS) and Docker images. Upload the Backend applications on EC2 services for pre-production testing and used RDS, Elastic BeanStalk, and CDN services for serving applications to users.",
                "Improved application performance and speed through optimization techniques by 20%. Successfully Identified and resolved software bugs efficiently."
            ]
        },
        workExperience2: {
            company: "IIIT Allahabad",
            designation: "Apprenticeship",
            timeline: "July 2022 - August 2022",
            workPlace: "",
            description: [
                "Demonstrated proficiency in Core Java, Web MVC, Object-Oriented Programming and popular Frameworks used in the tech industry.", 
                "Developed and optimized RESTful endpoints using Spring Boot, improving overall application performance and a seamless user experience with reduced response time.",
                "Developed a Result Portal Application, whose front end is developed in Angular and Backed is developed in Spring Boot. Created Rest APIs seperately for two roles one is Teacher and second is for Students.",
                "Authentication Credentials is required for both Teacher and Student. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        }
    }
    return (
        <React.Fragment>
            <div className="workexperience_Component">
                <h2 style={{color: "yellow"}}>Work Experience<Cursor /></h2>
                <div className="workexperience_div">
                    {Object.keys(workExperienceDetails).map((key, index) => {
                        const experience = workExperienceDetails[key];
                        return (
                            <div key={index} className="each_workexperience_div">
                                <div className="each_workexperience_header">
                                    <div className=" each_workexperience_header_flex">
                                        <div className="p-2 mx-5"><h6>{experience.company}</h6></div>
                                        <div className="p-2 mx-5 each_work_experience_timeline"><h6>{experience.timeline}</h6></div>
                                    </div>
                                    <div className="d-flex flex-row mb-1 justify-content-between align-items-center flex-wrap">
                                        <div className="p-2 mx-5 each_work_experience_designation">{experience.designation}</div>
                                        <div className="p-2 mx-5 each_work_experience_designation">{experience.workPlace}</div>
                                    </div>
                                </div>
                                <div className="card-body each_workexperience_body">
                                    <ul>
                                        {experience.description.map((description, idx) => (
                                            <li key={idx} className="each_work_experience_each_description_listitem">{description}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default WorkExperience;