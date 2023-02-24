import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/Donaldson.css';
import '../../assets/commonstyle.css';
// import '../../assets/';

export default function Compresoare () {
    return (
        <main className='card text-donaldson'>
            <p>design page --- WORK IN PROGRESS</p>
            <p>content of DONALDSON / compresoare</p>
            <NavLink to='/Donaldson/compresoare/Presiuni4_13bari'>Presiuni 4 - 13 bari</NavLink>
            <br/>
            <NavLink to='/Donaldson/compresoare/Presiuni20_400bari'>Presiuni 20 - 400 bari</NavLink>
        </main>
    )
}