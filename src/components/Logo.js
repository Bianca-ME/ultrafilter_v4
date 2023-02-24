import React from 'react';
import logo from '../assets/LOGO-white-PNG.png';
import { Link } from 'react-router-dom';

// styling
// sa fac un css doar pt logo dupa ce trec de lene
import '../assets/Logo.css';

export default function Logo () {
return (
    <div className='logo-home-page-container'>
        <Link to="/" rel="noreferrer" className='logo-home-page-container'>
            <img className='logo-home-page' src={logo} alt="Ultrafilter logo can.t be seen"></img>
        </Link>
    </div>
)
}