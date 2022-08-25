import React from "react";
import "./Option.css";
import { Link } from "react-router-dom";
import onlinePrescriptionLogo from "../../Components/Images/Picture/Logo.png";
import RegistrationOptionAvatar from "../../Components/Images/Picture/signUp.png";
import NavBar from "../NavBar/NavBar";

const Option = () => {
  return (
    <div className="Registration__Options">
      {" "}
      {/* Get Started page for Registration category selection */}
      {/* Nav Bar Section */}
      <NavBar/>
      {/* Registration Selection */}
      <div className="Registration__Options-conten">
        <div className="Content__Select">
          <h1>Register As</h1>
          <div className="Content__Selection-menu">
            <div className="Selection-box">
              <ul className="Selection__Menu">
                <Link id="Selected" to="/doctorform">
                  {" "}
                  <li>
                    {" "}
                    <h3>Doctor</h3>
                  </li>
                </Link>
                <Link id="Selected" to="/patientform">
                  {" "}
                  <li>
                    {" "}
                    <h3>Patient</h3>
                  </li>
                </Link>
                <Link id="Selected" to="/pharmacyform">
                  {" "}
                  <li>
                    {" "}
                    <h3>Pharmacy</h3>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="Selection-boxButtonText">
              <h2>Already Have An Account?</h2>
              <a id="Have__Account" href="/">
                <h3>Login</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="Registration__Option-Avatar-Background">
          <img id="Option__Avatar" src={RegistrationOptionAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Option;
