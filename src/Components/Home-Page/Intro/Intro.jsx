import React from 'react'
import './Intro.css';
import onlinePrescriptionLogo from '../../../Components/Images/Picture/Logo.png';
import { Link } from 'react-router-dom';


const Intro = () => {
  return (
    <div className='homePage__header'>
       <div className="image-cover">
       <div className="homePage__header-navbar">
        <div className="homePage__header-logo">
          <img src={onlinePrescriptionLogo} alt=""/>
        </div>
        <div className="homePage__header-menu">
          <ul>
            <li>Home</li>
            <li> 
               <a href="#AboutUs"> About</a> 
            </li>
            <li> 
               <a  href="#Partnership"> Partnership</a> 
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
       </div>
      </div>
        <div className="homePage__header-content">
          <h2 id='content-headText'>Online Prescription</h2>
          <p id='content-motto'>A Modern solution with a lasting impact</p>
          <Link to='/Option'><button id='homePage__getstarted-button'>Get Started</button></Link>
        </div>
       </div>
    </div>
  )
}

export default Intro