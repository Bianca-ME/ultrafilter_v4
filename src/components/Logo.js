import React from 'react';

// white logo
import logo from '../assets/Logos/LOGO-lines-svg-white.svg';
import logotext from '../assets/Logos/LOGO-ufr-svg-white.svg';

import { Link } from 'react-router-dom';

// styling
import '../assets/CSS/Logo.css';

export default function Logo() {
    return (
        <div>
            <div>
                <Link to="/" rel="noreferrer" className=''>
                    <div className='logo-home-page-container'>
                        <div className='logo-container'>
                            <img className='logo-home-page' src={logo} alt="Ultrafilter logo can.t be seen"></img>
                            <img className='logo-home-page logo-home-page-text-margin-left' src={logotext} alt="Ultrafilter logo can.t be seen"></img>
                        </div>
                        <p className='ufr-quote-top'>distribuitorul tau de compresoare si filtre industriale</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}