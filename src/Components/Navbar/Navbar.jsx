
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Images/dangerous_10636124.png'
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './../../Context/AuthContext';

export default function Navbar() {
  
 
  const [navbar, setNavbar] = useState('navbar')
  let { userData, logOut } = useContext(AuthContext)

  const showNavbar = () => {
    setNavbar('navbar showNavbar')
  }
  const removeNavbar = () => {
    setNavbar('navbar ')
  }

  const [header, setHeader] = useState('header')

  const addBg = () => {
    if (window.scrollY >= 20) {
      setHeader('header addBg')
    }
    else {
      setHeader('header')
    }
  }
  window.addEventListener('scroll', addBg)
  return (
    <>
      <div className={header}>
        <div className="logoDiv">
          <Link to="" className='text-decoration-none'>
            <img src={logo} alt="Logo" className='logo' />
          </Link>
         
        </div>
        {userData ? (
          <div className={navbar}>
            <ul className="menu">
              <li onClick={removeNavbar} className="listItem">
                <Link to="" className="link">HOME</Link>
              </li>
              <li onClick={removeNavbar} className="listItem">
                <Link to="/about" className="link">ABOUT</Link>
              </li>
              <li onClick={removeNavbar} className="listItem">
                <Link to="/medicaldata" className="link">Medical Data</Link>
              </li>
              <li onClick={removeNavbar} className="listItem">
                <Link to="/detect" className="link"> Detection </Link>
              </li>
              <li onClick={removeNavbar} className="listItem">
                <Link to="/emergency" className="link"> Emergency </Link>
              </li>
             {userData.user.userType==='patient'?
               <li onClick={removeNavbar} className="listItem">
               <Link to="/account" className="link">PROFILE</Link>
             </li>
             :
             <li onClick={removeNavbar} className="listItem">
                <Link to="/doctor" className="link">Doctor</Link>
              </li>
             }
            
              
            </ul>
            <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar} />
          </div>
        ) : null}
        <div className="signUp flex">
          {!userData && (
            <>
              <Link to='register' className="text">SIGN UP</Link>
              <Link to='login' className="mx-3 text">SIGN IN</Link>
            </>
          )}
          {userData && (
            <Link onClick={logOut} className="mx-3 text">Log Out</Link>
          )}
          <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar} />
        </div>
      </div>
    </>
  );
}