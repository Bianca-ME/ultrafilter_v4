import React from 'react';
import { NavLink, Link} from 'react-router-dom';

// styling
import '../assets/Header.css';

export default function Header() {
    return (
        <div className='header'>
            <NavLink className='visited-link' to='/about' activeClassName="active-link">Despre Ultrafilter</NavLink>
            <NavLink className='visited-link' to='/utile' activeClassName="active-link">linkuri utile</NavLink>
            <NavLink className='visited-link' to='/contact' activeClassName="active-link">Contact</NavLink>
            {/* <div className='info-in-header'>tel: +407656378</div> */}
        </div>
    )
}

// activeClassName={classes['active']}
// activeStyle={{}}