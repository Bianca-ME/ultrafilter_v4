import React from 'react';
// import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../assets/Donaldson.css';
import '../assets/commonstyle.css';

export default function Donaldson() {
    return (
        // <Router>
        <main className='main-1'>
            <div className='regular-text'>
                <br />
                <p>&#91; text &#93; Producem aer comprimat</p>
                {/* <NavLink to='/Donaldson/filtrare-si-uscare-aer-comprimat-purificare-aer-comprimat'>filtrare si uscare aer comprimat purificare aer comprimat</NavLink> */}
                <p className='regular-text-important'>I. compresoare</p>
                {/* <table className='tabel-donaldson-compresoare'>
                    <tr>
                        <td className='th-tr1'>presiuni 4 - 13 bari</td>
                        <td className='th-tr1'>presiuni 20 - 400 bari</td>
                    </tr>
                    <tr>
                        <td className='tds'><NavLink to='/Donaldson/compresoare'>&#91;test PDF pop up&#93;</NavLink></td>
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
                </table> */}
                <table className='table-GD-c'>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className='th-tr1'>presiuni 4 - 13 bari</td>
                        <td className='th-tr1'>presiuni 20 - 400 bari</td>
                    </tr>
                    <tr>
                        <td className='tds' id="tds-top"><NavLink to='/Donaldson/compresoare'>&#91;test PDF pop up&#93;</NavLink></td>
                        <td className='tds' id="tds-top">compresoare cu piston</td>
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
                <br />
                <br />
                <p className='regular-text-important'>II. filtrare si uscare aer comprimat - purificare aer comprimat</p>
                <p>&#91; text de reformulat ca sa aiba continuitate &#93;</p>
            </div>
        </main>
        // </Router>
    )
}