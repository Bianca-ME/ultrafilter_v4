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
        </div >
    )
}