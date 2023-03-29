import React from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import {Link} from 'react-router-dom';

// images
import Dlogo from '../assets/donaldson-logo.jpg';
import GDlogo from '../assets/gardner-denver-logo.jpg';

// styling
import '../assets/DonaldsonAndGD.css';



export default function Header() {
    return (
        <div className='DonaldsonAndGD margin-from-header'>
            <div className='containsPage1'>
            <div className='page1Donaldson-container'>
                <Link to="/Donaldson" rel="noreferrer" >
                    <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                </Link>
            </div>
            </div>
            <div className='containsPage2'>
            <div className='page2GardnerDenver-container'>
                <Link to="/GardnerDenver" rel="noreferrer" >
                    <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                </Link>
            </div>
            </div>
        </div>
    )
}