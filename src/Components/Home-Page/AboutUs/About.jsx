import React from 'react';
import './About.css';
import AboutUsAvartar from '../../../Components/Images/Picture/aboutUsImage.png';

const About = () => {
  return (
    <div id='AboutUs' className='homePage__aboutUs'>
        <div className="homePage__aboutUs-text">
            <h2>About Us</h2>
            <p>Online Prescription System is a system that allows doctors and 
                other medical practitioners to write and send prescriptions to a 
                participating pharmacy electronically instead of using handwritten notes. 
                The system facilitates issuing of electronic prescriptions using the internet. 
                This system will also facilitate patients access to their prescription information.</p>
        </div>
        <div className="homePage__aboutUs-avatar">
            <img id='AboutUs_Image' src={AboutUsAvartar} alt="" />
        </div>
    </div>
  )
}

export default About