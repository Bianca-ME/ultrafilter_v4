import React, { useRef, useEffect, useState } from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// imported smaller components (it's like storing code in a variable and importing those variables)
import { TestTable, TableCuPistonDebiteMici, TableScafandrii, TableCPtCabineteDentare, TableCCuExcentricSiCuPaletiCentrifugali, TableESM_23_29, TableESM_30_45, TableESM_55_75, TableESM_90_132, TableESM_VS_160_290, TableFM_7_22, TableCPortabile, TableCTipScroll, TableIndustry4, TableEnviroAirApa, TablePET } from '../TESTS/tables';

// asta va fi standardul pt flip html
{/* <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '500px' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/vnvn/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div> */ }

// products images
// GD
import GD01 from '../assets/products/34002_28_3_19_CA5_BP_FT55_m.jpg';
import GD02 from '../assets/products/32434_23_10_18_C_PRIME_50_25_S_m.jpg';
import GD03 from '../assets/products/ESM_23_29.jpg';
import GD04 from '../assets/products/ESM_30_45(1).jpg';
import GD05 from '../assets/products/ESM_30_45(2).jpg';
import GD06 from '../assets/products/ESM_55_75.jpg';
import GD07 from '../assets/products/ESM_90_132.jpg';
import GD08 from '../assets/products/ESM_160_290.jpg';
import GD09 from '../assets/products/FM_7_22.jpg';
import GD10 from '../assets/products/portabile-cu-suruburi.jpg';
import GD11 from '../assets/products/enviroair1.png';
import GD12 from '../assets/products/enviroair2.png';
import GD13 from '../assets/products/enviroair3.png';
import GD14 from '../assets/products/enviroair4.png';
import GD15 from '../assets/products/enviroair5.jpg';
import GD16 from '../assets/products/enviroair6.jpg';
import GD17 from '../assets/products/enviroair7.jpg';

import GD18 from '../assets/products/cuexcentricsipaleti.jpg';

import GD19 from '../assets/products/pentrusuflatpeturi.jpg';

import GD20 from '../assets/products/pentruscafandrii1.jpg';
import GD21 from '../assets/products/pentruscafandrii2.jpg';





// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Cabinete_dentare_compresoare_fara_ungere from '../pages/Gardner-Denver/Compresoare/Cabinete_dentare_compresoare_fara_ungere';
import SlidingPane from "../sliding-pane/react-sliding-pane.js";
import '../assets/react-sliding-pane.css';

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
import DlogoSVG from '../assets/donaldson-company-1.svg';
import GDlogoSVG from '../assets/Gardner_Denver_logo.svg.png';



import Dlogo from '../assets/donaldson-logo.jpg';
import GDlogo from '../assets/gardner-denver-logo.jpg';

import arrow from '../assets/north-east-arrow.svg';

// import hpimg1 from '../assets/HomePage/1_Colector_de_praf_Donaldson.jpg';
// import hpimg2 from '../assets/HomePage/2_Saci_filtranti.jpg';
// import hpimg3 from '../assets/HomePage/3_Elemente_filtrante_cartuse_filtrante.jpg';
// import GD9 from '../assets/HomePage/9_compresoare_cu_piston_Champion.jpg';
// import GD9 from '../assets/test/c9.png';
// import GD9_ from '../assets/test/c9_.png';
// import GD10 from '../assets/HomePage/10_Compresoare_pentru_cabinete_dentare.jpg';
// // import GD11 from '../assets/HomePage/11_Compresoare_portabile.jpg';
// import GD12 from '../assets/HomePage/12_Comprresoare_cu_excentric_si_paleti.jpg';
// import GD13 from '../assets/HomePage/13_Compresoare_Scroll_fara_ungere.jpg';
// import GD14 from '../assets/HomePage/14_compresoare_pentru_suflat_PET-uri_BELLISS_MORCOM.jpg';
// import GD15 from '../assets/HomePage/15_Compresoare_pentru_umplut_butelii.jpg';



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
import grain1 from '../assets/test/grain1.jpg';
import grain2 from '../assets/test/grain3.png';
import grain4 from '../assets/green-screen4.png';
import cc1 from '../assets/test/cc2-crop1.png';
import arrowDown from '../assets/arrow-down-339.svg';
import arrowRightDown from '../assets/arrow-right-down355.svg';
import arrowLeft from '../assets/arrow-left-334-svgrepo-com.svg';
import arrowRight from '../assets/arrow-right-333-svgrepo-com.svg';
// import mapSketch from '../assets/map.png';
import mapSketch from '../assets/map2.png';
import UFRteam from '../assets/team-2.jpg';
// import bannerIMG from '../assets/bannerIMG2500x2056.png';
// import bannerIMG from '../assets/bannerIMG2500x2056-crop1.png';
// import bannerIMG from '../assets/creasta-crop1.png';
// going to work
// import bannerIMG from '../assets/_DSC7118Copy1.jpg';
// golden fields
// import bannerIMG from '../assets/_DSC6759Copy1.jpg';
// import bannerIMG from '../assets/test/creasta-crop2.jpg';
// import bannerIMG from '../assets/bannerIMG2500x2056-crop2.png';
// import Picture49 from '../assets/Picture49.png';
// import Picture49 from '../assets/Picture49-grainy.png';
import Picture49 from '../assets/Picture49-less-grainy.png';
import displaylessgrain from '../assets/display-less-grain.png';
import displaymoregrainbrighter from '../assets/display-more-grain-brighter.png';
import displaymoregrainbrightercrop1 from '../assets/display-more-grain-brighter-crop1.png';
import displaymoregrainbrightercrop2 from '../assets/display-more-grain-brighter-crop2.png';
// import bannerIMG from '../assets/test/forest1.jpg';
// import bannerIMG from '../assets/test/greenfield.jpg';
// import bannerIMG from '../assets/test/abstract4.jpg';
// import bannerIMG from '../assets/test/mountains12.jpg';
// import bannerIMG from '../assets/test/mo4.jpg';
import bannerIMG from '../assets/test/mountains13.jpg';



