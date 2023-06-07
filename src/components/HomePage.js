import React, { useRef, useEffect, useState } from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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


// import scufpdf from '../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf';
// import pdftesst from '../../public/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf';
import pdftesstpublic from '../../public/testPDF.pdf';
import pdftesstout from '../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf';
import pdftesst from '../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf';


import addClassOnInView from '../testingPurposes/inViewTrigger';

// styling
import '../assets/commonstyle.css';

//

const randomNumber = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
console.log(randomNumber);



export default function HomePage() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    //     setPageNumber(1);
    // }

    // function changePage(offSet) {
    //     setPageNumber(prevPageNumber => prevPageNumber + offSet);
    // }

    // function changePageBack() {
    //     changePage(-1)
    // }

    // function changePageNext() {
    //     changePage(+1)
    // }


    // --------------------------------

    // TEST sliding pane >
    const [state, setState] = useState({
        pane_Cabinete_dentare_compresoare_fara_ungere: false,
    });
    // TEST <

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

    // const handleHover = (index) => {
    //     divRefs.current.forEach((div, i) => {
    //         if (i === index) {
    //             div.style.zIndex = divRefs.current.length;
    //         } else {
    //             div.style.zIndex = divRefs.current.length - i;
    //         }
    //     });
    // };

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
            {/* <div className='DonaldsonAndGD margin-from-header' id='toStickTo'>
                <div className='containsPage1 slide slide-top containsPage1-mobile'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            <a href='#despre-Donaldson' className='active-link-D-GD'>despre Donaldson</a>
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2 slide slide-top containsPage2-mobile'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            <a href='#despre-Gardner-Denver' className='active-link-D-GD'>despre Gardner Denver</a>
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                </div>
            </div> */}



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

                    {/* <div> */}
                    {/* VARIANTELE CARE MERG: */}

                    {/* pare sa mearga in toate browserele */}
                    <iframe src='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' width="1000px" height="550px" allow="autoplay"></iframe>
                    {/* <iframe src='public\CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' width="1000px" height="550px" allow="autoplay"></iframe> */}

                    {/* a - merge dar nu mi-e prea utila */}
                    {/* <a href='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' target="_blank" rel='noopener'>vezi daca merge</a> */}

                    {/* merge dar nu prea. doar in chrome ok. pe ipad nu */}
                    {/* <object data='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' type="application/pdf" width="100%" height="600px">
                        <p>v2 PDF did not load. a link-- <a href='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf'>a link</a></p>
                    </object> */}

                    {/* NU MERG: */}
                    {/* <object data={pdftesstout} type="application/pdf" width="100%" height="600px">
                        <p>v1 PDF did not load. a link-- <a href='../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf'>a link</a></p>
                    </object> */}

                    {/* <object data={pdftesst} type="application/pdf" width="100%" height="600px">
                        <p>v3 PDF did not load. a link-- <a href='../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf'>a link</a></p>
                    </object> */}
                    {/* <object data='../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' type="application/pdf" width="100%" height="600px">
                        <p>v4 PDF did not load  a link-- <a href='../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf'>a link</a></p>
                    </object> */}
                    {/* </div> */}


                    {/* <Document file='../assets/PDFs/CHAMPION_BREATHING_AIR_COMPRESSORS.pdf'>
                        <Page pageNumber={1} />
                    </Document>
                    <Document file={pdftesst}>
                        <Page pageNumber={1} />
                    </Document>
                    <Document file={pdftesstpublic}>
                        <Page pageNumber={1} />
                    </Document>
                    <Document file='../../public/testPDF.pdf'>
                        <Page pageNumber={1} />
                    </Document>
                    <Document file='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf'>
                        <Page pageNumber={1} />
                    </Document>

                    <Document file={pdftesst} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height="600" pageNumber={pageNumber} />
                    </Document>
                    <Document file={pdftesstpublic} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height="600" pageNumber={pageNumber} />
                    </Document>
                    <Document file='../../CHAMPION_BREATHING_AIR_COMPRESSORS.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height="600" pageNumber={pageNumber} />
                    </Document> */}

                </div>
                {/* <br />
                <img className='simpleimg' src={gdimg1} alt='image missing' /> */}
            </SlidingPane>







            {/* NEW D and GD background with mountains */}
            <div className='margin-from-header top-banner'>
                <div className='toberelative'>
                    <p>tehnologie pentru un mediu mai curat</p>
                    <img className='reallyBigIMG' src={bannerIMG} alt="Donaldson logo can.t be seen" />
                    {/* <div className='overlap-gradient-white'></div> */}
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
            </div>


            {/* <div className='section-team'>
                <div className='toberelative'>
                    <p className=''>impreuna, in echipa, gasim solutii</p>
                    <div className='overlap-gradient'></div>
                    <img className='bigIMG' src={UFRteam} alt="img can.t be seen"></img>
                </div>
            </div> */}


            {/* "TITLURILE MARI" */}
            <section className='section1-buttons-under-D-and-GD two-columns' style={{ backgroundImage: `url(${Picture49})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
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

            {/* idei de lucrat in procreate. decupeaza fundalul pozei si pune blue gradient */}
            {/* <div className='section-team'>
                <div className='toberelative'>
                    <p className=''>impreuna, in echipa, gasim solutii</p>
                    <div className='overlap-gradient'></div>
                    <img className='bigIMG' src={UFRteam} alt="img can.t be seen"></img>
                </div>
            </div> */}

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
            <section className='sectionX-compresoare-cu-piston tobeabsolute' >
                <div className='blue-behind-c-cu-piston to-be-absolute' ></div>
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

            <div className='div-for-bg-img-and-height-of-product-card'
            // style={{ backgroundImage: `url(${cc1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
            >
                {/* <div className='overlap-gradient-red'></div> */}
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

                {/* style={{ backgroundImage: `url(${cc1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} */}

                <div className="container" style={{ marginTop: '100px' }} >
                    {/* style={{backgroundColor: 'pink'}} */}

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
                                    {/* 4 */}
                                    <p className='product-title'>Compresoare Champion de inalta presiune HP (232 – 300 bar), pentru umplut butelii cu aer respirabil</p>
                                    <div className='line-separation'></div>
                                    <div className='flexy'>
                                        <div className='text-col2'>

                                            <img src={GD15} alt="img missing" className='img-inside-slider' />
                                            <div className='product-text'>

                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <p>Compresooare Champion de inalta presiune, pentru umplut butelii/ cilindrii, aer respirabil utilizat de pompieri, echipaje de salvare (ex. Salvare miniera, metoru, etc), scafandrii autonomi.</p>

                                                <p>Compresoarele Champion sunt versatile, sigure, flexibile in aplicatii si utilizari asigurand:</p>
                                                <div className='margin-bottom-p'>
                                                    <p><div className='ul-style'></div>timpi scurti de umplere a buteliilor;</p>
                                                    <p><div className='ul-style'></div>functionare automata;</p>
                                                    <p><div className='ul-style'></div>diverse modele de motoare de actionare;</p>
                                                    <p><div className='ul-style'></div>usor de utilizat;</p>
                                                    <p><div className='ul-style'></div>montate pe sasiu sau in carcasa isonorizata;</p>
                                                    <p><div className='ul-style'></div>actionate cu motor electric sau cu motor termic Honda;</p>
                                                    <p><div className='ul-style'></div>inlcud o varietate larga de accesorii.</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='line-separation'></div>

                                        <table className='tabletemplate1'>

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
                                            <tr>
                                                <td>m³/min</td>
                                                <td>Bar</td>
                                                <td>Kw</td>
                                                <td>d(B)</td>
                                                <td>Volt/50Hz</td>
                                                <td>Volum litrii</td>
                                            </tr>

                                            <tr>
                                                <td rowspan='4' className='td-smaller-width1'>Compresoare cu actionare directa prin cuplaj "C base"</td>
                                                <td>
                                                    <button className='buttonV2' onClick={() => setState({ pane_Cabinete_dentare_compresoare_fara_ungere: true })}>
                                                        CB-OF-6-CF15                                                    </button>
                                                    <img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} />
                                                </td>
                                                <td>0,12</td>
                                                <td>8</td>
                                                <td>1,1</td>
                                                <td>82</td>
                                                <td>230</td>
                                                <td>6</td>
                                            </tr>

                                            <tr>
                                                <td>CB-3-CF2  <img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} /></td>
                                                <td>0,19</td>
                                                <td>8</td>
                                                <td>1,5</td>
                                                <td>76</td>
                                                <td>230</td>
                                                <td>3 ÷ 100</td>
                                            </tr>

                                            <tr>
                                                <td>CB-24-CM25</td>
                                                <td>0,24</td>
                                                <td>9</td>
                                                <td>1,8</td>
                                                <td>79</td>
                                                <td>230</td>
                                                <td>24 ÷ 100</td>
                                            </tr>

                                            <tr>
                                                <td>CB-24-WB3</td>
                                                <td>0,34</td>
                                                <td>9</td>
                                                <td>2,2</td>
                                                <td>82</td>
                                                <td>230</td>
                                                <td>24 ÷ 100</td>
                                            </tr>

                                            <tr className='empty-row'></tr>

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


                                            <tr>
                                                <td>CP28B-50-CM3</td>
                                                <td>0.29 ÷ 0.42</td>
                                                <td>10</td>
                                                <td>2,2</td>
                                                <td>76 ÷ 78</td>
                                                <td>230 ÷ 400</td>
                                                <td>50 ÷ 270</td>
                                            </tr>

                                            <tr className='empty-row'></tr>

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

                                            <tr>
                                                <td>CL5-200-FT55</td>
                                                <td>0,61</td>
                                                <td>11</td>
                                                <td>4</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 500</td>
                                            </tr>

                                            <tr>
                                                <td>CL6-200-FT75</td>
                                                <td>0,8</td>
                                                <td>11</td>
                                                <td>5,5</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 500</td>
                                            </tr>

                                            <tr>
                                                <td>CL10-270-FT10</td>
                                                <td>1,25</td>
                                                <td>11</td>
                                                <td>7,5</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 900</td>
                                            </tr>

                                            <tr>
                                                <td>CA15-500-FT155</td>
                                                <td>1,51</td>
                                                <td>11</td>
                                                <td>11</td>
                                                <td>82</td>
                                                <td>400</td>
                                                <td>200 ÷ 900</td>
                                            </tr>

                                            <tr className='empty-row'></tr>

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

                                            <tr>
                                                <td>CA6-270-15-FT75</td>
                                                <td>0,57</td>
                                                <td>15</td>
                                                <td>5,5</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>270</td>
                                            </tr>

                                            <tr>
                                                <td>CA10-500-15-FT10</td>
                                                <td>0,94</td>
                                                <td>15</td>
                                                <td>7,5</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>500</td>
                                            </tr>

                                            <tr>
                                                <td>CA15-500-15-FT155 SDS</td>
                                                <td>1,14</td>
                                                <td>15</td>
                                                <td>11</td>
                                                <td>81</td>
                                                <td>400</td>
                                                <td>500</td>
                                            </tr>

                                            <tr className='empty-row'></tr>

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

                                            <tr>
                                                <td>CA4-100-C55	</td>
                                                <td>0,42</td>
                                                <td>10</td>
                                                <td>4</td>
                                                <td>75</td>
                                                <td>Honda</td>
                                                <td>100 ÷ 200</td>
                                            </tr>

                                            <tr>
                                                <td>CA5-270-C9</td>
                                                <td>0,56</td>
                                                <td>10</td>
                                                <td>7,1</td>
                                                <td>81</td>
                                                <td>Honda</td>
                                                <td>270</td>
                                            </tr>
                                        </table>

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
            </div>





            {/* <div className='bigIMG-map toberelative'>
                <img className='bigIMG-map' src={mapSketch} alt="map drawing can.t be seen"></img>
                <div className='map-container'>
                    <iframe className='the-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.852694494476!2d26.12399741479579!3d44.43618377910226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2ed43cc651%3A0xc3f3d069cd2f0453!2sUltrafilter!5e0!3m2!1sen!2sro!4v1677702958374!5m2!1sen!2sro" width="300px" height="300px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div> */}
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



                        {/* <iframe className='the-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.852694494476!2d26.12399741479579!3d44.43618377910226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2ed43cc651%3A0xc3f3d069cd2f0453!2sUltrafilter!5e0!3m2!1sen!2sro!4v1677702958374!5m2!1sen!2sro" width="300px" height="300px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>


                    <div className='contact-us-to-be-relative toberelative'>
                        <img className='display-img-leave-a-message' src={displaymoregrainbrighter} alt="img can.t be seen"></img>
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
                {/* <div>
      <object data={pdftesst} type="application/pdf" width="100%" height="600px">
                        <p>PDF did not load</p>
                    </object>
</div> */}


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