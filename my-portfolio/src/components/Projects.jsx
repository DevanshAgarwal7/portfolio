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
                "Developed a Web App using React.js and Spring Boot named E-Banka. It includes functionalities for user account creation, KYC verification, money deposit, withdrawal, transfer, account statement viewing and for user personal details. The application supports two types of users: bank supervisors and end-users, with specific roles and capabilities for each. It integrates automatic logout after 2 minutes of inactivity.", 
                "Created a user-friendly and responsive Web App for user interaction.",
                "Implemented JWT authentication to ensure secure transactions. Ensured role-based access control, differentiating functionalities for bank supervisors and end-users.",
                "Developed REST APIs for account creation process with bank supervisor's KYC verification dashboard for approval or rejection of applications. Developed APIs for depositing, withdrawing, view statements and transferring money between accounts, and for user profile details updating."
            ]
        },
        project2: {
            projectName: "Your Own Notes",
            projectTechnology: "Angular, Spring Boot, Bootstrap, GIT, MySQL",
            projectLink: "GitHub",
            projectDescription: [
                "Demonstrated proficiency in Object-Oriented Programming and work on popular Frameworks.", "Developed Result portal. The front end is developed in Angular and Backed is developed in Spring Boot.",
                "Developed Restful End Points for Teachers and Students. Students can view their results by entering the Roll number and DOB. The teacher can update the marks of any student if needed."
            ]
        },
        project3: {
            projectName: "Banking Application",
            projectTechnology: "Spring Boot, Eureka & Config Server, Microservices",
            projectLink: "Github",
            projectDescription: [
                "Developed a Banking Account service which involves the opening of an account fornew customers and can update and delete the details of customer if need. It  also provides an option to customer to add and withdraw money from account following that the minimum balance should be maintained otherwise cannot withdraw money from account.", 
                "Involved in developing all the services of the project. Integrate all the services with an API Gateway to provide a single-entry point to the customers. Also Utilized Eureka server for service registration in the system.",
                " Developed the Customer Management Service with REST APIs for adding, retrieving, updating, and deleting customer details with ensured data consistency by deleting account from Account Management Service.",
                "Developed the Account Management Service with REST APIs for adding and withdrawing money, retrieving account details, and deleting account after verifying customer details."
            ]
        },
        project4: {
            projectName: "Product Community Web Application",
            projectTechnology: "Angular, SCSS, Spring Boot, GIT, JSON, MySQL",
            projectLink: "GitHub",
            projectDescription: [
                "Developed a Web App named Online Store where a customer can visit, register themselves, browse products, and post reviews on products. All the products are shown with their average rating and posted reviews. A customer can post a review on any number of products. The posted reviews are initially in pending state and can only be approved once the admin verify them and marked them approved. Only approved reviews are visible on the products review section.",
                "Created two separate applications: one is of Angular for user interaction andsecond is of Spring Boot for creating APIs with database.",
                "Developed REST APIs for User registration, authentication, post reviews, retrieving products, search product, approve review, retrieving stats data.",
                "Implemented a search functionality for users to search for the products. User can filter the searched products by name, product code, and brand."
            ]
        }
    }
    return (
        <React.Fragment>
            <div className="project_component">
                <h2 style={{ color: "yellow" }}>Projects<Cursor /></h2>
                <div className="projectdetail_div">
                    <div className="row row-cols-2 gy-5 container-fluid ">
                        {
                            Object.keys(projectsDetail).map((key, index) => {
                                const projectDetail = projectsDetail[key];
                                return (
                                    <div className="col-12 col-md-11 col-lg-5 project" key={index}>
                                        <div key={index} className="each_project_grid_item_div">
                                            <div className="each_project_grid_item_header">
                                                <div className="d-flex flex-column mb-1 justify-content-center align-items-center">
                                                    <div className="p-2 mx-5"><h6 className="each_project_name">{projectDetail.projectName}</h6></div>
                                                    <div className="p-2 mx-5 each_project_grid_item_project_technology">{projectDetail.projectTechnology}</div>
                                                    <div className="p-2 mx-5 each_project_grid_item_project_link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                    </svg>  <a href="" target="_blank">GitHub</a></div>
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