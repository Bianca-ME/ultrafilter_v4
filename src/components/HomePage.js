import React, { useRef, useEffect, useState } from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ParagraphWithBlueLine from './ParagraphWithBlueLine';

// react carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import {
//     dragStart,
//     dragging,
//     dragStop } from './carousel';

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

import arrow from '../assets/north-east-arrow.svg';

// import hpimg1 from '../assets/HomePage/1_Colector_de_praf_Donaldson.jpg';
// import hpimg2 from '../assets/HomePage/2_Saci_filtranti.jpg';
// import hpimg3 from '../assets/HomePage/3_Elemente_filtrante_cartuse_filtrante.jpg';
// import GD9 from '../assets/HomePage/9_compresoare_cu_piston_Champion.jpg';
import GD9 from '../assets/test/c9.png';
import GD9_ from '../assets/test/c9_.png';
import GD10 from '../assets/HomePage/10_Compresoare_pentru_cabinete_dentare.jpg';
import GD11 from '../assets/HomePage/11_Compresoare_portabile.jpg';
import GD12 from '../assets/HomePage/12_Comprresoare_cu_excentric_si_paleti.jpg';
import GD13 from '../assets/HomePage/13_Compresoare_Scroll_fara_ungere.jpg';
import GD14 from '../assets/HomePage/14_compresoare_pentru_suflat_PET-uri_BELLISS_MORCOM.jpg';
import GD15 from '../assets/HomePage/15_Compresoare_pentru_umplut_butelii.jpg';



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
import grain2 from '../assets/test/grain3.png';
import cc1 from '../assets/test/cc1.png';
import arrowDown from '../assets/arrow-down-339.svg';
import arrowRightDown from '../assets/arrow-right-down355.svg';
import arrowLeft from '../assets/arrow-left-334-svgrepo-com.svg';
import arrowRight from '../assets/arrow-right-333-svgrepo-com.svg';




import addClassOnInView from '../testingPurposes/inViewTrigger';

// styling
import '../assets/commonstyle.css';

//

const randomNumber = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
console.log(randomNumber);


