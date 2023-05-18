import React, { useRef, useEffect, useState } from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';

import p5 from 'p5';
// import sketch from '../TESTS/grid';
// import sketch2 from '../TESTS/color-trans';

// import LocomotiveScroll from 'locomotive-scroll';
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
import hpimg3 from '../assets/HomePage/3_Elemente_filtrante_cartuse_filtrante.jpg';



// import hpimg3_1 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_1.jpg';
// import hpimg3_2 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_2.jpg';
// import hpimg3_3 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_3.jpg';
// import hpimg3_4 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_4.jpg';
// import hpimg3_6 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_6.jpg';
// import hpimg3_7 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_7.jpg';
// import hpimg3_8 from '../assets/HomePage/3_cartuse_filtrante/3_Elemente_filtrante_cartuse_filtrante_8.jpg';
// <img className='home-page-img' src={hpimg3_1} alt="img can.t be seen"></img>
// <img className='home-page-img' src={hpimg3_2} alt="img can.t be seen"></img>
// <img className='home-page-img' src={hpimg3_3} alt="img can.t be seen"></img>
// <img className='home-page-img' src={hpimg3_4} alt="img can.t be seen"></img>
// <img className='home-page-img' src={hpimg3_6} alt="img can.t be seen"></img>
// <img className='home-page-img' src={hpimg3_7} alt="img can.t be seen"></img>
// <img className='home-page-img' src={hpimg3_8} alt="img can.t be seen"></img>



import hpimg4 from '../assets/HomePage/4_Ventilatoare.png';
import hpimg5 from '../assets/HomePage/5_Filtre_pentru_ventilatii.jpg';
import gif from '../assets/test.gif';
import testx from '../assets/testx.jpg';
import textxx from '../assets/textxx.png';
import gdvid from '../assets/gdvid.gif';
import filter from '../assets/HomePage/filtrrr.png';
import fan from '../assets/fan.gif';

import addClassOnInView from '../testingPurposes/inViewTrigger';

// styling
import '../assets/commonstyle.css';

//

const randomNumber = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
console.log(randomNumber);


