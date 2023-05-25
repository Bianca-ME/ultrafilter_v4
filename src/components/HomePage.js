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

    const carouselRef = useRef(null);
    const firstImgRef = useRef(null);

    const handleArrowClick = (direction) => {
        const firstImgWidth = firstImgRef.current.clientWidth + 15;
        const scrollAmount = direction === 'left' ? -firstImgWidth : firstImgWidth;
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleDragStart = (e) => {
        e.preventDefault();
        const initialScrollLeft = carouselRef.current.scrollLeft;
        const initialPageX = e.pageX;

        const handleDragging = (event) => {
            const positionDiff = event.pageX - initialPageX;
            carouselRef.current.scrollLeft = initialScrollLeft - positionDiff;
        };

        const handleDragStop = () => {
            window.removeEventListener('mousemove', handleDragging);
            window.removeEventListener('mouseup', handleDragStop);
        };

        window.addEventListener('mousemove', handleDragging);
        window.addEventListener('mouseup', handleDragStop);
    };

    // -------------------------------------------------------------------------
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    // ------------------------------------------------------------------------------

    const [isHovered, setIsHovered] = useState(false);

    // test toggle hide unhide content
    const [divVisibility, setDivVisibility] = useState([false, false, false]);

    const toggleDiv = (index) => {
        const updatedVisibility = [...divVisibility];
        updatedVisibility[index] = !updatedVisibility[index];

        if (updatedVisibility[index]) {
            // Hide the other divs
            for (let i = 0; i < updatedVisibility.length; i++) {
                if (i !== index) {
                    updatedVisibility[i] = false;
                }
            }
        }

        setDivVisibility(updatedVisibility);
    };
    return (
        <div data-scroll>
            <div className='DonaldsonAndGD margin-from-header' id='toStickTo'>
                <div className='containsPage1 slide slide-top containsPage1-mobile'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            <Link to="/Donaldson" rel="noreferrer" className='active-link-D-GD'>
                                despre Donaldson
                            </Link>
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2 slide slide-top containsPage2-mobile'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            <Link to="/GardnerDenver" rel="noreferrer" className='active-link-D-GD'>
                                despre Gardner Denver
                            </Link>
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
                        <p><a href='#despre-GD' className='buttonV1 visited-link' activeClassName="active-link">Despre GD</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a href='#compresoare-cu-piston' className='buttonV1 visited-link' activeClassName="active-link">Compresoare cu piston</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1 visited-link' activeClassName="active-link">Compresare rotative (fara ungere/ cu ungere)</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1 visited-link' activeClassName="active-link">Filtrare si uscare aer comprimat</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                        <p><a className='buttonV1 visited-link' activeClassName="active-link">Recipienti de stocare aer comprimat</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
                    </div>

                </div>
            </section>



            {/* section despre Ultrafilter */}
            <section className='sectionX-despre-UFR'>
                <h1 id='despre-UFR' className='title4'>Despre Ultrafilter <sup style={{ color: '#1b2bff', fontSize: '20px', fontWeight: '700' }}>distribuitorul tau de compresoare si filtre industriale</sup></h1>
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
                <h1 id='despre-GD' className='title4'>Despre Gardner Denver</h1>
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
                <details >
                    {/* titlu */}
                    <summary><h1 id='compresoare-cu-piston' className='title2'>Compresoare cu piston  <sup style={{ color: '#1b2bff', fontSize: '10px' }}>click pentru a deschide / inchide rubrica </sup></h1></summary>
                    <div className='content-under-title to-be-relative'>
                        <p className='choose-item'>_  alege un compresor  //de rezolvat pozitia acestui text _</p>
                        <div className='two-columns'>
                            <div className='left-column-with-titles containerr'>
                                {/* <img src={GD9_} className='overlap-this'></img> */}
                                <img src={GD9} className='overlay'></img >
                                <p>Compresoare cu piston Champion</p>
                                <div className='see-details'>
                                    {/* <button onClick={() => toggleDiv(0)}>vezi descriere si tabel</button> */}
                                    <img className='arrow' src={arrow} alt='svg missing' />
                                </div>
                            </div>
                            {/* hide / unhide */}
                            <div className='right-column'>
                                {divVisibility[0] && (
                                    <div id="div1" className="details-product">
                                        <p style={{ fontSize: '18px' }}>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.
                                            Compresoare cu piston actionate cu motor temic Honda.</p>

                                        <table className='tabletemplate1'>
                                            {/* <colgroup>
    <col style={{backgroundColor:'red'}}>
    <col style={{backgroundColor:'yellow'}}>
  </colgroup> */}
                                            {/* 1 */}
                                            <tr>
                                                <td rowspan='2'></td>
                                                <td rowspan='2'>Compresoare cu piston si ungere cu ulei Champion, model</td>
                                                <td>Debit</td>
                                                <td>Presiune maxima</td>
                                                <td>Putere motor</td>
                                                <td>Nivel zgomot</td>
                                                <td>Alimentare</td>
                                                <td>Cu recipient</td>
                                            </tr>
                                            {/* 2 */}
                                            <tr>
                                                {/* <td></td> */}
                                                {/* deci tre sa sterg fiecare td 1 din fiecare urmatoarele row-uri */}
                                                {/* <td></td> */}
                                                <td>m³/min</td>
                                                <td>Bar</td>
                                                <td>Kw</td>
                                                <td>d(B)</td>
                                                <td>Volt/50Hz</td>
                                                <td>Volum litrii</td>
                                            </tr>

                                            {/* 3 */}
                                            <tr>
                                                <td rowspan='4' className='td-smaller-width1'>Compresoare cu actionare directa prin cuplaj "C base"</td>
                                                <td><NavLink to='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali/PDF'>CB-OF-6-CF15 <img className='arrow' src={arrow} alt='svg missing' style={{ height: '12px' }} /></NavLink></td>
                                                <td>0,12</td>
                                                <td>8</td>
                                                <td>1,1</td>
                                                <td>82</td>
                                                <td>230</td>
                                                <td>6</td>
                                            </tr>

                                            {/* 4 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CB-3-CF2 <img className='arrow' src={arrow} alt='svg missing' style={{ height: '12px' }} /></td>
                                                <td>0,19</td>
                                                <td>8</td>
                                                <td>1,5</td>
                                                <td>76</td>
                                                <td>230</td>
                                                <td>3 ÷ 100</td>
                                            </tr>

                                            {/* 5 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CB-24-CM25</td>
                                                <td>0,24</td>
                                                <td>9</td>
                                                <td>1,8</td>
                                                <td>79</td>
                                                <td>230</td>
                                                <td>24 ÷ 100</td>
                                            </tr>

                                            {/* 6 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CB-24-WB3</td>
                                                <td>0,34</td>
                                                <td>9</td>
                                                <td>2,2</td>
                                                <td>82</td>
                                                <td>230</td>
                                                <td>24 ÷ 100</td>
                                            </tr>

                                            {/* 6 * SPATIU */}
                                            <tr className='empty-row'></tr>

                                            {/* 7 */}
                                            <tr>
                                                <td rowspan='2'>Compresoare cu transmisie prin curele, o singura treapta de compresie, o singura faza.</td>
                                                <td>CL28B-25-CM2</td>
                                                <td>0,25</td>
                                                <td>10</td>
                                                <td>1,5</td>
                                                <td>77</td>
                                                <td>230</td>
                                                <td>25 ÷ 150</td>
                                            </tr>


                                            {/* 8 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CP28B-50-CM3</td>
                                                <td>0.29 ÷ 0.42</td>
                                                <td>10</td>
                                                <td>2,2</td>
                                                <td>76 ÷ 78</td>
                                                <td>230 ÷ 400</td>
                                                <td>50 ÷ 270</td>
                                            </tr>

                                            {/* 8 * SPATIU */}
                                            <tr className='empty-row'></tr>

                                            {/* 9 */}
                                            <tr>
                                                <td rowspan='5'>Compresoare cu transmisie prin curele, doua trepte de compresie, actionate cu  motor electric trifazat.</td>
                                                <td>CL4-200-FT4</td>
                                                <td>0,54</td>
                                                <td>10</td>
                                                <td>3</td>
                                                <td>75</td>
                                                <td>400</td>
                                                <td>200 ÷ 270</td>
                                            </tr>

                                            {/* 10 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CL5-200-FT55</td>
                                                <td>0,61</td>
                                                <td>11</td>
                                                <td>4</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 500</td>
                                            </tr>

                                            {/* 11 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CL6-200-FT75</td>
                                                <td>0,8</td>
                                                <td>11</td>
                                                <td>5,5</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 500</td>
                                            </tr>

                                            {/* 12 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CL10-270-FT10</td>
                                                <td>1,25</td>
                                                <td>11</td>
                                                <td>7,5</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 900</td>
                                            </tr>

                                            {/* 13 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CA15-500-FT155</td>
                                                <td>1,51</td>
                                                <td>11</td>
                                                <td>11</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 900</td>
                                            </tr>

                                            {/* 13 * SPATIU */}
                                            <tr className='empty-row'></tr>

                                            {/* 14 */}
                                            <tr>
                                                <td rowspan='4'>Compresoare cu transmisie prin curele, doua trepte de compresie, actionate cu motor electric trifazat.</td>
                                                <td>CA5-270-15-FT55</td>
                                                <td>0,43</td>
                                                <td>15</td>
                                                <td>4</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>270</td>
                                            </tr>

                                            {/* 15 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CA6-270-15-FT75</td>
                                                <td>0,57</td>
                                                <td>15</td>
                                                <td>5,5</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>270</td>
                                            </tr>

                                            {/* 16 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CA10-500-15-FT10</td>
                                                <td>0,94</td>
                                                <td>15</td>
                                                <td>7,5</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>500</td>
                                            </tr>

                                            {/* 17 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CA15-500-15-FT155 SDS</td>
                                                <td>1,14</td>
                                                <td>15</td>
                                                <td>11</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>500</td>
                                            </tr>

                                            {/* 17 * SPATIU */}
                                            <tr className='empty-row'></tr>

                                            {/* 18 */}
                                            <tr>
                                                <td rowspan='3'>Compresoare cu motor termic, tip Honda, cu benzina</td>
                                                <td>CA3-11+11-C4</td>
                                                <td>0,3</td>
                                                <td>10</td>
                                                <td>3</td>
                                                <td>74</td>
                                                <td>Honda</td>
                                                <td>22</td>
                                            </tr>

                                            {/* 19 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CA4-100-C55	</td>
                                                <td>0,42</td>
                                                <td>10</td>
                                                <td>4</td>
                                                <td>75</td>
                                                <td>Honda</td>
                                                <td>100 ÷ 200</td>
                                            </tr>

                                            {/* 20 */}
                                            <tr>
                                                {/* <td></td> */}
                                                <td>CA5-270-C9</td>
                                                <td>0,56</td>
                                                <td>10</td>
                                                <td>7,1</td>
                                                <td>81</td>
                                                <td>Honda</td>
                                                <td>270</td>
                                            </tr>
                                        </table>
                                        <br />
                                        <br />
                                        <br />

                                    </div>
                                )}
                            </div>

                        </div>


                        <div className='two-columns'>
                            <div className='left-column-with-titles'>
                                <img src={GD10}></img>
                                <p>Compresoare pentru cabinete dentare</p>
                                <div className='see-details'>
                                    <button onClick={() => toggleDiv(1)}>vezi descriere si tabel</button>
                                    <img className='arrow' src={arrow} alt='svg missing' />
                                </div>
                            </div>
                            {/* hide / unhide */}
                            <div>
                                {divVisibility[1] && (
                                    <div id="div2" className="details-product">
                                        Compresoare Champion pentru furnizarea aerului comprimat la scaunele cabinetelor dentare asigura un aer comprimat de calitate, fara continut de ulei, avand optiunea cu uscator cu membrana integrat si filtrare la 0.01µm. Pentru reducerea zgomotului pot fi montate in cabinete isonorizate.
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className='two-columns'>
                            <div className='left-column-with-titles'>
                                <img src={GD10}></img>
                                <p>Compresoare pentru cabinete dentare</p>
                                <div className='see-details'>
                                    <button onClick={() => toggleDiv(2)}>vezi descriere si tabel</button>
                                    <img className='arrow' src={arrow} alt='svg missing' />
                                </div>
                            </div>
                            {/* hide / unhide */}
                            <div>
                                {divVisibility[2] && (
                                    <div id="div3" className="details-product">
                                        Compresoare Champion pentru furnizarea aerului comprimat la scaunele cabinetelor dentare asigura un aer comprimat de calitate, fara continut de ulei, avand optiunea cu uscator cu membrana integrat si filtrare la 0.01µm. Pentru reducerea zgomotului pot fi montate in cabinete isonorizate.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </details>

                {/* hidden content description and table */}
                {/* <div>
                    <p>Compresoare Champion pentru furnizarea aerului comprimat la scaunele cabinetelor dentare asigura un aer comprimat de calitate, fara continut de ulei, avand optiunea cu uscator cu membrana integrat si filtrare la 0.01µm. Pentru reducerea zgomotului pot fi montate in cabinete isonorizate.</p>
                    <p>(tabel)</p>
                </div> */}
            </section >
            {/* --------------------------------------- */}
            {/* <div className='towrapeverything'>
                <div className="wrapper">
                    <img
                        id="left"
                        className="fa-solid fa-angle-left"
                        src={arrowLeft}
                        alt="img missing"
                        onClick={() => handleArrowClick('left')}
                    />
                    <div
                        className="carousel"
                        ref={carouselRef}
                        onMouseDown={handleDragStart}
                    >
                        <img src={GD9} alt="img missing" ref={firstImgRef} />
                        <img src={GD10} alt="img missing" />
                        <img src={GD11} alt="img missing" />
                        <img src={GD12} alt="img missing" />
                        <img src={GD13} alt="img missing" />
                        <img src={GD14} alt="img missing" />
                        <img src={GD15} alt="img missing" />
                    </div>
                    <img
                        id="right"
                        className="fa-solid fa-angle-right"
                        src={arrowRight}
                        alt="img missing"
                        onClick={() => handleArrowClick('right')}
                    />
                </div>
            </div> */}
            {/* ------------------------------------------------------------------ */}

            {/* <section className='section-slider'>
                
            </section> */}
            {/* <div></div> */}
            <Carousel responsive={responsive} className='carousel-container'
                swipeable={true}
                draggable={true}
            >
                <div className='product-card'>
                    <img src={GD9} alt="img missing" className='img-inside-slider' />
                    {/* <p>vezi detalii</p> */}
                    <p>Compresoare cu piston Champion</p>
                    <div className='see-details'>
                        <button onClick={() => toggleDiv(0)}>vezi descriere si tabel</button>
                        <img className='arrow' src={arrow} alt='svg missing' />
                    </div>
                    {/* ---- */}
                    <div className='details-under-card'>
                        {divVisibility[0] && (
                            <div id="div1" className="details-product-slider">
                                <p style={{ fontSize: '18px' }}>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.Compresoare cu piston actionate cu motor temic Honda.</p>



                                <br />
                                <br />
                                <br />

                            </div>
                        )}
                    </div>
                    {/* ---- */}
                </div>

                {/* --------------------------------- */}
                <div className='product-card'>
                    <img src={GD10} alt="img missing" className='img-inside-slider' />
                    {/* <p>vezi detalii</p> */}
                    <p>Compresoare cu piston Champion</p>
                    <div className='see-details'>
                        <button onClick={() => toggleDiv(0)}>vezi descriere si tabel</button>
                        <img className='arrow' src={arrow} alt='svg missing' />
                    </div>
                </div>
                <div className='right-column'>
                    {divVisibility[0] && (
                        <div id="div1" className="details-product-slider">
                            <p style={{ fontSize: '18px' }}>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.Compresoare cu piston actionate cu motor temic Honda.</p>
                            <p style={{ fontSize: '18px' }}>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.Compresoare cu piston actionate cu motor temic Honda.</p>
                            <p style={{ fontSize: '18px' }}>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.Compresoare cu piston actionate cu motor temic Honda.</p>
                            <br />
                            <br />
                            <br />

                        </div>
                    )}
                </div>
                {/* --------------------------------------------- */}
                <div className='product-card'>
                    <img src={GD11} alt="img missing" className='img-inside-slider' />
                    {/* <p>vezi detalii</p> */}
                    <p>Compresoare cu piston Champion</p>
                    <div className='see-details'>
                        <button onClick={() => toggleDiv(0)}>vezi descriere si tabel</button>
                        <img className='arrow' src={arrow} alt='svg missing' />
                    </div>
                </div>
                <div className='right-column'>
                    {divVisibility[0] && (
                        <div id="div1" className="details-product-slider">
                            <p style={{ fontSize: '18px' }}>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.
                                Compresoare cu piston actionate cu motor temic Honda.</p>
                            <br />
                            <br />
                            <br />

                        </div>
                    )}
                </div>


                {/* <img src={GD10} alt="img missing" />
                            <img src={GD11} alt="img missing" />
                            <img src={GD12} alt="img missing" />
                            <img src={GD13} alt="img missing" />
                            <img src={GD14} alt="img missing" />
                            <img src={GD15} alt="img missing" /> */}
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>

        </div >

    )
}

// style={{ backgroundImage: `url(${fan})`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover'}}

// <section className='sectionX-compresoare-cu-piston'>
//     <details>
//         <summary> <h1 id='compresoare-cu-piston'>Compresoare cu piston</h1>
    //         </summary>
    //         <details>
    //             <img src={GD9}></img>
    //             <summary>Compresoare cu piston Champion</summary>
    //             <p>vezi descriere si tabel</p>
    //         </details>
    //         <div>
    //             <p>Compresoare Champion pentru furnizarea aerului comprimat la scaunele cabinetelor dentare asigura un aer comprimat de calitate, fara continut de ulei, avand optiunea cu uscator cu membrana integrat si filtrare la 0.01µm. Pentru reducerea zgomotului pot fi montate in cabinete isonorizate.</p>

    //         </div>

    //         <details>
    //             <img src={GD10}></img>
    //             <summary>Compresoare pentru cabinete dentare</summary>
    //             <p>vezi descriere si tabel</p>
    //         </details>
    //     </details>

    // </section> 