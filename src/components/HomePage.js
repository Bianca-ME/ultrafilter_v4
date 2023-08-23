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
// import sketch2 from '../pages/HomePage/ccSketch2';

// images of ufr team
import ufrteam1 from '../pages/HomePage/sketch2/img1.jpg';
import ufrteam10 from '../pages/HomePage/sketch2/img10.jpg';

// styling
import '../assets/commonstyle.css';
import '../assets/commonstyle_maxW500.css';


//

const randomNumber = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
console.log("for testing purposes print a random number: " + randomNumber);



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
    // const sketch2Ref = useRef(null);

    useEffect(() => {
        new p5(sketch1, sketch1Ref.current);
        // new p5(sketch2, sketch2Ref.current);

    }, []);

    // reveal effect when element is in view
    // window.addEventListener('scroll', reveal);

    // function reveal() {
    //     var reveals = document.querySelectorAll('.reveal');

    //     for(var i = 0; i < reveals.length; i++) {
    //         var windowheight = window.innerHeight;
    //         var revealtop = reveals[i].getBoundingClientRect().top;
    //         var revealpoint = 150;

    //         if(revealtop < windowheight - revealpoint){
    //             reveals[i].classList.add('active');
    //         } else {
    //             reveals[i].classList.remove('active');
    //         }
    //     }
    // }

    //same but to use in react
    useEffect(() => {
        const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            const windowheight = window.innerHeight;
            const revealpoint = 70;

            reveals.forEach((element) => {
                const revealtop = element.getBoundingClientRect().top;

                if (revealtop < windowheight - revealpoint) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', reveal);
        return () => {
            window.removeEventListener('scroll', reveal);
        };
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
                <div ref={sketch1Ref} className='sketch1-css'></div>
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


            <section>
                <p className='partners-title' style={{marginTop:'100px'}}>Parteneri</p>
                <div className='DonaldsonAndGD margin-from-header' id='toStickTo'>
                    <div className='containsPage1 slide slide-top containsPage1-mobile'>
                        <div className='page1Donaldson-container'>
                            {/* <div className='slide-content-D'>
                                filtre, desprafuire industriala
                            </div> */}
                            <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                        </div>
                    </div>
                    <div className='containsPage2 slide slide-top containsPage2-mobile'>
                        <div className='page2GardnerDenver-container'>
                            {/* <div className='slide-content-GD'>
                                compresoare si retele de aer comprimat
                            </div> */}
                            <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                        </div>
                    </div>
                </div>
            </section>




            {/* section despre Ultrafilter */}
            <section className='sectionX-despre-UFR'>
                {/* <h1 id='despre-Ultrafilter' className='title2-custom'

                >Despre Ultrafilter <sup style={{ color: '#1b2bff', fontSize: '20px', fontWeight: '700' }}>distribuitorul tau de compresoare si filtre industriale</sup></h1> */}
                <p className='card5 line-height' style={{marginTop:'100px'}}>
                    <div className='reveal'>
                        Infiintata in aprilie 1999 cu un personal format din doi angajati, s-a dezvoltat ca experta in domeniul filtratii/ purificarii aerului comprimat si a solutiilor lichide.
                    </div>
                    <div className='reveal'>
                        Actualmente ne consideram o firma inca mica, dar cu mare flexibililtate si dinamism cu un personal compus din 12 angajati, cu acoperire in zonele invecinate cu Satu Mare – Timisoara, Brasov, Sibiu, Ploiesti, Bucuresti si Constanta.
                    </div>
                    <div className='reveal'>
                        Cheia succesului nostru o reprezinta munca sustinuta, know how-ul acumulat “din teren” si imbinat cu sustinerea tehnica si experienta fabricantilor reprezentati de noi in Romania.
                    </div>
                    <div className='reveal'>
                        Specialitatea noastra a ramas expertiza in domeniul filtrarilor cu specializare in retele de aer comprimat;
                    </div>
                    <div className='reveal efff'>
                        compresoare,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        filtre
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        si uscatoare pentru aerul comprimat,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        putem realiza filtrarea aerului comprimat pana la nivelul de sterilizare;
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        filtrare solutii lichide si racitoare frigorifice – water chillers pentru controlul temperaturii apei de racire;
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        desprafuire industriala si colectoare de praf, fum si emulsii utilizate pentru purificarea mediului unde apar contaminanti in atmosfera degajati din procese tehnologice de productie;
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        filtre rama pentru ventilatie si filtre Hepa;
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        ventilatoare centrifugale si axiale;
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        puneri in functiune,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        service,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        piese de schimb pentru compresoare
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        si cartuse filtrante hidraulice,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        masuratori de debite, masutarori calitate aer comprimat,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        inchiriei compresoare,
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        proiectare
                    </div>
                    {/* <br /> */}
                    <div className='reveal efff'>
                        si solutii la cheie.
                    </div>
                </p>
            </section>



            <Footer />
        </div >
    )
}