import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import greenScreen from '../assets/green-screen.png';

// styling
import '../assets/Header.css';

import arrowRight from '../assets/arrow-right-333-svgrepo-com.svg';

export default function Header() {

    // js function to click on something and open / close it
    // useEffect(() => {
    //     const handleClick = () => {
    //         stickyElement.classList.toggle('active');
    //     };

    //     const stickyElement = document.getElementById('quick-menu');
    //     stickyElement.addEventListener('click', handleClick);

    //     return () => {
    //         stickyElement.removeEventListener('click', handleClick);
    //     };
    // }, []);

    return (
        <div className="fixed-position">
            <div className='header'>
                {/* <NavLink className='visited-link' to='/about' activeClassName="active-link"><a href='#despre-UFR'>Despre Ultrafilter</a></NavLink> */}
                {/* <a href='#despre-UFR' className='visited-link visited-link-header' activeClassName="active-link">Despre Ultrafilter</a>
                <NavLink className='visited-link visited-link-header' to='/utile' activeClassName="active-link">linkuri utile</NavLink>
                <NavLink className='visited-link visited-link-header' to='/contact' activeClassName="active-link">Contact</NavLink> */}
            </div>
            <div className='ribbon-right'>
                <p>tel: +40 371 152 977</p>
            </div>
            <div>
                <a href="#top" className='back-to-top visited-link-ribbon-left'>înapoi sus</a>
            </div>
            {/* <div>
                <a href="#top" className='back-to-top visited-link-ribbon-left'>back to top</a>
                <div id='quick-menu' className='visited-link-ribbon-left to-be-relative'>
                    <p>quick menu</p>
                    

                    <div className='links-inside-menu visited-link-ribbon-left flex'>


                        <div className='col1-menu'>
                            <a href='#despre-UFR' style={{ textDecoration: 'underline' }}> despre Ultrafilter</a>
                            <p></p>
                            <a href='#despre-Donaldson' style={{ textDecoration: 'underline' }}>despre Donaldson</a>
                            <a href='#compresoare-cu-piston' className='padding-indent-1-1'>desprafuire industriala, colectoare de praf, fum si COV</a>
                            <a href='#compresoare-rotative' className='padding-indent-1-1'>ventilatoare</a>
                            <a href='#compresoare-rotative' className='padding-indent-1-1'>filtrare + uscare aer comprimat</a>
                            <a href='#compresoare-rotative' className='padding-indent-1-1'>recipienti stocare aer comprimat</a>
                            <p></p>
                            <a href='#despre-GD' style={{ textDecoration: 'underline' }}>despre Gardner Denver</a>
                            <a href='#compresoare-cu-piston' className='padding-indent-1-1'>compresoare cu piston</a>
                            <a href='#compresoare-rotative' className='padding-indent-1-1'>compresoare rotative</a>
                            <a href='#compresoare-rotative' className='padding-indent-1-1'>filtrare + uscare aer comprimat</a>
                            <a href='#compresoare-rotative' className='padding-indent-1-1'>recipienti stocare aer comprimat</a>
                        </div>

                        <div className='col2-menu'>
                            <a href='#compresoare-cu-piston-Champion' className='padding-indent-1-1'>compresoare cu piston Champion</a>
                            <a href='#compresoare-pentru-cabinete-dentare' className='padding-indent-1-1'>compresoare pentru cabinete dentare</a>
                            <a href='#compresoare-pentru-umplut-butelii' className='padding-indent-1-1'>compresoare pentru umplut butelii</a>
                        </div>


                        <div className='col3-menu'>

                        </div>



                    </div>
                </div>
               
            </div> */}
            {/* ------------------- */}
            <div className="nav-menu">
                <nav>
                    <ul className='menu'>
                        <li className='menu1' id='navbar-title'><a href="#despre-Ultrafilter">Despre Ultrafilter</a></li>
                        <li className='menu1' id='navbar-title'><a href="#Donaldson">Donaldson</a></li>
                        <li className='menu1' id='navbar-title'><a href="#Gardner-Denver">Gardner Denver</a>
                            <ul className='submenu1'>
                                {/* <img className='arrow-nav' src={arrowRight} alt='svg missing' /> */}
                                {/* <span style={{color:'#0000ff'}}>&#10095;</span> */}
                                {/* <span style={{color:'#F1F5ED'}}>&#9776;</span> */}
                                <li><a href='#despre-Gardner-Denver'>Despre Gardner Denver</a></li>
                                <li><a href='#compresoare'>Compresoare</a>
                                    <ul className='submenu2'>
                                        <li><a href="#compresoare-cu-piston">cu piston</a>
                                            <ul className='submenu3'>
                                                <li><a href='#'>cabinete dentare compresoare oil free</a></li>
                                                <li><a href='#'>debite mici</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#compresoare-cu-suruburi-elicoidale">cu suruburi elicoidale Gadner Denver</a>
                                            <ul className='submenu3'>
                                                <li><a href='#si-injectie-de-ulei'>si injectie de ulei</a></li>
                                                <li><a href='#oil-free'>oil free</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">cu excentric si paleti Vane Compressors</a></li>
                                        <li><a href="#">pentru suflat PET-uri</a></li>
                                        <li><a href="#">pentru scafandrii</a></li>
                                    </ul>
                                </li>
                                <li><a href='#'>Recipienti de aer comprimat si purje evacuare condens</a></li>
                            </ul>
                        </li>
                        <li className='menu1' id='navbar-title'><a href="#linkuri-utile">linkuri utile</a></li>
                        <li className='menu1' id='navbar-title'><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </div>



        </div>
    )
}

// activeClassName={classes['active']}
// activeStyle={{}}

// style={{ backgroundImage: `url(${greenScreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}