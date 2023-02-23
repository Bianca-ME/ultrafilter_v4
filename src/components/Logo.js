import React from 'react';
import logo from '../assets/LOGO-white-PNG.png';
import { Link } from 'react-router-dom';

// styling
// sa fac un css doar pt logo dupa ce trec de lene
import '../assets/Header.css';

export default function Logo () {
return (
    <div className='header'>
    {/* nu stiu daca trebe Link aici sau doar imaginea */}
        <Link to="/" rel="noreferrer">
            <img className='logo-home-page' src={logo} alt="Ultrafilter logo can.t be seen"></img>
        </Link>
    </div>
)
}