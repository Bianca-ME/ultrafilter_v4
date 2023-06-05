import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import greenScreen from '../assets/green-screen.png';

// styling
import '../assets/Header.css';

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
                        <li className='menu1'><a href="#despre-Ultrafilter">Despre Ultrafilter</a></li>
                        <li className='menu1'><a href="#Donaldson">Donaldson</a></li>
                        <li className='menu1'><a href="#Gardner-Denver">Gardner Denver</a>
                            <ul className='submenu'>
                                <li><a href='#despre-Gardner-Denver'>Despre Gardner Denver</a></li>
                                <li><a href='#compresoare-cu-piston'>Compresoare cu piston</a>
                                    <ul className='submenu2'>
                                        <li><a href="#compresoare-cu-piston-Champion">Compresoare cu piston Champion</a></li>
                                        <li><a href="#compresoare-pentru-cabinete-dentare">Compresoare pentru cabinete dentare</a></li>
                                        <li><a href="#compresoare-pentru-suflat-PET-uri">Compresaore pentru suflat PET-uri</a></li>
                                    </ul>
                                </li>
                                <li><a href='#compresoare-rotative'>Compresoare rotative</a></li>
                            </ul>
                        </li>
                        <li className='menu1'><a href="#linkuri-utile">linkuri utile</a></li>
                        <li className='menu1'><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </div>

            

        </div>
    )
}

// activeClassName={classes['active']}
// activeStyle={{}}

// style={{ backgroundImage: `url(${greenScreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}