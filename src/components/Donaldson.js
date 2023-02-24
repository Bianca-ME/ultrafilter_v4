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
                
                <br/>
                <NavLink to='/Donaldson/filtrare-si-uscare-aer-comprimat-purificare-aer-comprimat'>filtrare si uscare aer comprimat purificare aer comprimat</NavLink>
                <br/>
                <br/>
                <table className='tabel-donaldson-compresoare'>
                    <tr>
                        <td colspan='2'><NavLink to='/Donaldson/compresoare'>compresoare</NavLink></td>
                    </tr>
                    <tr>
                        <td>presiuni 4 - 13 bari</td>
                        <td>presiuni 20 - 400 bari</td>
                    </tr>
                    <tr>
                        <td>compresoare cu piston</td>
                        <td>compresoare cu piston</td>
                    </tr>
                    <tr>
                        <td>compresoare cu suruburi elicoidale</td>
                        <td>compresoare cabinete stomatologice</td>
                    </tr>
                    <tr>
                        <td>compresoare cu suruburi elicoidale fara ulei</td>
                        <td>compresoare de spart asfaltul - motocompresoare</td>
                    </tr>
                    <tr>
                        <td>scroll compresor - fara ulei</td>
                        <td></td>
                    </tr>
                </table>
                
            </main>
        // </Router>
    )
}