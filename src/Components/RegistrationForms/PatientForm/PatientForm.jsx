import React from "react";
import "./PatientForm.css";
import RegistrationOptionAvatar from '../../Images/Picture/signUp.png';
import NavBar from "../../NavBar/NavBar";


const PatientForm = () => {
  return (
    <div className="Patient__Form">
      {" "}
      {/* Get Started page for Registration category selection */}
      {/* Nav Bar Section */}
      <NavBar/>
      {/* Registration Selection */}
      <div className="Patient__Form-content">
        <div className="Patient__Form-header">
          <h1>Patient Registration Form</h1>
          <div className="Patient__Form-fill">
                <form className="Patient-form" action="">
                <span>Full Name</span> <input type="text" placeholder="John Doe"  required/>
                    <span>Date of Birth</span> <input type="date" />
                    <span>Contact</span> <input type="text" placeholder="+2507811111111" required/>
                    <span>Email</span> <input type="email" placeholder="doctor250@gmail.com" required />
                    <span>Home Address</span> <input type="text" placeholder="Remera" required />
                    <span>Password</span> <input type="password" placeholder="123456" required/>
                    <span>Comfirmed</span> <input type="password" placeholder="123456" required />
                    <button type="Submit">Submit</button>
                </form>
          </div>
          </div>
        <div className="Patient__Form-Avatar-Background">
          <img id="Patient__Form-Avatar" src={RegistrationOptionAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PatientForm;