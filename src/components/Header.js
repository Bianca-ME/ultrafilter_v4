import React from 'react';
import { NavLink, Link} from 'react-router-dom';

// const history = useHistory();

// import logo from './logo.png';
import logo from '../assets/logo.png';


// console.log(logo);

export default function Header() {
    return (
        <div className='header'>
            {/* <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                <img src={logo} alt="Coding Beauty logo"></img>
            </a> */}
            <Link to="/" rel="noreferrer">
                <img src={logo} alt="Nature"></img>
            </Link>


            <NavLink to='/about'>Despre Ultrafilter</NavLink>
            <NavLink to='/utile'>linkuri utile</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {/* <Navlink to='/'>
                <img src={logo} alt='logo'/>logotext
            </Navlink> */}
        </div>
    )
}