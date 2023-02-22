import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div className='header'>
            <NavLink to='/about'>Despre Ultrafilter</NavLink>
            <NavLink to='/utile'>linkuri utile</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    )
}