export default function HomePage() {

    const [isHovered, setIsHovered] = useState(false);

    // useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('[data-scroll-container]'),
    //         smooth: true,
    //         offset: ["10%", 0]
    //     });


    // }, []);
    // // Disable the default browser scrolling behavior
    // const disableScroll = (event) => {
    //     event.preventDefault();
    // };
    // window.addEventListener('mousewheel', disableScroll, { passive: false });
    // window.addEventListener('touchmove', disableScroll, { passive: false });

    // return () => {
    //     // Remove event listeners when component unmounts
    //     window.removeEventListener('mousewheel', disableScroll);
    //     window.removeEventListener('touchmove', disableScroll);
    // };

    // TRY IMPORT SKETCH
    // const sketchRef = useRef(null);

    // useEffect(() => {
    //     new p5(sketch2, sketchRef.current);
    // }, []);

    // nu mi-a mers
    // useEffect(() => {
    //     return addClassOnInView("my-element", "fade-in");
    // }, []);

    return (
        <div data-scroll>
            <div className='DonaldsonAndGD margin-from-header' id='toStickTo'>
                <div className='containsPage1 slide slide-top containsPage1-mobile'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            <Link to="/Donaldson" rel="noreferrer" className='active-link-D-GD'>
                                filtre, desprafuire industriala
                            </Link>
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                    {/* <img className='Donaldson-logo-mobile op-class' src={Dlogo} alt="Donaldson logo can.t be seen"></img> */}
                </div>
                <div className='containsPage2 slide slide-top containsPage2-mobile'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            <Link to="/GardnerDenver" rel="noreferrer" className='active-link-D-GD'>
                                compresoare si retele de aer comprimat
                            </Link>
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                    {/* <img className='GD-logo-mobile op-class' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img> */}
                </div>
            </div>
            {/* <img src={gdvid}/> SHOW MIHAI WITH GIF gdvid in src and disable size */}

            {/* START -- TRY TUTORIAL */}
            <div className='home-page-content soft-green-background'>
                {/* PROBLEMS: */}
                {/* scroll-ul normal al paginilor nu mai merge. ca si cum functia asta de scroll locomotive suprapune scrollul normal */}
                {/* tot div-ul acesta urca peste banner. meniul nu se mai vede. z-index nu functioneaza */}
                {/* <section> */}
                <div className='background-bluee border-test' data-scroll data-scroll-container>
                    {/* <br />
                    <br />
                    <br />
                    <br /> */}
                    {/* style={{ backgroundImage: `url(${gif})` }} */}
                    <p className='home-page-title' data-scroll data-scroll-direction='horizontal' data-scroll-speed='4'>distribuitorul tau de <span className='underline-red'>compresoare</span> si <span className='underline-red'>filtre</span> industriale</p>

                    {/* cand reusesc cu Locomotive Scroll */}
                    {/* <p className='home-page-title' data-scroll data-scroll-direction='horizontal' data-scroll-speed='4'>distribuitorul tau</p>
                    <p className='home-page-title' data-scroll data-scroll-direction='horizontal' data-scroll-speed='1'>de <span className='underline-red'>compresoare</span> </p>
                    <p className='home-page-title-smallerr' data-scroll data-scroll-direction='horizontal' data-scroll-speed='-2'>si <span className='underline-red'>filtre</span> industriale</p> */}

                    {/* nu mai stiu ce-i cu asta */}
                    {/* <p className='home-page-title' data-scroll data-scroll-direction='horizontal' data-scroll-speed='1'>de 
                        <span className="hover-over-word" style={{ backgroundImage: `url(${testx})`, backgroundSize: '100% auto' }}>compresoare</span>
                    </p> */}
                </div>
                {/* </section> */}
                <div className='give-scroll-snap'>

                    <section data-scroll data-scroll-direction="horizontal" data-scroll-speed='1'>
                        {/* data-scroll-section */}
                        <div className='wrapper--img'>
                            <img className='home-page-img' src={hpimg1} alt="img can.t be seen"></img>
                        </div>
                        <div className='wrapper--text'>
                            <h2 className="op-class" data-scroll data-scroll-class="fadeIn" data-scroll-repeat="true" data-scroll-speed="2">Desprafuire industriala Donaldson, colectoare de praf</h2>
                            {/* <h2 className="op-class" data-scroll data-scroll-class="fadeIn" data-scroll-repeat="true" data-scroll-speed="2">Desprafuire </h2>
                        <h2 className="op-class" data-scroll data-scroll-class="fadeIn2" data-scroll-repeat="true" data-scroll-speed="2">industriala </h2>
                        <h2 className="op-class" data-scroll data-scroll-class="fadeIn3" data-scroll-repeat="true" data-scroll-speed="2">Donaldson, </h2>
                        <h2 className="op-class" data-scroll data-scroll-class="fadeIn4" data-scroll-repeat="true" data-scroll-speed="2">colectoare </h2>
                        <h2 className="op-class" data-scroll data-scroll-class="fadeIn5" data-scroll-repeat="true" data-scroll-speed="2">de praf</h2> */}
                            {/* <p data-scroll data-scroll-speed='2'>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p> */}
                        </div>
                    </section>

                    {/* ZOOM OUT EFFECT on img, FADE IN EFFECT on h2 */}
                    <section data-scroll data-scroll-direction="horizontal" data-scroll-speed='1'>
                        <div className='wrapper--img-fixed-size'>
                            <img className='home-page-img-to-be-zoomed-out' data-scroll data-scroll-class="zoom-out" src={hpimg2} alt="img can.t be seen"></img>
                        </div>
                        <div className='wrapper--text--higher'>
                            <h2 className="op-class" data-scroll data-scroll-class="fadeIn" data-scroll-repeat="true" data-scroll-speed="2">Saci filtranti pentru colectoarele de praf</h2>
                        </div>
                    </section>



                    <section>
                        {/* <div ref={sketchRef} className='overlap-grid' data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"></div> */}
                        <div className='wrapper--img'>
                            <img className='home-page-img to-be-overlapped' src={filter} alt="img can.t be seen"></img>
                        </div>
                        <div id='sticktest' className='wrapper--text'>
                            <h2 data-scroll data-scroll-sticky data-scroll-target="#sticktest">Elemente filtrante/cartuse filtrante pentru colectoare de praf</h2>
                            {/* <p>
                            Suspendisse dapibus id nisl et maximus. Sed sed dolor rhoncus, ullamcorper leo ut, dictum quam. Donec efficitur tortor id orci consequat molestie. Aenean odio justo, ultrices sed consequat a, pulvinar sed nulla. In elementum leo at ex mattis porttitor. Nulla dictum velit consequat, molestie neque a, sollicitudin urna. Nulla nec consequat ante.Donec vitae massa rutrum, luctus massa at, euismod orci. Morbi ut quam sit amet tortor sodales commodo vitae sed lacus. Curabitur id venenatis neque. Aliquam ullamcorper eros et sem faucibus ultrices. Phasellus urna mauris, tempor eu consectetur vitae, suscipit sed turpis. Integer ultrices vehicula pellentesque. Sed convallis nunc vel maximus dignissim. Maecenas rhoncus, dolor vitae lobortis semper, lectus mauris suscipit lorem, eu convallis est risus ut diam. Donec fermentum, neque a venenatis ultricies, eros purus maximus ante, eu interdum elit magna sed lacus. Quisque volutpat nulla volutpat, tempor neque ut, vehicula massa. Sed ut odio dolor. Praesent nec nunc ante. Mauris congue dui sollicitudin aliquet tempor. Donec iaculis est non ex cursus, eu suscipit lacus pharetra.
                        </p> */}
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
                {/* <div ref={sketchRef} data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"></div> */}
            </div>

            {/* END -- TRY TUTORIAL */}

        </div>
    )
}

// style={{ backgroundImage: `url(${fan})`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover'}}