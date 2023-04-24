import React, { useRef, useEffect } from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';

import LocomotiveScroll from 'locomotive-scroll';
// import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss';
import '../assets/locomotive-scroll.css';
// import '../assets/locomotive-scroll.min.js';
// import myFunction from '../assets/locomotive-scroll-copy-unminified.js';

// images
import Dlogo from '../assets/donaldson-logo.jpg';
import GDlogo from '../assets/gardner-denver-logo.jpg';
// import backgrr from '../assets/frame_8.png';
// import Picture49 from '../assets/Picture49.png';
// import Picture26 from '../assets/Picture26.jpg';
import hpimg1 from '../assets/HomePage/1_Colector_de_praf_Donaldson.jpg';
import hpimg2 from '../assets/HomePage/2_Saci_filtranti.jpg';
import hpimg3 from '../assets/HomePage/3_Elemente_filtrante_cartuse_filtranate.jpg';
import hpimg4 from '../assets/HomePage/4_Ventilatoare.jpg';
import hpimg5 from '../assets/HomePage/5_Filtre_pentru_ventilatii.jpg';
// import gif from '../assets/test.gif';


// styling
import '../assets/DonaldsonAndGD.css';

export default function HomePage() {
    // myFunction();
    // const ref = useRef(null);

    // useEffect(() => {
    //     if (ref) {
    //         new LocomotiveScroll({
    //             el: ref.current,
    //             smooth: true
    //             // direction: 'horizontal'
    //         })
    //     }
    // })

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });

        // Disable the default browser scrolling behavior
        const disableScroll = (event) => {
            event.preventDefault();
        };
        window.addEventListener('mousewheel', disableScroll, { passive: false });
        window.addEventListener('touchmove', disableScroll, { passive: false });

        return () => {
            // Remove event listeners when component unmounts
            window.removeEventListener('mousewheel', disableScroll);
            window.removeEventListener('touchmove', disableScroll);
        };
    }, []);



    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });

    return (
        <main data-scroll-container>
            <div className='DonaldsonAndGD margin-from-header'>
                <div className='containsPage1 slide slide-top'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            <Link to="/Donaldson" rel="noreferrer" className='active-link-D-GD'>
                                filtre, desprafuire industriala
                            </Link>
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2  slide slide-top'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            <Link to="/GardnerDenver" rel="noreferrer" className='active-link-D-GD'>
                                compresoare si retele de aer comprimat
                            </Link>
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                </div>
            </div>
            {/* START -- TRY TUTORIAL */}
            <div data-scroll-container>
                {/* PROBLEMS: */}
                {/* scroll-ul normal al paginilor nu mai merge. ca si cum functia asta de scroll locomotive suprapune scrollul normal */}
                {/* tot div-ul acesta urca peste banner. meniul nu se mai vede. z-index nu functioneaza */}
                <section data-scroll data-scroll-direction="horizontal" data-scroll-speed='1'>
                    {/* data-scroll-section */}
                    <div className='wrapper--img'>
                        <img className='home-page-img' src={hpimg1} alt="img can.t be seen"></img>
                    </div>
                    <div className='wrapper--text'>
                        <h2>Desprafuire industriala Donaldson, colectoare de praf</h2>
                        <p data-scroll data-scroll-speed='2'>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
                    </div>
                </section>
                <section data-scroll data-scroll-direction="horizontal" data-scroll-speed='1'>
                    <div className='wrapper--img'>
                        <img className='home-page-img' src={hpimg2} alt="img can.t be seen"></img>
                    </div>
                    <div className='wrapper--text'>
                        <h2>Saci filtranti pentru colectoarele de praf</h2>
                    </div>
                </section>
                <section>
                    <div className='wrapper--img'>
                        <img className='home-page-img' src={hpimg3} alt="img can.t be seen"></img>
                    </div>
                    <div className='wrapper--text'>
                        <h2>Elemente filtrante/cartuse filtrante pentru colectoare de praf</h2>
                    </div>
                </section>
                <section>
                    <div className='wrapper--img'>
                        <img className='home-page-img' src={hpimg4} alt="img can.t be seen"></img>
                    </div>
                    <div className='wrapper--text'>
                        <h2>Ventilatoare Euroventilatori </h2>
                    </div>
                </section>
                <section>
                    <div className='wrapper--img'>
                        <img className='home-page-img' src={hpimg5} alt="img can.t be seen"></img>
                    </div>
                    <div className='wrapper--text'>
                        <h2>Filtre pentru ventilatii</h2>
                    </div>
                </section>
            </div>

            {/* END -- TRY TUTORIAL */}

        </main>
    )
}