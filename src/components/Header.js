import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import logo from '../assets/LOGO-white-PNG.png';

// styling
import '../assets/Header.css';



export default function Header() {
    return (
        <div className='header'>
            {/* logo image that works as home page button */}
            <Link to="/" rel="noreferrer">
                <img className='logo-home-page' src={logo} alt="Nature"></img>
            </Link>

            <NavLink className='visited-link' to='/about'>Despre Ultrafilter</NavLink>
            <NavLink className='visited-link' to='/utile'>linkuri utile</NavLink>
            <NavLink className='visited-link' to='/contact'>Contact</NavLink>
        </div>
    )
}