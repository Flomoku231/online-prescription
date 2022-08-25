import React from "react";
import {useState} from 'react'
import Validation from '../DoctorForms/Validation/Validation'
import "./DoctorForm.css";
import RegistrationOptionAvatar from "../../Images/Picture/signUp.png";
import NavBar from "../../NavBar/NavBar";

const DoctorForm = () => {
  const useForm = (Validation) => {
    const[values, setValues] = useState({
        fullName:'',
        DOB:'',
        phoneNumber: '',
        email: '',
        hospital: '',
        hospitalAddress: '',
        password:'',
        comfirmedPassword:'',
    });
    const[errors, setErrors] = useState({});
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleSubmit = e =>{
        e.preventDefault();

     setErrors(Validation(values));
    };
    return {handleChange, values, handleSubmit, errors};
}
const {handleChange, values, handleSubmit, errors} = useForm(Validation);
  return (
    <div className="Doctor__Form">
      {" "}
      {/* Get Started page for Registration category selection */}
      {/* Nav Bar Section */}
      <NavBar  />
      {/* Registration Selection */}
      <div className="Doctor__Form-content">
        <div className="Doctor__Form-header">
          <h1>Doctor Registration Form</h1>
          <div className="Doctor__Form-fill">
            <form className="Doctor-form" action="" onSubmit={handleSubmit}>
              {/* Full Name Validation */}
                  <div className="Doctor-form--Fullname">
                        <label>Full Name</label>{" "}
                        <input name="fullName" type="text" placeholder="John Doe" 
                        value={values.fullName} onChange={handleChange} />
                        {errors.fullName && <p id="Fullname-error"> {errors.fullName} </p>} 
                  </div>
                  
               {/* Date of Birth Validation */}
               <div className="Doctor-form--DOB">
                    <label>Date of Birth</label> <input name="DOB" type="date" 
                    value={values.DOB} onChange={handleChange}/>
                    {errors.DOB && <p id="DOB-error"> {errors.DOB} </p>} 
                </div>
                  {/* Phone Number Validation */}
                      <div className="Doctor-form--Contact">
                          <label>Contact</label>{" "}
                          <input name="phoneNubmer" type="phone" placeholder="+2507811111111"
                          value={values.phoneNumber} onChange={handleChange}  />
                          {errors.phoneNumber && <p id="Contact-error"> {errors.phoneNumber} </p>} 
                      </div>
                          {/* Email Validation */}
                          <div className="Doctor-form--Email">
                              <label>Email</label>{" "}
                              <input name="email" type="email" placeholder="doctor250@gmail.com" 
                              value={values.email} onChange={handleChange} />
                              {errors.email && <p id="Email-error"> {errors.email} </p>}
                          </div>
                             
                                {/* Hospital/Clinic Validation*/}
                                <div className="Doctor-form--Hospital">
                                      <label>Hospital/Clinic</label>{" "}
                                      <input name="hospital" type="text" placeholder="POLYFAM"  
                                      value={values.hospital} onChange={handleChange}/>
                                      {errors.hospital && <p id="Hospital-error"> {errors.hospital} </p>}
                                </div>
                                      {/* Hospital/Clinic Address Validation */}
                                      <div className="Doctor-form--Hospital-Adress">
                                          <label>Hospital/Clinic Address</label>{" "}
                                          <input name="hospitalAddress" type="text" placeholder="Remera" 
                                          value={values.hospitalAddress} onChange={handleChange} />   
                                          {errors.hospitalAddress && <p id="HAddress-error"> {errors.hospitalAddress} </p>}
                                      </div>       
                                        {/* Password Validation */}
                                        <div className="Doctor-form--Password">
                                              <label>Password</label>{" "}
                                              <input name="password" type="password" placeholder="123456"  
                                              value={values.password} onChange={handleChange} />   
                                              {errors.password && <p id="Password-error"> {errors.password} </p>}
                                        </div>
                                        
                                            {/* Comfirmed Password Validation */}
                                            <div className="Doctor-form--Comfirmed-Password">
                                                  <label>Comfirmed</label>{" "}
                                                  <input name="comfirmedPassword" type="password" placeholder="123456" 
                                                  value={values.comfirmedPassword} onChange={handleChange}
                                                  />
                                                  {errors.comfirmedPassword && <p id="Comfirmed-error"> {errors.comfirmedPassword} </p>}
                                            </div>
              <button type="Submit" >Submit</button>
            </form>
          </div>
        </div>
        <div className="Doctor__Form-Avatar-Background">
          <img id="Doctor__Form-Avatar" src={RegistrationOptionAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
