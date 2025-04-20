import React from 'react';
import './Navbar.css';
//Importing Link to enable client-side navigation without reloading the page
//import {Link} from 'react-router-dom'; 

//Importing NavLink to enable navigation with automatic active link styling
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

export default function Navbar(){
    return(
        // <nav className='navbar'>
        //     <ul className='nav-links'>
        //         <li>
        //         <NavLink to ='/' className={({isActive}) => isActive ? 'active' :''}>Home</NavLink>
        //         </li>
        //         <li>
        //         <NavLink to ='/about' className={({isActive}) => isActive ? 'active' :''}>About</NavLink>
        //         </li>
        //         <li>
        //         <NavLink to ='/projects' className={({isActive}) => isActive ? 'active' :''}>Projects</NavLink>
        //         </li>
        //         <li>
        //         <NavLink to ='/skills' className={({isActive}) => isActive ? 'active' :''}>Skills</NavLink>
        //         </li>
        //         <li>
        //         <NavLink to ='/contact' className={({isActive}) => isActive ? 'active' :''}>Contact</NavLink>
        //         </li>
        //     </ul>
    
        // </nav>
        <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
            Education
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>

    );
}

