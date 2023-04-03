import React from 'react';
import logo from '../assets/LOGO-white-PNG.png';
import { Link } from 'react-router-dom';

// styling
// sa fac un css doar pt logo dupa ce trec de lene
import '../assets/Logo.css';

export default function Logo () {
return (
    <div className='toberelative'>
        <div className='logo-home-page-container'>
            <Link to="/" rel="noreferrer" className='logo-home-page-container'>
                <img className='logo-home-page' src={logo} alt="Ultrafilter logo can.t be seen"></img>
            </Link>
        </div>
        {/* <div className='quote1-in-banner'><p>distribuitor de compresoare si filtre industriale</p></div>
        <div className='quote2-in-banner'><p>tehnologie pentru un mediu mai curat</p></div> */}
    </div>
)
}