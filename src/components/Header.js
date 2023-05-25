import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// styling
import '../assets/Header.css';

export default function Header() {
    return (
        <div className="fixed-position">
            <div className='header'>
                {/* <NavLink className='visited-link' to='/about' activeClassName="active-link"><a href='#despre-UFR'>Despre Ultrafilter</a></NavLink> */}
                <a href='#despre-UFR' className='visited-link visited-link-header' activeClassName="active-link">Despre Ultrafilter</a>
                <NavLink className='visited-link visited-link-header' to='/utile' activeClassName="active-link">linkuri utile</NavLink>
                <NavLink className='visited-link visited-link-header' to='/contact' activeClassName="active-link">Contact</NavLink>
            </div>
            <div className='ribbon-right'>
                <p>tel: +40 371 152 977</p>
            </div>
            {/* <div className='ribbon-bottom'>
                <p>ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   </p>
            </div> */}
        </div>
    )
}

// activeClassName={classes['active']}
// activeStyle={{}}