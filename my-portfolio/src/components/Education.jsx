import React from "react";
import '../styling/Education.css';
import { Cursor } from "react-simple-typewriter";

function Education() {
    const educationDetails = {
        educationDetail1: {
            collegeOrSchoolName: "Raj Kumar Goel Institute of Technology (RKGIT)",
            deparment: "Bachelor Of Technology in Computer Science and Engineering",
            timeline: "August 2019 - July 2023",
            result: "CGPA: 9.13",
            description: [
                "He is an enthusiastic and dedicated Computer Science student with a strong academic background and skilled in Data Structures & Alogorithms, OOPS concepts, various programming languages and frameworks.",
                 "He participated in a Technical Paper Presentation and secured 1st rank in it organized by the Computer Science and Engineering Department and Won the title of Presentor.",
                 "He has Solved 500+ Data Structures and Algorithms questions on various coding platforms.",
                "He participated in Coding Battle organized by college on the Code Chef Platform and secured 3rd position in it, won the title of Code O Geek.",
                "He is an Associate Founder of SPIC Society - A Society of EII Department of Raj Kumar Goel Institute of Technology."
            ]
        },
        workExperience2: {
            collegeOrSchoolName: "Geeta Sanjay Memorial Public School",
            deparment: "Senior Secondary in Science (PCM), (CBSE Board)",
            timeline: "April 2018 - March 2019",
            result: "Percentage: 91%",
            description: [
                "He is an enthusiastic and passionate student, he has strong analytical skills through solving advanced problems and engaging in discussions with peers and teachers.", 
                "He achieved an overall percentage of 91% in the 12th board examinations, with notable scores of 95 in Physics, 95 in Chemistry, and 95 in Mathematics.",
                "He is ranked among the top 5 students in the school for PCM subjects.",
                "His experience in 12th class was pivotal in shaping the academic interests. The challenges he faced and the knowledge gained have prepared him for future academic endeavors and professional pursuits."
            ]
        }
    }

    return ( 
        <React.Fragment>
            <div className="education_component">
                <h2 style={{color: "yellow"}}>Education<Cursor /></h2>
                <div className="education_div">
                    {Object.keys(educationDetails).map((key, index) => {
                        const experience = educationDetails[key];
                        return (
                            <div key={index} className="card each_education_div">
                                <div className="card-header each_education_header">
                                    <div className=" each_education_header_flex">
                                        <div className="p-2 mx-5"><h6>{experience.collegeOrSchoolName}</h6></div>
                                        <div className="p-2 mx-5 each_education_timeline"><h6>{experience.timeline}</h6></div>
                                    </div>
                                    <div className="d-flex flex-row mb-1 justify-content-between align-items-center flex-wrap">
                                        <div className="p-2 mx-5 each_education_department">{experience.deparment}</div>
                                        <div className="p-2 mx-5 each_education_result">{experience.result}</div>
                                    </div>
                                </div>
                                <div className="card-body each_education_body">
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