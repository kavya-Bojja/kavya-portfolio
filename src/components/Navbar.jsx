import React from 'react';
import './Navbar.css';
//Importing Link to enable client-side navigation without reloading the page
import {Link} from 'react-router-dom'; 

export default function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                <Link to ='/'>Home</Link>
                </li>
                <li>
                <Link to ='/about'>About</Link>
                </li>
                <li>
                <Link to ='/projects'>Projects</Link>
                </li>
                <li>
                <Link to ='/skills'>Skills</Link>
                </li>
                <li>
                <Link to ='/contact'>Contact</Link>
                </li>
            </ul>
    
        </nav>
    );
}

