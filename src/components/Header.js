import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import greenScreen from '../assets/green-screen.png';

// styling
import '../assets/Header.css';

export default function Header() {

    useEffect(() => {
        const handleClick = () => {
            stickyElement.classList.toggle('active');
        };

        const stickyElement = document.getElementById('quick-menu');
        stickyElement.addEventListener('click', handleClick);

        return () => {
            stickyElement.removeEventListener('click', handleClick);
        };
    }, []);

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
            <div>
                <a href="#top" className='back-to-top visited-link-ribbon-left'>back to top</a>
                <div id='quick-menu' className='visited-link-ribbon-left to-be-relative'>
                    <p>quick menu</p>
                    {/* <div className='circle circle1'></div>
                    <div className='circle circle2'></div>
                    <div className='screen-border'></div> */}

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
                {/* <a href=""  id='quick-menu' className=' visited-link-ribbon-left' activeClassName="clicked-menu">quick menu</a> */}
            </div>
            {/* <div className='ribbon-bottom'>
                <p>ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   ultrafilter   </p>
            </div> */}
        </div>
    )
}

// activeClassName={classes['active']}
// activeStyle={{}}

// style={{ backgroundImage: `url(${greenScreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}