export default function HomePage() {

    // const divRefs = useRef([]);

    // const handleHover = (index) => {
    //     divRefs.current.forEach((div, i) => {
    //         if (i === index) {
    //             div.style.zIndex = divRefs.current.length;
    //         } else {
    //             div.style.zIndex = divRefs.current.length - i;
    //         }
    //     });
    // };

    // const handleClick = (index) => {
    //     divRefs.current.forEach((div, i) => {
    //         if (i === index) {
    //             div.style.zIndex = divRefs.current.length;
    //         } else {
    //             div.style.zIndex = divRefs.current.length - i;
    //         }
    //     });
    // };

    // 

    const divRefs = useRef([]);
    const searchRef = useRef(null);

    const handleHover = (index) => {
        divRefs.current.forEach((div, i) => {
            if (i === index) {
                div.style.zIndex = divRefs.current.length;
            } else {
                div.style.zIndex = divRefs.current.length - i;
            }
        });
    };

    const handleClick = (index) => {
        divRefs.current.forEach((div, i) => {
            if (i === index) {
                div.style.zIndex = divRefs.current.length;
            } else {
                div.style.zIndex = divRefs.current.length - i;
            }
        });
    };

    const handleSearch = () => {
        const searchText = searchRef.current.value.toLowerCase();
        let matchingIndex = -1;

        divRefs.current.forEach((div, i) => {
            const divText = div.textContent.toLowerCase();
            if (divText.includes(searchText)) {
                matchingIndex = i;
                return;
            }
        });

        if (matchingIndex !== -1) {
            divRefs.current.forEach((div, i) => {
                if (i === matchingIndex) {
                    div.style.zIndex = divRefs.current.length;
                } else {
                    div.style.zIndex = divRefs.current.length - i;
                }
            });
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.ctrlKey && event.key === "f") {
                searchRef.current.focus();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div data-scroll toberelative>
            <div className='DonaldsonAndGD margin-from-header' id='toStickTo'>
                <div className='containsPage1 slide slide-top containsPage1-mobile'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            <a href='#despre-Donaldson' className='active-link-D-GD'>despre Donaldson</a>
                            {/* <Link to="/Donaldson" rel="noreferrer" className='active-link-D-GD'>
                                despre Donaldson
                            </Link> */}
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2 slide slide-top containsPage2-mobile'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            <a href='#despre-Gardner-Denver' className='active-link-D-GD'>despre Gardner Denver</a>
                            {/* <Link to="/GardnerDenver" rel="noreferrer" className='active-link-D-GD'>
                                despre Gardner Denver
                            </Link> */}
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                </div>
            </div>

            {/* "TITLURILE MARI" */}
            <section className='section1-buttons-under-D-and-GD two-columns'>
                <div className='display-block'>
                    {/* Donaldson */}
                    <p className='title3-1'>filtre, desprafuire industriala<br /><img className='arrow-for-title' src={arrowDown} alt='svg missing' /></p>
                    <hr></hr>
                    <div className='padding-buttons-in-display-block'>
                        <p><a className='buttonV1'>Desprafuire industriala, colectoare de praf, fum si COV</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        {/* <p><a className='buttonV1'></a></p> */}
                        <p><a className='buttonV1'>Ventilatoare</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1'>Filtre pentru ventilatii</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1'>Aspiratoare industriale</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1'>Filtre pentru solutii lichide, filtre de proces</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    </div>

                </div>
                <div className='display-block'>
                    {/* <h1>
                        <span></span>
                        <div class="message">
                            <div class="word1">compresoare</div>
                            <div class="word2">si</div>
                            <div class="word3">retele de aer comprimat</div>
                        </div>
                    </h1> */}
                    {/* GD */}
                    {/* <p className='title3-2'>compresoare si retele de aer comprimat</p> */}
                    <p className='title3-2'>
                        compresoare si retele de aer comprimat<br />
                        <img className='arrow-for-title' src={arrowDown} alt='svg missing' />
                    </p>
                    <hr></hr>
                    <div className='padding-buttons-in-display-block'>
                        <p><a href='#despre-Gardner-Denver' className='buttonV1 visited-link' activeClassName="active-link">Despre GD</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a href='#compresoare-cu-piston' className='buttonV1 visited-link' activeClassName="active-link">Compresoare cu piston</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1 visited-link' activeClassName="active-link">Compresare rotative (fara ungere/ cu ungere)</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1 visited-link' activeClassName="active-link">Filtrare si uscare aer comprimat</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1 visited-link' activeClassName="active-link">Recipienti de stocare aer comprimat</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    </div>

                </div>
            </section>



            {/* section despre Ultrafilter */}
            <section className='sectionX-despre-UFR'>
                <h1 id='despre-Ultrafilter' className='
                // title4
                title2-custom
                '>Despre Ultrafilter <sup style={{ color: '#1b2bff', fontSize: '20px', fontWeight: '700' }}>distribuitorul tau de compresoare si filtre industriale</sup></h1>
                <p className='card1 line-height'>
                    Infiintata in aprilie 1999 cu un personal format din doi angajati, s-a dezvoltat ca experta in domeniul filtratii/ purificarii aerului comprimat si a solutiilor lichide.
                    <div className='blue-fill-gap1'></div>
                    <div className='blue-fill-gap2'></div>
                    {/* <br /> */}
                    Actualmente ne consideram o firma inca mica, dar cu mare flexibililtate si dinamism cu un personal compus din 12 angajati, cu acoperire in zonele invecinate cu Satu Mare – Timisoara, Brasov, Sibiu, Ploiesti, Bucuresti si Constanta.
                    <div className='blue-fill-gap3'></div>
                    {/* <br /> */}
                    Cheia succesului nostru o reprezinta munca sustinuta, know how-ul acumulat “din teren” si imbinat cu sustinerea tehnica si experienta fabricantilor reprezentati de noi in Romania.
                    <div className='blue-fill-gap4'></div>
                    {/* <br /> */}
                    Specialitatea noastra a ramas expertiza in domeniul filtrarilor cu specializare in retele de aer comprimat; compresoare, filtre si uscatoare pentru aerul comprimat, putem realiza filtrarea aerului comprimat pana la nivelul de sterilizare; filtrare solutii lichide si racitoare frigorifice – water chillers pentru controlul temperaturii apei de racire; desprafuire industriala si colectoare de praf, fum si emulsii utilizate pentru purificarea mediului unde apar contaminanti in atmosfera degajati din procese tehnologice de productie; filtre rama pentru ventilatie si filtre Hepa; ventilatoare centrifugale si axiale; puneri in functiune, service, piese de schimb pentru compresoare si cartuse filtrante hidraulice, masuratori de debite, masutarori calitate aer comprimat, inchiriei compresoare, proiectare si solutii la cheie.
                </p>
            </section>

            {/* section GD intro */}
            <section className='sectionX-despre-GD'>
                <h1 id='despre-Gardner-Denver' className='
                title4
                title2-custom
                '>Despre Gardner Denver</h1>
                <p className='card1'>
                    <span className='line-height'>
                        Gardner Denver face parte din cel mai mare grup de producatori de utiaje dinamice, impreuna cu Champion, Ingersol Rand, CompAir, TamRotor, Hydrovane, Belliss&Morcom, Nash, TCM Marine, Elmo Rietschle, Ravell, Robuski, Bottarini, Mako, Drum.
                    </span>

                    <br />
                    <br />
                    Gardner Denver cuprinde:
                    <br />
                    <p><a href='#compresoare-cu-piston' className='buttonV1 visited-link button-color1' activeClassName="active-link">Compresoare cu piston</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    <p><a className='buttonV1 visited-link button-color1' activeClassName="active-link">Compresare rotative (fara ungere/ cu ungere)</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    <p><a className='buttonV1 visited-link button-color1' activeClassName="active-link">Filtrare si uscare aer comprimat</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    <p><a className='buttonV1 visited-link button-color1' activeClassName="active-link">Recipienti de stocare aer comprimat</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    <br />
                    <br />
                    <p>Pentru cea mai buna intelegere a aerului comprimat puteti consulta acest <a href="https://www.cagi.org/performance-verification/" target='_blank'>link</a> <img className='arrow-smaller' src={arrow} alt='svg missing' />.</p>
                    <p>Pentru mai multe detalii vedeti sectiunea <span style={{ color: '#1b2bff' }}>linkuri utile</span>.</p>
                </p>
            </section>

            {/* section Compresoare cu piston */}
            <section className='sectionX-compresoare-cu-piston'>
                <h1 id='compresoare-cu-piston' className='title2-custom'>Compresoare cu piston  
                {/* <sup style={{ color: '#1b2bff', fontSize: '10px' }}>click pentru a deschide / inchide rubrica </sup> */}
                </h1>
                {/* <div className='card1'> */}


                {/* <div className="container">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            ref={(el) => (divRefs.current[index] = el)}
                            className="box"
                            onMouseOver={() => handleHover(index)}
                            onClick={() => handleClick(index)}
                            style={{ left: index * 50 + "px" }}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div> */}



                {/* </div> */}
            </section >

            {/* <div className='toberelative'>
                <div className=' manila-folder1'>
                    <div className='manila-folder-label'>
                        compress
                    </div>
                    <div className='manila-folder-content'>
                        gfhdgndgndgddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </div>
                </div>
                <div className='manila-folder2 to-be-absolute'>
                    <div className='manila-folder-label'>
                        compress
                    </div>
                    <div className='manila-folder-content'>
                        gfhdgndgndgddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </div>
                </div>
                <div className='manila-folder3 to-be-absolute'>
                    <div className='manila-folder-label'>
                        compress
                    </div>
                    <div className='manila-folder-content'>
                        gfhdgndgndgddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </div>
                </div>
            </div> */}
            <div className='search-compresoare-cu-piston'>
                <input
                    type="text"
                    placeholder="cauta :-)"
                    ref={searchRef}
                    onChange={handleSearch}
                />
            </div>

            {/* <div className="container">
                
                <div
                    ref={(el) => (divRefs.current[0] = el)}
                    className="box"
                    onMouseOver={() => handleHover(0)}
                    onClick={() => handleClick(0)}
                    style={{ left: "0px" }}
                >
                    1
                </div>
                <div
                    ref={(el) => (divRefs.current[1] = el)}
                    className="box"
                    onMouseOver={() => handleHover(1)}
                    onClick={() => handleClick(1)}
                    style={{ left: "50px" }}
                >
                    2comp
                </div>
                <div
                    ref={(el) => (divRefs.current[2] = el)}
                    className="box"
                    onMouseOver={() => handleHover(2)}
                    onClick={() => handleClick(2)}
                    style={{ left: "100px" }}
                >
                    3 pirati
                </div>
                <div
                    ref={(el) => (divRefs.current[3] = el)}
                    className="box"
                    onMouseOver={() => handleHover(3)}
                    onClick={() => handleClick(3)}
                    style={{ left: "150px" }}
                >
                    4
                </div>
                <div
                    ref={(el) => (divRefs.current[4] = el)}
                    className="box"
                    onMouseOver={() => handleHover(4)}
                    onClick={() => handleClick(4)}
                    style={{ left: "200px" }}
                >
                    5
                </div>
            </div> */}


            <div className="container" style={{ marginTop: '100px' }}>

                <div
                    ref={(el) => (divRefs.current[0] = el)}
                    className="box"
                    onMouseOver={() => handleHover(0)}
                    onClick={() => handleClick(0)}
                    style={{ left: "0px", top: '0' }}
                >
                    <div className='toberelative'>
                        <div className='to-be-absolute label1 label'>
                            Compresoare cu piston Champion

                        </div>
                        <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                            <p>(poza9)</p>

                        </div>
                    </div>

                </div>
                <div
                    ref={(el) => (divRefs.current[1] = el)}
                    className="box"
                    onMouseOver={() => handleHover(1)}
                    onClick={() => handleClick(1)}
                    style={{ left: "10px", top: '2px' }}
                >

                    <div className='toberelative'>
                        <div className='to-be-absolute label2 label'>
                            Compresoare pentru cabinete dentare
                        </div>
                        <div className='manila-folder-content'>
                            2
                        </div>
                    </div>

                </div>
                <div
                    ref={(el) => (divRefs.current[2] = el)}
                    className="box"
                    onMouseOver={() => handleHover(2)}
                    onClick={() => handleClick(2)}
                    style={{ left: "20px", top: '4px' }}
                >
                    <div className='toberelative'>
                        <div className='to-be-absolute label3 label'>
                            Compresaore pentru suflat PET-uri
                        </div>
                        <div className='manila-folder-content'>
                            3 compress
                        </div>
                    </div>
                </div>
                <div
                    ref={(el) => (divRefs.current[3] = el)}
                    className="box"
                    onMouseOver={() => handleHover(3)}
                    onClick={() => handleClick(3)}
                    style={{ left: "40px", top: '6px' }}
                >
                    <div className='toberelative'>
                        <div className='to-be-absolute label4 label'>
                            Compresoare pentru umplut butelii
                        </div>
                        <div className='manila-folder-content'>
                            <div className='manila-folder-content-T'>
                                4
                                <p className='product-title'>Compresoare Champion de inalta presiune HP (232 – 300 bar), pentru umplut butelii cu aer respirabil</p>
                                <div className='line-separation'></div>
                                <div className='flex'>
                                    <img src={GD15} alt="img missing" className='img-inside-slider' />
                                    <div className='product-text'>
                                        <p>Compresooare Champion de inalta presiune, pentru umplut butelii/ cilindrii, aer respirabil utilizat de pompieri, echipaje de salvare (ex. Salvare miniera, metoru, etc), scafandrii autonomi.</p>
                                        <p>Compresoarele Champion sunt versatile, sigure, flexibile in aplicatii si utilizari asigurand:</p>
                                        <div className='margin-bottom-p'>
                                            <p>- timpi scurti de umplere a buteliilor;</p>
                                            <p>- functionare automata;</p>
                                            <p>- diverse modele de motoare de actionare;</p>
                                            <p>- usor de utilizat;</p>
                                            <p>- montate pe sasiu sau in carcasa isonorizata;</p>
                                            <p>- actionate cu motor electric sau cu motor termic Honda;</p>
                                            <p>- inlcud o varietate larga de accesorii.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    ref={(el) => (divRefs.current[4] = el)}
                    className="box"
                    onMouseOver={() => handleHover(4)}
                    onClick={() => handleClick(4)}
                    style={{ left: "50px", top: '8px' }}
                >
                    <div className='toberelative'>
                        <div className='to-be-absolute label5 label'>
                            label5
                        </div>
                        <div className='manila-folder-content'>
                            <div>
                                5
                            </div>

                        </div>
                    </div>
                </div>
            </div>























        </div >

    )
}

