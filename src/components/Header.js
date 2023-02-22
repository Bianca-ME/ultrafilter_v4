import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import '../assets/style.css';


export default function Header() {
    return (
        <div className='header'>
            {/* logo image that works as home page button */}
            <Link to="/" rel="noreferrer">
                <img className='logo-home-page' src={logo} alt="Nature"></img>
            </Link>
            
            <NavLink to='/about'>Despre Ultrafilter</NavLink>
            <NavLink to='/utile'>linkuri utile</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    )
}