import pdftesstpublic from '../../public/testPDF.pdf';
import pdftesstout from '../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf';
import pdftesst from '../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf';


import addClassOnInView from '../testingPurposes/inViewTrigger';

// styling
import '../assets/commonstyle.css';
import { unknownTable } from '../TESTS/tables';

//

const randomNumber = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
console.log(randomNumber);



export default function HomePage() {

    // --------------------------------

    // sliding pane --- >
    const [state, setState] = useState({
        pane_Cabinete_dentare_compresoare_fara_ungere: false,
        pane_EnviroAir_T: false,
        pane_brosura_compresoare_cu_suruburi_elicoidale: false
    });

    // --- sliding pane <

    // 

    const divRefs = useRef([]);
    const searchRef = useRef(null);

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
        <div data-scroll toberelative >
            <SlidingPane
                className="some-custom-class stop-background-scroll"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_Cabinete_dentare_compresoare_fara_ungere}
                title="titlu titlu titlu titlu"
                subtitle="subtitlu subtitlu subtitlu"
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_Cabinete_dentare_compresoare_fara_ungere: false });
                }}
            >
                <div className=''>
                    <iframe src='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' width="1000px" height="550px" allow="autoplay"></iframe>

                </div>
            </SlidingPane>
            <SlidingPane
                className="some-custom-class stop-background-scroll"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_EnviroAir_T}
                title="titlu titlu titlu titlu"
                subtitle="subtitlu subtitlu subtitlu"
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_EnviroAir_T: false });
                }}
            >
                <div className=''>
                    {/* <iframe src='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' width="1000px" height="550px" allow="autoplay"></iframe> */}
                    {/* <div className='flip-book' ><iframe className='iframe-flip-book' src="https://online.fliphtml5.com/bvxpp/vnvn/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div> */}
                    <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/vnvn/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
                </div>
            </SlidingPane>

            <SlidingPane
                className="some-custom-class stop-background-scroll"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_brosura_compresoare_cu_suruburi_elicoidale}
                title="compresoare cu suruburi elicoidale"
                subtitle="brosura"
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_brosura_compresoare_cu_suruburi_elicoidale: false });
                }}
            >
                <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/mqmf/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
            </SlidingPane>




            <div className='DonaldsonAndGD margin-from-header' id='toStickTo'>
                <div className='containsPage1 slide slide-top containsPage1-mobile'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            filtre, desprafuire industriala
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2 slide slide-top containsPage2-mobile'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            compresoare si retele de aer comprimat
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                </div>
            </div>



            {/* NEW D and GD background with mountains */}
            {/* <div className='margin-from-header top-banner'>
                <div className='toberelative'>
                    <p>tehnologie pentru un mediu mai curat</p>
                    <img className='reallyBigIMG' src={bannerIMG} alt="Donaldson logo can.t be seen" />
                    <div className='D-and-GD-logos-container-flex'>
                        <div className='GD-container--'>
                            <img className='page2GardnerDenver--' src={GDlogoSVG} alt="Donaldson logo can.t be seen"></img>
                        </div>
                        <div className='space-between-logos-D-and-GD'></div>
                        <div className='D-container--'>
                            <img className='page1Donaldson--' src={DlogoSVG} alt="Donaldson logo can.t be seen"></img>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* "TITLURILE MARI" */}
            <section className='section1-buttons-under-D-and-GD two-columns'
                style={{ backgroundImage: `url(${Picture49})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
                <div className='display-block'>
                    {/* Donaldson */}
                    <p className='title3-1'>filtre, desprafuire industriala
                        {/* <br /><img className='arrow-for-title' src={arrowDown} alt='svg missing' /> */}
                    </p>
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

                    <p className='title3-2'>
                        compresoare si retele de aer comprimat<br />
                        {/* <img className='arrow-for-title' src={arrowDown} alt='svg missing' /> */}
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
                <h1 id='despre-Ultrafilter' className='title2-custom'
                // title4

                >Despre Ultrafilter <sup style={{ color: '#1b2bff', fontSize: '20px', fontWeight: '700' }}>distribuitorul tau de compresoare si filtre industriale</sup></h1>
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

            <input
                type="text"
                placeholder="cauta :-)"
                ref={searchRef}
                onChange={handleSearch}
            />

            {/* section Compresoare */}
            {/* <section className='sectionX-compresoare-cu-piston tobeabsolute' >
                <h1 id='compresoare' className='title2-custom'>Compresoare</h1>
                <div className='search-compresoare-cu-piston'>
                    <input
                        type="text"
                        placeholder="cauta :-)"
                        ref={searchRef}
                        onChange={handleSearch}
                    />
                </div>
            </section > */}

            {/* adauga spatiu */}

            {/* compresoare ... cu piston */}
            <div className='entire-height-of-product-card'>
                <div id='compresoare-cu-piston' className='hidden-titles'>Compresoare cu piston</div>
                <div className='title4-custom'>Compresoare cu piston</div>
                {/* OK */}
                <div className="container-x0" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[0] = el)}
                        className="box"
                        onMouseOver={() => handleHover(0)}
                        onClick={() => handleClick(0)}
                        style={{ left: "0px", top: '0px' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label1 label'>
                                Compresoare cu piston Champion, debite mici
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu piston, Champion, debite mici, presiuni pana la 15 bar, pentru ateliere de lucru</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD01} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <p>Compresoare cu piston actionate cu motor temic Honda</p>
                                                <br />
                                                <p>Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.</p>
                                                <br />
                                                <br />
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableCuPistonDebiteMici />

                                    </div>
                                </div>

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
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare Champion, fara ungere, pentru aplicatii la cabinetele dentare si mici ateliere de bijuterii</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD02} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <p>Compresoare cu piston actionate cu motor termic Honda</p>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <p>Compresoare Champion pentru furnizarea aerului comprimat la scaunele cabinetelor dentare asigura un aer comprimat de calitate, fara continut de ulei, avand optiunea cu uscator cu membrana integrat si filtrare la 0.01µm. Pentru reducerea zgomotului pot fi montate in cabinete isonorizate.</p>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableCPtCabineteDentare />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* adauga spatiu */}

            {/* compresoare ... cu suruburi elicoidale GD */}
            {/* //CHUNK  */}
            <div className='entire-height-of-product-card-x1'>
                <h1 id='compresoare-cu-suruburi-elicoidale' className='title5-custom'>Compresoare cu suruburi elicoidale<br />Gardner Denver<br /><br /></h1>
                {/* OK */}
                {/* compresoare ... cu suruburi elicoidale GD ... si injectie de ulei */}
                <div id='si-injectie-de-ulei' className='hidden-titles'>Compresoare cu suruburi si injectie de ulei</div>
                <div className='title4-custom'>Compresoare cu suruburi si injectie de ulei</div>
                {/* <div className='text-under-title4'> */}
                {/* //CHUNK */}
                <div className='card3'>
                    <p>Compresoarele sunt mai mult decat o investitie financiara, ele reprezinta o cheie importanta in asigurarea fabricarii, procesarii si operarii fluxurilor tehnologice, a produsului finit, utilizant o forta de miscare de inalta calitate asigurata cu costrui reduse.</p>
                    {/* <br /> */}
                    <p>Elementele de compresie- suruburile elicoidale si blocul de compresie – sunt principalele componente ale compresorului si de aceea Gardner Denver pastreaza “in house” proiectarea si fabricarea acestor componente utilizand cele mai modern masini CNC de prelucrare prin rectificare impreuna cu tehnologie laser “on line”.</p>
                    {/* <br /> */}
                    <p>Rezultatul este un bloc de compresie eficient energetic, performant si durabil in exploatare, ceea ce afec ca Gardner Denver sa acorde un maxim de garantie de 10 ani sau de 44000 h de functionare, care dintre cele doua conditii expira prima.</p>
                    <br />
                    <p onClick={() => setState({ pane_brosura_compresoare_cu_suruburi_elicoidale: true })} className='see-brochure'>broșură</p>
                </div>
                <div style={{ height: '80px' }}></div>
                {/* //CHUNK OK*/}
                <div className="container-x1" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[5] = el)}
                        className="box"
                        onMouseOver={() => handleHover(5)}
                        onClick={() => handleClick(5)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label1-1 label-x1'>
                                ESM 23-29
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 23, ESM 26, ESM 29 si cu turatie variabila VS 23, VS 26, VS 29 optional cu uscator de aer prin refrigerare – integrat</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD03} alt="img missing" className='img-inside-slider' />
                                            {/* <div className='product-text'>
                                                
                                            </div> */}
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableESM_23_29 />

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div
                        ref={(el) => (divRefs.current[6] = el)}
                        className="box"
                        onMouseOver={() => handleHover(6)}
                        onClick={() => handleClick(6)}
                        style={{ left: "10px", top: '2px' }}
                    >

                        <div className='toberelative'>
                            <div className='to-be-absolute label2-1 label-x1'>
                                ESM 30-45
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 30, ESM 37, ESM 45, ESM 30<span>e</span>, ESM 37<span>e</span>, ESM 45<span>e</span> si cu turatie variabila VS 30, VS 37, VS 45, VS 37<span>e</span>, VS 45<span>e</span></p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD04} alt="img missing" className='img-inside-slider' />
                                            {/* <div className='product-text'>
                                                
                                            </div> */}
                                            <img src={GD05} alt="img missing" className='img-inside-slider' />
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableESM_30_45 />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        ref={(el) => (divRefs.current[7] = el)}
                        className="box"
                        onMouseOver={() => handleHover(7)}
                        onClick={() => handleClick(7)}
                        style={{ left: "20px", top: '4px' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label3-1 label-x1'>
                                ESM 55-75
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 55, ESM 75, ESM 55<span>e</span>, ESM 75<span>e</span> si cu turatie variabila VS 55, VS 75</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD06} alt="img missing" className='img-inside-slider' />
                                            {/* <div className='product-text'>
                                                
                                            </div> */}
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableESM_55_75 />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={(el) => (divRefs.current[8] = el)}
                        className="box"
                        onMouseOver={() => handleHover(8)}
                        onClick={() => handleClick(8)}
                        style={{ left: "40px", top: '6px' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label4-1 label-x1'>
                                ESM 90-132
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 55, ESM 75, ESM 55<span>e</span>, ESM 75<span>e</span> si cu turatie variabila VS 55, VS 75</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD07} alt="img missing" className='img-inside-slider' />
                                            {/* <div className='product-text'>
                                               
                                            </div> */}
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableESM_90_132 />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        ref={(el) => (divRefs.current[9] = el)}
                        className="box"
                        onMouseOver={() => handleHover(9)}
                        onClick={() => handleClick(9)}
                        style={{ left: "50px", top: '8px' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label5-1 label-x1'>
                                ESM 160-290
                            </div>
                            <div className='manila-folder-content'>

                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 160, ESM 200, ESM 260 si cu turatie variabila VS 160, VS 200, VS 250, VS 290</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD08} alt="img missing" className='img-inside-slider' />
                                            {/* <div className='product-text'>
                                               
                                            </div> */}
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableESM_VS_160_290 />

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* adauga spatiu */}
                <div style={{ height: '700px' }}></div>

                {/* ----------------------------------------------------------------------- */}
                {/* OK */}
                {/* compresoare ... cu suruburi elicoidale GD ... si injectie de ulei (continuare)*/}
                <div className="container-x2" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[10] = el)}
                        className="box"
                        onMouseOver={() => handleHover(10)}
                        onClick={() => handleClick(10)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label6-1 label-x1'>
                                FM 7-22
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare Champion cu suruburi elicoidale si ungere cu ulei</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD09} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <p>Compresoarele Champion cu suruburi elicoidale model Enduro de mare fiabilitate si eficiente energetic, folosesc injectia de ulei in blocul de ocmpresie pentru a asigura ungerea mecanismului, etansarea cat si preluarea temperaturii de compresie.</p>
                                                <br />
                                                <p>Controllerul C-PRO 2.0 guverneaza functionarea compresorului, indica parametrii de stare cat si avertizari, alarme si protectia termica a motorului si a circuitului de aer si ulei.</p>
                                                <br />
                                                <p>Compresoarele cu surub Champion este recomandabil sa fie folosite in temperature ambientale de maximum 46⁰C.</p>
                                                <br />
                                                <p>Compresoarele cu suruburi elicoidale Champion pot fi livrate de sine stataor cat si montate pe recipient de aer comprimat in pachet cu filtru si uscator de aer prin refrigerare.</p>
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableFM_7_22 />

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div
                        ref={(el) => (divRefs.current[11] = el)}
                        className="box"
                        onMouseOver={() => handleHover(11)}
                        onClick={() => handleClick(11)}
                        style={{ left: "10px", top: '2px' }}
                    >

                        <div className='toberelative'>
                            <div className='to-be-absolute label7-1 label-x1'>
                                compresoare de asfalt
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare Champion mobile, acolo unde ai nevoie de aer comprimat</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD10} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>

                                                <br />
                                                <br />
                                                <p>Solutia de a avea aer comprimat portabil la diverse aplicatii de reparatii stradale sau locuri intamplatoare de lucru o reprezinta compresoarele cu surub sau turbocompresoarele portabile, compresoare de asfalt 😊.</p>
                                                <br />
                                                <p>Usor de tractat sau de transportat, cu sursa independenta de actionare, compacte si usoare, functioneaza cu emisii reduse, eficiente energetic.</p>
                                            </div>

                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableCPortabile />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>

            {/* adauga spatiu */}
            <div style={{ height: '50px' }}></div>

            {/* //CHUNK */}
            {/* compresoare ... cu suruburi elicoidale GD ... oil free*/}
            <div className='entire-height-of-product-card-x3'>
                <div id='oil-free' className='hidden-titles'>Compresoare cu suruburi oil free</div>
                <div className='title4-custom'>Compresoare cu suruburi oil free</div>
                {/* <div className='text-under-title4'> */}
                {/* //CHUNK */}
                {/* <div className='card3'></div> */}
                {/* <div style={{ height: '80px' }}></div> */}
                {/* //CHUNK OK */}
                <div className="container-x3" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[12] = el)}
                        className="box"
                        onMouseOver={() => handleHover(12)}
                        onClick={() => handleClick(12)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label8-1 label-x1'>
                                tip scroll, compresoare Champion
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare Champion, 100% oil free, bloc de compresie scroll</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD03} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <p>Puritatea aerului comprimat este cruciala in aplicatile multor sectoare industriale, cum ar fi cercetarea, biotehnologie, electronica, medicina, tipografii, industria auto, etc. Seria-S de compresoare scroll Champion fara ungere, nu utilizeaza uleiuri pentru ungere sau etansare, este certificate clasa 0 cf. DIN ISO 8573-1 si silicon free, cee ace reprezinta cel mai inalt standard de calitate al aerului comprimat.</p>
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableCTipScroll />

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div
                        ref={(el) => (divRefs.current[13] = el)}
                        className="box"
                        onMouseOver={() => handleHover(13)}
                        onClick={() => handleClick(13)}
                        style={{ left: "10px", top: '2px' }}
                    >

                        <div className='toberelative'>
                            <div className='to-be-absolute label9-1 label-x1'>
                                cu injectie de apa pura EnviroAir
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>EnviroAir - oil and silicon free</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            {/* <img src={GD04} alt="img missing" className='img-inside-slider' /> */}
                                            <div className='product-text'>
                                                <p className='title6-custom'>De ce un compresor Gardner Denver EnviroAire, Oil si Silicon Free</p>
                                                <img src={GD11} alt="img missing" className='img-inside-slider' />
                                                <br />
                                                <p>Aerul comprimat este utilizat ca energie de miscare a fluxului tehnologic si de multe ori intra in contact cu produsul. Daca aceste produs este un produs alimetar (ex.ciocolata, unt, paine, apa minerala, bere, ulei, sucuri, zahar, iaurt, etc), daca aerul respectiv este utilizat la sistemele de respirat si mentinerea vietii (ex. spitale, policlinici, salvare), daca produsul finit pentru a avea calitate si durabilitate in timp trebuie sa fie lipsit de urme de ulei (ex. industria auto, vopsitorii, etc), daca produceti ambalaje pentru industria alimentara (ex. sticle PET sau ambalaje preformate), daca aerul comprimat este folosit pentru producerea gazelor tehnice (ex. oxigen), atunci va trebuiesc compresoare ce nu au ulei in camera de compresie si nici in circuitul aerului comprimat.</p>
                                                <p>Da, dar nu este suficient! Intotdeauna exista pericolul ca aerul absorbit in compresor, care desi este oil free, sa fie un aer contaminat cu vapori de hidrocarburi respetiv ulei, mai ales in zonele industriale cat si cele cu trafic auto. Si ce intreprindere nu are trafic de camioane in curte?</p>
                                                <p>Solutia este compresorul Gardner Denver, EnviroAire cu injectie de apa.</p>
                                                <p>Fata de compresoarele clasice fara ulei in camera de compresie si care lucreaza uscat, compresoarele Gardner Denver EnviroAire folosesc injectie de apa in blocul de compresie.</p>
                                                <p>Astfel aerul comprimat este si "spalat", iar eventualele urme de ulei provenite din atmosfera se pot combina in emulsii. Apa, o data contaminata este automat inlocuita de comanda compresorului. </p>
                                                <p>Suplimentar compresoarele sunt certificate si Silicon Free!</p>
                                                <br />
                                                <p className='title6-custom'>Ce avantaje tehnice include EnviroAire?</p>
                                                <p className='title6-custom'>100 % Oil-Free</p>
                                                <p>Temperatura gazului in blocul de compresie este la 60&#176;C, fata de 200&#176;C la compresoarele Oil Free cu camera uscata. Temperatura scazuta si incarcarea lagarelor permit utilizarea lagarelor fara intretinere, inlaturand neceistatea folosirii uleiului pentru ungerea lagarelor (ca in cazul compresoarelor Oil Free cu camera uscata).</p>
                                                <p>Compresorul EnviroAire nu contine nici un cartus de filtrare a uleiului si nu are ulei cum ar fi compresoarele ce au reductor de transmisie.</p>
                                                <br />
                                                <p className='title6-custom'>Un singur etaj de compresie ce foloseste injectia cu apa</p>
                                                <p>Blocul de compresie actionat prin transmisie directa, confera o eficienta superioara altor tipuri de compresoare ce au in componenta doua camere de compresie si turatii mari. Designul inovativ al blocului de compresie ce functioneaza cu turatii mici, iar compresia are loc pe doua parti ale rotorului, reduc semnificativ incarcarea pe lagare si cresc eficienta compresiei. Materialele componente sunt bronzul si fibra de carbon.</p>
                                                {/* img */}
                                                <br />
                                                <p className='title6-custom'>Filtru de aer pe admisie tip "Heavy Duty"</p>
                                                <p>Filtru de aer cu doua etaje de filtrare cu eficienta de  99.9% pemtru particule mecanice mai mari de 3µm protejeaza blocul de compresie cat si calitatea apei de injectie.</p>
                                                <br />
                                                <p className='title6-custom'>Apa purificata ca element de ungere si etansarea blocului de compresie</p>
                                                <img src={GD14} alt="img missing" className='img-inside-slider' />
                                                <p>Apa filtrata prin osmoza inversa - echipament integrat, asigura cea mai buna calitate de apa folosita in blocul de compresie la etansarea elementelor de compresie, la preluarea temperaturii de compresie cat si la ungerea lagarelor. Apa pura asigura o functionare fiabila a compresorului cat si o durata extinsa de exploatare a blocului de compresie. Inlocuirea apei de compresie se face automat cu aport zilnic de apa, numai 10 litrii de apa potabila din reteaua de apa a fabricii.</p>
                                                <br />
                                                <p className='title6-custom'>Sistem de control avansat- tehnologie Touch Screen integrata</p>
                                                <img src={GD15} alt="img missing" className='img-inside-slider' />
                                                <p>Sistemul de control si comanda GD protejeaza investitia Dvs si asigura exploatarea compresorului si comunicarea cu acesta, in mod prietenos. Afiseaza conditia de stare, guverneaza functionarea compresorului, deschide meniuri si submeniuri, afiseaza grafice, afiseaza avertismente, si avarii, memoreaza functiona-rea compresorului, pe scurt "va scapa de griji".</p>
                                                <br />
                                                <p className='title6-custom'>Motor electric cu protectie IP55, compresor standard cu variator de turatie, debit variabil</p>
                                                <img src={GD16} alt="img missing" className='img-inside-slider' />
                                                <p>Pentru a asigura "aer cat am nevoie" si a reduce consumul energetic, compresoarele EnviroAire sunt echipate cu invertor.</p>
                                                <br />
                                                <p className='title6-custom'>Design pentru service facil</p>
                                                <p>Proiecatrea compresorului a tinut cont de simplificarea interventilor de service. Fiecare componenta ce trebuie intretinuta are acces facil, de catre operatorul de intretinere. Pentru a minimiza costurile de intretinere componentele compresorului au fost proiectare sau selectionate pentru o intretinere la 4000 h, intreval intre interventii.</p>
                                                <br />
                                                <p className='title6-custom'>Standard de fabrica: 5 ani garantie!</p>
                                                <img src={GD17} alt="img missing" className='img-inside-slider' />
                                                <br />
                                                <p>EnviroAire:</p>
                                                <ul style={{ paddingLeft: '0px', lineHeight: '1.3' }}>
                                                    <li><div className='ul-style'></div> un singur etaj de compresie cu actionare directa</li>
                                                    <li><div className='ul-style'></div> injectie de apa pura ce etanseaza si asigura ungerea si preia temperatura de compresie</li>
                                                    <li><div className='ul-style'></div> carcasa isonorizata cu zgomot redus</li>
                                                    <li><div className='ul-style'></div> greutate mai mica decat un compresor conventional cu camera uscata</li>
                                                    <li><div className='ul-style'></div> cu variator de turatie si debit variabil</li>
                                                    <li><div className='ul-style'></div> elemente de compresie din bronz si fibra de carbon</li>
                                                    <li><div className='ul-style'></div> controller Touch Screen simplu de operat cu comunicare prietenoasa</li>
                                                    <li><div className='ul-style'></div> fara ulei</li>
                                                    <li><div className='ul-style'></div> fara separator de ulei</li>
                                                    <li><div className='ul-style'></div> fara cartuse de ulei</li>
                                                    <li><div className='ul-style'></div> fara reductor</li>
                                                    <li><div className='ul-style'></div> fara radiator de racire</li>
                                                    <li><div className='ul-style'></div> fara pompa de ulei</li>
                                                    <li><div className='ul-style'></div> fara etansari complicate</li>
                                                </ul>
                                                <br />
                                            </div>
                                            {/* <img src={GD05} alt="img missing" className='img-inside-slider' /> */}
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableEnviroAirApa />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        ref={(el) => (divRefs.current[14] = el)}
                        className="box"
                        onMouseOver={() => handleHover(14)}
                        onClick={() => handleClick(14)}
                        style={{ left: "20px", top: '4px' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label10-1 label-x1'>
                                EnviroAir T
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>EnviroAir T</p>
                                    <div className='line-separation'></div>

                                    <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '500px' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/vnvn/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>


                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            {/* <img src={GD06} alt="img missing" className='img-inside-slider' /> */}
                                            <div className='product-text'>
                                                {/* <button className='buttonV2' onClick={() => setState({ pane_EnviroAir_T: true })}>
                                                deschide PDF                                                   </button>
                                                <img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} /> */}



                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={(el) => (divRefs.current[15] = el)}
                        className="box"
                        onMouseOver={() => handleHover(15)}
                        onClick={() => handleClick(15)}
                        style={{ left: "40px", top: '6px' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label11-1 label-x1'>
                                Industry 4, compresoare Ultima
                            </div>
                            <div className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu suruburi elicodale si injectie de ulei, Gardner Denver cu turatie fixa ESM 160, ESM 200, ESM 260 si cu turatie variabila VS 160, VS 200, VS 250, VS 290</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            {/* <img src={GD07} alt="img missing" className='img-inside-slider' /> */}
                                            {/* <div className='product-text'>
                                                
                                            </div> */}
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableIndustry4 />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* OK */}
            {/* compresoare ... cu excentric si paleti Vane Compressors */}
            {/* //CHUNK */}
            <div className='entire-height-of-product-card-x4'>
                {/* <h1 id='compresoare-cu-suruburi-elicoidale' className='title5-custom'>Compresoare cu excentric si paleti Vane Compressors<br />Gardner Denver<br /><br /></h1> */}
                {/* compresoare ... cu suruburi elicoidale GD ... si injectie de ulei */}
                <div id='compresoare-cu-excentric-si-paleti' className='hidden-titles'>Compresoare cu excentric si paleti Vane Compressors</div>
                <div className='title4-custom'>Compresoare cu excentric si paleti Vane Compressors</div>
                {/* <div className='text-under-title4'> */}
                {/* //CHUNK */}
                {/* <div className='card3'>
                
                </div> */}
                {/* <div style={{ height: '80px' }}></div> */}
                {/* //CHUNK */}
                <div className="container-x4" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[16] = el)}
                        className="box"
                        onMouseOver={() => handleHover(16)}
                        onClick={() => handleClick(16)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label12-1 label-x1'>
                                .
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Champion Rotary Vane Compressors_ Compresoare Champion cu excentric si paleti</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD18} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <ul style={{ paddingLeft: '0px', lineHeight: '1.3' }}>
                                                    <li><div className='ul-style'></div> anduranta mare in exploatare</li>
                                                    <li><div className='ul-style'></div> intretinere minima</li>
                                                    <li><div className='ul-style'></div> doi ani garantie standard</li>
                                                    <li><div className='ul-style'></div> design foarte simplist</li>
                                                    <li><div className='ul-style'></div> actionate prin cuplaj elastic de motoare electrice</li>
                                                    <li><div className='ul-style'></div> nivel scazut de zgomot</li>
                                                    <li><div className='ul-style'></div> fara reductor pentru transmisie</li>
                                                    <li><div className='ul-style'></div> calitate ridicata a aerului refulat</li>
                                                    <li><div className='ul-style'></div> ungere cu ulei</li>
                                                    <li><div className='ul-style'></div> fara rulmenti care sa preia fortele axiale</li>
                                                    <li><div className='ul-style'></div> fara forte axiale in camera de compresie, avantaj fata de compresoarele cu suruburi elicoidale</li>
                                                    {/* <li><div className='ul-style'></div></li> */}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        <div style={{ height: '50px' }}></div>

                                        {/* tabel */}
                                        <TableCCuExcentricSiCuPaletiCentrifugali />

                                        <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '500px' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/rwgs/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div style={{ height: '700px' }}></div>

            </div>

            {/* OK */}
            {/* compresoare ... pentru suflat PET-uri */}
            {/* //CHUNK */}
            <div className='entire-height-of-product-card-x5'>
                <div id='compresoare-pentru-suflat-PET-uri' className='hidden-titles'>Compresoare pentru suflat PETuri Belliss & Morcom</div>
                <div className='title4-custom'>Compresoare pentru suflat PETuri Belliss & Morcom</div>
                {/* //CHUNK */}
                <div className="container-x5" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[17] = el)}
                        className="box"
                        onMouseOver={() => handleHover(17)}
                        onClick={() => handleClick(17)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label13-1 label-x1'>
                                .
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare cu piston presiuni 45 bar pentru aplicatii de suflat sticle PET, marca Gardner Denver Belliss & Morcom</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD19} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <p>In domeniul competitiv al fabricarii sticlelor din PET, conteaza orice procent de eficienta ridicata a compresorului. Acest lucru se traduce in cost_energie anuala, consumata si este efectiv considerabil vizibila in factura consumului de energie.</p>
                                                <br />
                                                <ul style={{ paddingLeft: '0px', lineHeight: '1.3' }}>
                                                    <li><div className='ul-style'></div> 8000 h de functionare intre intervalelel de service</li>
                                                    <li><div className='ul-style'></div> consum energetic redus, implicit amprenta de CO₂ redusa</li>
                                                    <li><div className='ul-style'></div> consum redus de energie la pornire cu sistem FLC la motor</li>
                                                    <li><div className='ul-style'></div> aer comprimatr fara ulei</li>
                                                    <li><div className='ul-style'></div> posibilitate de reglare a debitului refulat si functionare in gol cu minimum de energie consumata</li>
                                                    <li><div className='ul-style'></div> reglarea capacitatii in procente cuprinse intre 30% si 100%</li>
                                                    <li><div className='ul-style'></div> racire intre treptele de compresie cu apa</li>
                                                    <li><div className='ul-style'></div> racire motor cu apa, protective IP 65</li>
                                                    <li><div className='ul-style'></div> reglaj al presiunii de refulare cu 0.5 bar</li>
                                                    {/* <li><div className='ul-style'></div></li> */}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TablePET />

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div style={{ height: '700px' }}></div>

            </div>

            {/* OK */}
            {/* compresoare ... pentru scafandrii_aer respirabil */}
            {/* //CHUNK */}
            <div className='entire-height-of-product-card-x6'>
                <div id='pentru-scafandrii' className='hidden-titles'>Compresoare pentru scafandrii, aer respirabil</div>
                <div className='title4-custom'>Compresoare pentru scafandrii, aer respirabil</div>
                {/* //CHUNK */}
                <div className="container-x6" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[18] = el)}
                        className="box"
                        onMouseOver={() => handleHover(18)}
                        onClick={() => handleClick(18)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label14-1 label-x1'>
                                .
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'>Compresoare Champion de inalta presiune HP (232 – 300 bar), pentru umplut butelii cu aer respirabil</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <img src={GD20} alt="img missing" className='img-inside-slider' />
                                            <img src={GD21} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>
                                                <p>Compresooare Champion de inalta presiune, pentru umplut butelii/ cilindrii, aer respirabil utilizat de pompieri, echipaje de salvare (ex. Salvare miniera, metoru, etc), scafandrii autonomi.</p>
                                                <br />
                                                <p>Compresoarele Champion sunt versatile, sigure, flexibile in aplicatii si utilizari asigurand:</p>
                                                <ul style={{ paddingLeft: '0px', lineHeight: '1.3' }}>
                                                    <li><div className='ul-style'></div> timpi scurti de umplere a buteliilor</li>
                                                    <li><div className='ul-style'></div> functionare automata</li>
                                                    <li><div className='ul-style'></div> diverse modele de motoare de actionare</li>
                                                    <li><div className='ul-style'></div> usor de utilizat</li>
                                                    <li><div className='ul-style'></div> montate pe sasiu sau in carcasa isonorizata</li>
                                                    <li><div className='ul-style'></div> actionate cu motor electric sau cu motor termic Honda</li>
                                                    <li><div className='ul-style'></div> inlcud o varietate larga de accesorii</li>
                                                    {/* <li><div className='ul-style'></div></li> */}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        <TableScafandrii />

                                        <div className='product-text'>
                                            <p>pentru mai multe detalii despre modele, vedeti brosura, pagina 4 si 5 / din 5</p>
                                            <p> copiaza [copy]  modelul de compresor, si lipeste [paste] modelul in bara de search a brosurii </p>
                                        </div>


                                        <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/xufr/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>

                                        {/* ca sa creasca pdf ul cred ca trebe marit height of container? */}

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div style={{ height: '700px' }}></div>

            </div>


            {/* Recipienti de aer comprimat si purje evacuare condens */}
            {/* //CHUNK */}
            <div className='entire-height-of-product-card-x7'>
                <div id='recipienti-si-purje' className='hidden-titles'>Recipienti de aer comprimat si purje evacuare condens</div>
                <div className='title4-custom'>Recipienti de aer comprimat si purje evacuare condens</div>
                {/* //CHUNK */}
                <div className="container-x7" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

                    <div
                        ref={(el) => (divRefs.current[19] = el)}
                        className="box"
                        onMouseOver={() => handleHover(19)}
                        onClick={() => handleClick(19)}
                        style={{ left: "0px", top: '0' }}
                    >
                        <div className='toberelative'>
                            <div className='to-be-absolute label15-1 label-x1'>
                                .
                            </div>
                            <div id="compresoare-cu-piston-Champion" className='manila-folder-content'>
                                <div className='manila-folder-content-T'>
                                    <p className='product-title'></p>
                                    <div className='line-separation'></div>

                                    <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '500px' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/qgzj/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>

                                    {/* (aici eram) */}

                                    <div className='flexy'>
                                        <div className='text-col2'>
                                            <div className='product-text'>
                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        {/* tabel */}
                                        {/* <TestTable /> */}


                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div style={{ height: '700px' }}></div>

            </div>

            <div className='section-team'>
                <div className='toberelative'>
                    <p className=''>impreuna, in echipa, gasim solutii</p>
                    {/* <div className='overlap-gradient'></div> */}
                    <img className='bigIMG' src={UFRteam} alt="img can.t be seen"></img>
                </div>
            </div>

            {/* footer */}
            <div id='contact' className='footer-container'>
                <p className='title3-custom'>contact</p>
                <div className='flex'>
                    <div className='links-container'>meniu
                        <ul className='menu-in-footer'>
                            <li className='menu2'><a href="#despre-Ultrafilter">despre Ultrafilter</a></li>
                            <li className='menu2'><a href="#despre-Donaldson">despre Donaldson</a></li>
                            <li className='menu2'><a href="#despre-Gardner-Denver">despre Gardner Denver</a></li>
                            <li className='menu2'><a href="#linkuri-utile">linkuri utile</a></li>
                        </ul>
                    </div>

                    <div className='address-container'>
                        <span style={{ fontWeight: '600' }}>SC ULTRAFILTER SRL</span>
                        <br />
                        <br />
                        <span style={{ fontWeight: '500' }}>Sediu Bucuresti</span>
                        <br />
                        Intrarea Profesor Gheorghe Costa-Foru,
                        <br />
                        nr. 4,
                        <br />
                        sector 2,
                        <br />
                        Bucuresti
                        <br />
                        024098
                        <br />
                        <br />
                        <br />
                        <table className='address-table'>
                            <tbody>
                                <tr>
                                    <th>telefon</th>
                                    <td>+4 0371 152977</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>fax</th>
                                    <td>+4 021 3260004</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>email</th>
                                    <td>office@ultrafilter.ro</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <br />
                        <span style={{ fontWeight: '500' }}>Depozit Brasov</span>
                        <br />
                        Strada Zizinului 109 Bis
                        <br />
                        tel: +40 744 495016
                        <br />
                        <br />
                        <br />
                        <br />
                        CUI: RO 11435124
                        <br />
                        Reg. Com.: J 40/1300/1999
                        <br />
                        capital social 71 000,00 ron
                        <br />
                        Banca: UniCredit Bank SA, suc. Traian
                        <br />
                        <table className='address-table'>
                            <tbody>
                                <tr>
                                    <th>Cont:</th>
                                    <td>RON: RO73 BACX 0000 0000 3006 2310</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>EUR: RO88 BACX 0000 0000 3006 2040</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className='contact-us-to-be-relative toberelative'>
                        {/* <img className='display-img-leave-a-message' src={displaymoregrainbrighter} alt="img can.t be seen"></img> */}
                        {/* <img className='display-img-leave-a-message' src={displaymoregrainbrightercrop2} alt="img can.t be seen"></img> */}
                        <div className=''>
                            {/* form-container padding-top */}
                            <form className=''>
                                <input className='input1' type='text' id='name' placeholder='nume, prenume' required />
                                <input className='input2' type='email' id='email' placeholder='adresa dvs de email' required />
                                <input className='input3' type='text' id='phone' placeholder='numar de telefon' required />
                                <textarea className='to-be-absolute leave-msg' id='message' rows='10' placeholder='contacteaza-ne [introdu text]' required />
                                <button className='submit-button' type='submit'>TRIMITE</button>
                            </form>
                        </div>
                    </div>
                </div>
                <p className='copyright'>Copyright © 2023 ultrafilter. Toate drepturile rezervate. | Design by
                    <span className='tooltip'> B4a<span className='tooltiptext'>bianca.mgeg@gmail.com 🚴‍♀️</span></span></p>
            </div>









            {/* <div className='button'>
                <button type='submit'>[ trimite ]</button>
            </div> */}










        </div >

    )
}


{/* <div>
    <div className='display-as-column padding-top card2'>
        <div className='inline-flex contact-info'>
            <div>
                <p>Telefon:</p>
                <p>Fax:</p>
                <p>Email:</p>
                <p>Web:</p>
            </div>
            <div>
                <p>+40371 152 977</p>
                <p>+40213260004</p>
                <p>office@ultrafilter.ro</p>
                <p className='underline-simple'>https://ultrafilter.ro</p>
            </div>
        </div>

       
        <div className='contact-info'>
            <p>Intrarea</p>
            <p>Profesor Gheorghe Costa Foru, nr. 4,</p>
            <p>sector 2, </p>
            <p>024098 Bucuresti</p>
        </div>
    </div>

</div> */}