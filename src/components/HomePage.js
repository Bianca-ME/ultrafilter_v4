import React, { useRef, useEffect, useState } from 'react';

import Footer from './Footer';

// images
import DlogoSVG from '../assets/donaldson-company-1.svg';
// import GDlogoSVG from '../assets/Gardner_Denver_logo.svg.png';
// import GDlogo from '../assets/test/ezgif.com-video-to-gif.gif';

// import Dlogo from '../assets/donaldson-logo.jpg';
import Dlogo from '../assets/donaldson-company-1.svg';
// import GDlogo from '../assets/gardner-denver-logo.jpg';
// import GDlogo from '../assets/gardner-denver-inc-logo-vector.svg';
import GDlogo from '../assets/gardner-denver-inc-logo-vector_copy.svg';

import arrow from '../assets/north-east-arrow.svg';
import arrowRightDown from '../assets/arrow-right-down355.svg';

// TODO: creeaza un paralax effect
import Picture49 from '../assets/Picture49-less-grainy.png';
// import random1 from '../assets/test/s12-1024x341.jpg';
import random1 from '../assets/test/WhatsAppImage2023-07-27at3.05.21PM_2_1.jpg';
// import Picture49 from '../assets/Picture49.png';

import p5 from 'p5';
import sketch1 from '../pages/HomePage/ccSketch1';

// styling
import '../assets/commonstyle.css';


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

    // creative coding sketch ---
    const sketch1Ref = useRef(null);

    useEffect(() => {
        new p5(sketch1, sketch1Ref.current);
    }, []);

    return (
        <div data-scroll toberelative >
            {/* <section class='ufr-quote-big'>
                <p>Tehnologie pentru un mediu mai curat</p>
            </section> */}

            {/* <div className='DonaldsonAndGD margin-from-header' id='toStickTo'
                style={{ backgroundImage: `url(${random1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
                <div className='containsPage1 slide slide-top containsPage1-mobile'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            filtre, desprafuire industriala
                            <br />
                            [ pagină în lucru ]
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2 slide slide-top containsPage2-mobile'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            Gardner Denver face parte din cel mai mare grup de producatori de utilaje dinamice, impreuna cu Champion, Ingersol Rand, CompAir, TamRotor, Hydrovane, Belliss&Morcom, Nash, TCM Marine, Elmo Rietschle, Ravell, Robuski, Bottarini, Mako, Drum.
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                </div>
            </div> */}

            {/* let's try implement a creative coding sketch */}
            <div className='sketch-changing-text-on-hover-container'>
                <div ref={sketch1Ref} className=''></div>
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

            // style={{
            //     backgroundImage: `url(${Picture49})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'
            // }}
            // backgroundAttachment: 'fixed', height: '100%'
            >
                <div className='display-block'>
                    {/* Donaldson */}
                    <p className='title3-1'>filtre, desprafuire industriala
                        {/* <br /><img className='arrow-for-title' src={arrowDown} alt='svg missing' /> */}
                    </p>
                    {/* <hr></hr> */}
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
                    {/* <hr></hr> */}
                    <div className='padding-buttons-in-display-block'>
                        <p><a href='#despre-Gardner-Denver' className='buttonV1 visited-link' activeClassName="active-link">Despre GD</a><img className='arrow' src={arrowRightDown} alt='svg missing' /><a href='#compresoare-cu-piston' className='buttonV1 visited-link' activeClassName="active-link">Compresoare cu piston</a><img className='arrow' src={arrowRightDown} alt='svg missing' /><a href='#compresoare-cu-piston' className='buttonV1 visited-link' activeClassName="active-link">Compresoare cu piston</a><img className='arrow' src={arrowRightDown} alt='svg missing' /></p>
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
            <Footer />
        </div >
    )
}