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

import arrow from '../assets/north-east-arrow.svg';

// import hpimg1 from '../assets/HomePage/1_Colector_de_praf_Donaldson.jpg';
// import hpimg2 from '../assets/HomePage/2_Saci_filtranti.jpg';
// import hpimg3 from '../assets/HomePage/3_Elemente_filtrante_cartuse_filtrante.jpg';
import GD9 from '../assets/HomePage/9_compresoare_cu_piston_Champion.jpg';
import GD10 from '../assets/HomePage/10_Compresoare_pentru_cabinete_dentare.jpg';



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

    // test toggle hide unhide content
    const [div1Visible, setDiv1Visible] = useState(false);
    const [div2Visible, setDiv2Visible] = useState(false);

    const toggleDiv1 = () => {
        setDiv1Visible(!div1Visible);
    };

    const toggleDiv2 = () => {
        setDiv2Visible(!div2Visible);
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
                    <p className='regular-text-important'>filtre, desprafuire industriala</p>
                    <p><a className='buttonV1'>Desprafuire industriala, colectoare de praf, fum si COV</a></p>
                    <p><a className='buttonV1'>Ventilatoare</a></p>
                    <p><a className='buttonV1'>Filtre pentru ventilatii</a></p>
                    <p><a className='buttonV1'>Aspiratoare industriale</a></p>
                    <p><a className='buttonV1'>Filtre pentru solutii lichide, filtre de proces</a></p>
                </div>
                <div className='display-block'>
                    {/* GD */}
                    <p className='regular-text-important'>compresoare si retele de aer comprimat</p>
                    <p><a className='buttonV1' href='#despre-GD'>Despre GD</a></p>
                    <p><a className='buttonV1' href='#compresoare-cu-piston'>Compresoare cu piston</a></p>
                    <p><a className='buttonV1'>Compresare rotative (fara ungere/ cu ungere)</a></p>
                    <p><a className='buttonV1'>Filtrare si uscare aer comprimat</a></p>
                    <p><a className='buttonV1'>Recipienti de stocare aer comprimat</a></p>
                </div>
            </section>

            {/* section GD intro */}
            <section className='sectionX-despre-GD'>
                <h1 id='despre-GD'>Despre Gardner Denver</h1>
                <p>Gardner Denver face parte din cel mai mare grup de producatori de utiaje dinamice, impreuna cu Champion, Ingersol Rand, CompAir, TamRotor, Hydrovane, Belliss&Morcom, Nash, TCM Marine, Elmo Rietschle, Ravell, Robuski, Bottarini, Mako, Drum.</p>
            </section>

            {/* section Compresoare cu piston */}
            <section className='sectionX-compresoare-cu-piston'>
                <details >
                    {/* titlu */}
                    <summary><h1 id='compresoare-cu-piston' className='title2'>Compresoare cu piston</h1></summary>
                    <div className='content-under-title'>
                        <div className='two-columns'>
                            <div className='left-column-with-titles'>
                                <img src={GD9}></img>
                                <p>Compresoare cu piston Champion</p>
                                <div className='see-details'>
                                    <button onClick={toggleDiv1}>vezi descriere si tabel</button>
                                    <img className='arrow' src={arrow} alt='svg missing' />
                                </div>
                            </div>
                            {/* hide / unhide */}
                            <div>
                                {div1Visible && (
                                <div id="div1" className="details-product">
                                    <p>ALT TEXT Compresoare Champion pentru furnizarea aerului comprimat la scaunele cabinetelor dentare asigura un aer comprimat de calitate, fara continut de ulei, avand optiunea cu uscator cu membrana integrat si filtrare la 0.01µm. Pentru reducerea zgomotului pot fi montate in cabinete isonorizate.</p>

                                    <p className='regular-text'>
                                        Compresarele pot fi construite pentru presiuni de pana la 10 bar. Pentru presiuni de refulare de 8 bar debitul FAD se reduce cu 33%
                                    </p>
                                    <table>
                                        <tr>
                                            <th>Company</th>
                                            <th>Contact</th>
                                            <th>Country</th>
                                        </tr>
                                        <tr>
                                            <td>Alfreds Futterkiste</td>
                                            <td>Maria Anders</td>
                                            <td>Germany</td>
                                        </tr>
                                        <tr>
                                            <td>Centro comercial Moctezuma</td>
                                            <td>Francisco Chang</td>
                                            <td>Mexico</td>
                                        </tr>
                                        <tr>
                                            <td>Ernst Handel</td>
                                            <td>Roland Mendel</td>
                                            <td>Austria</td>
                                        </tr>
                                        <tr>
                                            <td>Island Trading</td>
                                            <td>Helen Bennett</td>
                                            <td>UK</td>
                                        </tr>
                                        <tr>
                                            <td>Laughing Bacchus Winecellars</td>
                                            <td>Yoshi Tannamuri</td>
                                            <td>Canada</td>
                                        </tr>
                                        <tr>
                                            <td>Magazzini Alimentari Riuniti</td>
                                            <td>Giovanni Rovelli</td>
                                            <td>Italy</td>
                                        </tr>
                                    </table>
                                </div>
                            )}
                            </div>
                            
                        </div>


                        <div className='two-columns'>
                            <div className='left-column-with-titles'>
                                <img src={GD10}></img>
                                <p>Compresoare pentru cabinete dentare</p>
                                <div className='see-details'>
                                    <button onClick={toggleDiv2}>vezi descriere si tabel</button>
                                    <img className='arrow' src={arrow} alt='svg missing' />
                                </div>
                            </div>
                            {/* hide / unhide */}
                            <div>
                                {div2Visible && (
                                <div id="div2" className="details-product">
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

            </section>




        </div>
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