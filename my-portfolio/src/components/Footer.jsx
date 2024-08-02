import React, { useState } from "react";
import '../styling/Footer.css';
import { Cursor } from "react-simple-typewriter";

function Footer() {
    const contactInformation = {
        email: "devaagarwal914@gmail.com",
        whatsappLink: "https://wa.me/+917835897704",
        linkedinLink: "https://www.linkedin.com/in/devansh--agarwal",
        instagramLink: "https://www.instagram.com/devansh___28/"
    }

    const initialQueryDetails = {
        email: "username@domain.com",
        firstName: "First Name",
        lastName: "Last Name",
        description: ""
    }
    const[queryDetails, setQueryDetails] = useState(initialQueryDetails);
    const[formMessageStatus, setFormMessageStatus] = useState({message: null , showStatus: false});
    const setFormMessageStatusAfterChecking = (message) => {
        setFormMessageStatus({message: message, showStatus: true});
        setTimeout(() => {
            setFormMessageStatus({message: null, showStatus: false});
        }, 4000);
    }

    const handleChange = (event) => {
        setQueryDetails(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(queryDetails.email === initialQueryDetails.email){
            setFormMessageStatusAfterChecking("Please Enter Your Valid E-mail.")
        } else if(queryDetails.firstName === initialQueryDetails.firstName){
            setFormMessageStatusAfterChecking("Please Enter Your First Name.")
        }else if(queryDetails.lastName === initialQueryDetails.lastName){
            setFormMessageStatusAfterChecking("Please Enter Your Last Name.")
        }else if(queryDetails.description === initialQueryDetails.description){
            setFormMessageStatusAfterChecking("Please Enter Description.")
        } else{
            console.log(queryDetails);
            setQueryDetails(initialQueryDetails);
        }
    }

    const handleReset = () => {
        setQueryDetails(initialQueryDetails);
    }

    return (
        <React.Fragment>
            <div className="footer_component">
                <div className="d-flex flex-row mb-3 justify-content-start align-items-center flex-wrap footer_flex">
                    <div className="p-2 footer_flex_item_1">
                        <div className="d-flex flex-column justify-content-center align-items-center p-2 footer_flex_item_1_form">
                            <div className="footer_flex_item_1_form-item">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="mb-3">
                                        <label htmlFor="email" class="form-label">E-mail Address <span className="mandatory_mark">*</span></label>
                                        <input type="email" class="form-control" id="email" name="email" placeholder={initialQueryDetails.email} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fname" class="form-label">First Name <span className="mandatory_mark">*</span></label>
                                        <input type="text" class="form-control" id="fname" name="firstName" placeholder={initialQueryDetails.firstName} onChange={handleChange} />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="lname" class="form-label">Last Name <span className="mandatory_mark">*</span></label>
                                        <input type="text" class="form-control" id="lname" name="lastName" placeholder={initialQueryDetails.lastName} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" class="form-label">Description <span className="mandatory_mark">*</span></label>
                                        <textarea class="form-control" id="description" rows="3" name="description" value={initialQueryDetails.description} onChange={handleChange} ></textarea>
                                    </div>
                                    <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                                            <button type="submit" class="btn btn-light form_button">Submit</button>
                                            <button type="button" class="btn btn-light form_button" onClick={handleReset}>Reset</button>
                                    </div>
                                    <div className="form_message">
                                        {formMessageStatus.showStatus &&  <p>{formMessageStatus.message}</p>}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="p-2 mx-4 footer_flex_item_2">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h6 style={{ color: "yellow" }}>Contact Details<Cursor /></h6>
                            <div>
                                <strong style={{ color: "yellow" }}>E-mail: </strong>{contactInformation.email}
                            </div>
                            <div>
                                <strong style={{ color: "yellow" }}>Mobile Number : </strong>+91 78358-97704
                            </div>
                            <h6 className="mt-2" style={{ color: "yellow" }}>Quick Links<Cursor /></h6>
                            <div>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <div className="p-2 px-3 mail">
                                        <a href={`mailto:${contactInformation.email}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="p-2 px-3 linkedin">
                                        <a href={contactInformation.linkedinLink} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="p-2 px-3 whatsapp">
                                        <a href={contactInformation.whatsappLink} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="p-2 instagram">
                                        <a href={contactInformation.instagramLink} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Footer;