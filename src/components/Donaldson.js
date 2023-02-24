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
                <br/>
                {/* <NavLink to='/Donaldson/compresoare'>compresoare</NavLink> */}
                <p>&#91; text &#93; Producem aer comprimat</p>
                {/* <NavLink to='/Donaldson/filtrare-si-uscare-aer-comprimat-purificare-aer-comprimat'>filtrare si uscare aer comprimat purificare aer comprimat</NavLink> */}
                <p id='th-compresoare'>I. compresoare</p>
                <table className='tabel-donaldson-compresoare'>
                    <tr>
                        <td className='th-tr1'>presiuni 4 - 13 bari</td>
                        <td className='th-tr1'>presiuni 20 - 400 bari</td>
                    </tr>
                    <tr>
                        <td className='tds'>compresoare cu piston</td>
                        <td className='tds'>compresoare cu piston</td>
                    </tr>
                    <tr>
                        <td className='tds'>compresoare cu suruburi elicoidale</td>
                        <td className='tds'>compresoare cabinete stomatologice</td>
                    </tr>
                    <tr>
                        <td className='tds'>compresoare cu suruburi elicoidale fara ulei</td>
                        <td className='tds'>compresoare de spart asfaltul - motocompresoare</td>
                    </tr>
                    <tr>
                        <td className='tds'>scroll compresor - fara ulei</td>
                        <td></td>
                    </tr>
                </table>
                <br/>
                <br/>
                <p  id='th-compresoare'>II. filtrare si uscare aer comprimat - purificare aer comprimat</p>
                <p>&#91; text de reformulat ca sa aiba continuitate &#93;</p>
            </main>
        // </Router>
    )
}