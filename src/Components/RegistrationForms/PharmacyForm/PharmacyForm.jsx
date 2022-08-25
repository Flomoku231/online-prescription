import React from "react";
import "./PharmacyForm.css";
import RegistrationOptionAvatar from '../../Images/Picture/signUp.png';
import NavBar from "../../NavBar/NavBar";


const PharmacyForm = () => {
  return (
    <div className="Doctor__Form">
      {" "}
      {/* Get Started page for Registration category selection */}
      {/* Nav Bar Section */}
      <NavBar/>
      {/* Registration Selection */}
      <div className="Pharmacy__Form-content">
        <div className="Pharmacy__Form-header">
          <h1>Pharmacy Registration Form</h1>
          <div className="Pharmacy__Form-fill">
                <form className="Pharmacy-form" action="">
                <span>Pharmacy Name</span> <input type="text" placeholder="RITE Pharmacy"  required/>
                    <span>Address</span> <input type="text" placeholder="Remera" required />
                    <span>Contact</span> <input type="text" placeholder="+2507811111111" required/>
                    <span>Email</span> <input type="email" placeholder="doctor250@gmail.com" required />
                    <span>Password</span> <input type="password" placeholder="123456" required/>
                    <span>Comfirmed</span> <input type="password" placeholder="123456" required />
                    <button type="Submit">Submit</button>
                </form>
          </div>
          </div>
        <div className="Pharmacy__Form-Avatar-Background">
          <img id="Pharmacy__Form-Avatar" src={RegistrationOptionAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PharmacyForm;
