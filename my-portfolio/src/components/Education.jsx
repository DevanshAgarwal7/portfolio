import React from "react";
import '../styling/Education.css';
import { Cursor } from "react-simple-typewriter";

function Education() {
    const educationDetails = {
        educationDetail1: {
            collegeOrSchoolName: "Raj Kumar Goel Institute of Technology (RKGIT)",
            deparment: "Bachelor Of Technology in CSE",
            timeline: "August 2019 - July 2023",
            result: "CGPA: 9.13",
            description: [
                "Developed and optimized RESTful endpoints using Spring Boot, resulting in improvement in overall application performance and a seamless user experience with  response time.", "Hands-on with the concepts of Microservices, Microfrontends, Docker and How teamwork in a collaborative way to develop a production-ready application.",
                "Hands-on with the concepts of Amazon Web Services (AWS) and Docker images. upload the Backend applications on EC2 services for pre-production testing and used RDS, Elastic BeanStalk, and CDN services for serving applications to users."
            ]
        },
        workExperience2: {
            collegeOrSchoolName: "Geeta Sanjay Memorial Public School",
            deparment: "XIIth in Science, (CBSE)",
            timeline: "April 2018 - March 2019",
            result: "Percentage: 91%",
            description: [
                "Demonstrated proficiency in Object-Oriented Programming and work on popular Frameworks.", "Developed Result portal. The front end is developed in Angular and Backed is developed in Spring Boot.",
                "Developed Restful End Points for Teachers and Students. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        }
    }

    return ( 
        <React.Fragment>
            <div className="education_component">
                <h2>Education<Cursor /></h2>
                <div className="education_div">
                    {Object.keys(educationDetails).map((key, index) => {
                        const experience = educationDetails[key];
                        return (
                            <div key={index} className="card each_education_div">
                                <div class="card-header each_education__header">
                                    <div className=" each_education_header_flex">
                                        <div className="p-2 mx-5"><h6>{experience.collegeOrSchoolName}</h6></div>
                                        <div className="p-2 mx-5 each_education_timeline"><h6>{experience.timeline}</h6></div>
                                    </div>
                                    <div className="d-flex flex-row mb-1 justify-content-between align-items-center flex-wrap">
                                        <div className="p-2 mx-5 each_education_detail">{experience.deparment}</div>
                                        <div className="p-2 mx-5 each_education_detail">{experience.result}</div>
                                    </div>
                                </div>
                                <div class="card-body each_education_body">
                                    <ul>
                                        {experience.description.map((description, idx) => (
                                            <li key={idx} className="each_education_each_description_listitem">{description}</li>
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

export default Education;