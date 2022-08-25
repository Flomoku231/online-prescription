import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import onlinePrescriptionLogo from '../../Components/Images/Picture/Logo.png';
import MoveBack from '../../Components/Images/Picture/BackIcon.png'

const NavBar = () => {
  return (
    <div>      <div className="homePage__header-navbar">
    <div className="homePage__header-logo">
      <img src={onlinePrescriptionLogo} alt="" />
    </div>
    <div className="homePage__header-menu">
       <Link to='/'><img id='MoveBack' src={MoveBack} alt="" /></Link>
    </div>
  </div></div>
  )
}

export default NavBar