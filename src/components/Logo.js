import React from 'react';
import logo from '../assets/LOGO-lines-svg-original-blue.svg';
import logotext from '../assets/LOGO-ufr-svg-original-blue.svg';
import { Link } from 'react-router-dom';

// styling
import '../assets/Logo.css';

export default function Logo () {
return (
    <div 
    // className='toberelative fixed-position right-corner'
    >
        <div>
            <Link to="/" rel="noreferrer" className='logo-home-page-container '>
                <img className='logo-home-page' src={logo} alt="Ultrafilter logo can.t be seen"></img>
                <img className='logo-home-page logo-home-page-text-margin-left' src={logotext} alt="Ultrafilter logo can.t be seen"></img>
            </Link>
        </div>
    </div>
)
}

// strong-blue-background