import React from 'react';
// import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../assets/Donaldson.css';
import '../assets/commonstyle.css';

// import Donaldson from './';

export default function Donaldson () {
    return (
        // <Router>
            <main className='card text-donaldson'>
                <p>design page --- WORK IN PROGRESS</p>
                <p>content of DONALDSON</p>
                <NavLink to='/Donaldson/compresoare'>compresoare</NavLink>
                <br/>
                <NavLink to='/Donaldson/filtrare-si-uscare-aer-comprimat-purificare-aer-comprimat'>filtrare si uscare aer comprimat purificare aer comprimat</NavLink>

                
            </main>
        // </Router>
    )
}