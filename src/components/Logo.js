import React from 'react';

// original blue logo
// import logo from '../assets/LOGO-lines-svg-original-blue.svg';
// import logotext from '../assets/LOGO-ufr-svg-original-blue.svg';

// white logo
import logo from '../assets/LOGO-lines-svg-white.svg';
import logotext from '../assets/LOGO-ufr-svg-white.svg';

import { Link } from 'react-router-dom';

// styling
import '../assets/Logo.css';

export default function Logo() {
    return (
        <div
        // className='toberelative fixed-position right-corner'
        >
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

// strong-blue-background