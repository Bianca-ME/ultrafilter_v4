import React from 'react';
import { NavLink } from 'react-router-dom';

// import style
import '../../assets/commonstyle.css';

// import other files
// import signature from '../assets/semnaturaMHprovizoriu.svg';
import gdimg1 from '../../assets/GD/30496_24_4_18_CMPV04_RM_m.jpg';
// import testfile from '';
import arrow from '../../assets/north-east-arrow.svg';
import Cabinete_dentare_compresoare_fara_ungere from './Compresoare/Cabinete_dentare_compresoare_fara_ungere';
import C_oil_free_tip_scroll from './Compresoare/C_oil_free_tip_scroll';
// import Cabinete_dentare_compresoare_fara_ungere from './Compresoare/Cabinete_dentare_compresoare_fara_ungere';


// test sliding pane
// import { Component } from "react";
// import { render } from "react-dom";
// import SlidingPane from "react-sliding-pane";
// nu stiu daca functioneaza importul
import SlidingPane from "../../sliding-pane/react-sliding-pane.js";
import '../../assets/react-sliding-pane.css';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import { useState } from 'react';

export default function GardnerDenver() {


    // TEST sliding pane >
    const [state, setState] = useState({
        pane_Cabinete_dentare_compresoare_fara_ungere: false,
    });
    // TEST <


    return (
        <main className='main-1 margin-from-header'>


            {/* /////////////////////////////////////////////////////////////////////// */}
            {/* sliding pane > */}

            {/* sliding pane: Cabinete_dentare_compresoare_fara_ungere */}
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_Cabinete_dentare_compresoare_fara_ungere}
                // title="Champion Rotary Vane Compressors - Compresoare Champion cu excentric si paleti"
                // subtitle="Optional subtitle."
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_Cabinete_dentare_compresoare_fara_ungere: false });
                }}
            >
                <div className='bring-slide-to-front'>
                    <Cabinete_dentare_compresoare_fara_ungere />
                </div>
                {/* <br />
                <img className='simpleimg' src={gdimg1} alt='image missing' /> */}
            </SlidingPane>

            {/* sliding pane: C_oil_free_tip_scroll */}
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_C_oil_free_tip_scroll}
                // title="Champion Rotary Vane Compressors - Compresoare Champion cu excentric si paleti"
                // subtitle="Optional subtitle."
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_C_oil_free_tip_scroll: false });
                }}
            >
                <div className='bring-slide-to-front'>
                    <C_oil_free_tip_scroll />
                </div>
                {/* <br />
                <img className='simpleimg' src={gdimg1} alt='image missing' /> */}
            </SlidingPane>

            {/* sliding pane: Cabinete_dentare_compresoare_fara_ungere */}
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_Cabinete_dentare_compresoare_fara_ungere}
                // title="Champion Rotary Vane Compressors - Compresoare Champion cu excentric si paleti"
                // subtitle="Optional subtitle."
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_Cabinete_dentare_compresoare_fara_ungere: false });
                }}
            >
                <div className='bring-slide-to-front'>
                    <Cabinete_dentare_compresoare_fara_ungere />
                </div>
                {/* <br />
                <img className='simpleimg' src={gdimg1} alt='image missing' /> */}
            </SlidingPane>

            
            {/* /////////////////////////////////////////////////////////////////////// */}
            {/* sliding pane < */}

            {/* presentation text GD */}
            <div className='regular-text wide-padding'>
                <p><span className='underline'>Gardner Denver</span> face parte din cel mai mare grup de producatori de utiaje dinamice, impreuna cu Champion, Ingersol Rand, CompAir, TamRotor, Hydrovane, Belliss&Morcom, Nash, TCM Marine, Elmo Rietschle, Ravell, Robuski, Bottarini, Mako, Drum.</p>
                <p className='regular-text-important'>In site-ul nostru veti regasi modele de <span className='big-word'>compresoare</span>:</p>
            </div>

            {/* COMPRESSORS [list of buttons] */}
            <div className='regular-text wide-padding'>
                <p>oil free:</p>
                <button className='compressors-buttons' onClick={() => setState({ pane_Cabinete_dentare_compresoare_fara_ungere: true })}>
                    pentru cabinete dentare, compresoare cu piston, fara ungere – oil free  <img className='arrow' src={arrow} alt='svg missing' />
                </button>
                <br/>
                <button  className='compressors-buttons' onClick={() => setState({ pane_C_oil_free_tip_scroll: true })}>
                    compresoare scroll, fara ungere  <img className='arrow' src={arrow} alt='svg missing' />
                </button>
                <br/>
                {/* <p>Compresoare cu piston, cu presiuni de refulare de 8 ÷ 15 bar si puteri instalate intre 1.1 si 15 Kw, cu transmisie directa sau prin curele:</p>
                <button onClick={() => setState({ pane_Cabinete_dentare_compresoare_fara_ungere: true })}>
                Cabinete dentare_compresoare fara ungere
                </button> */}
            </div>


            <div className='regular-text-small'>
                <p>Pentru cea mai buna intelegere a aerului comprimat puteti consulta acest <a href="https://www.cagi.org/performance-verification/" target='_blank'>link</a>.</p>

            </div>
            <div className='toberelative narrow-padding'>
                <div className="quote-marks-opening">"</div>
                <div className='text-gardnerdenver'>
                    <p>Lucrez din 1993 in comertul industrial cu echipamente. Pot afirma ca in orice flux tehnologic este pus in miscare folosind energiea electrica si aer compirmat. Aerul comprimat desi este produs prin consum de energie electrica, este cel mai raspnadit ca forta de miscare a mecanismelor liniilor de fabricatie si robotilor industriali. Cu aer comprimat umflam rotile camionaelor – cea mai simpla aplicatie, impingem borhotul de la fabricile de bere, scuturam sacii filtranti de la colectoarele de praf, il folosim la vopsitorii, sablare, transport pneumatic, scule de mana actionate pneumatic, actioneaza robotii industriali, cilindrii pneumatici, distribuitoare, deseori in industria alimentara sau farmaceutica intra in contact cu produsul fabricat, este respirat la masca de catre pacientii din spitale, este folosit la formarea sticlelor de PET, este inbuteliat pentru uzul salvatorilor mineri, al pompierilor sau al scafandrilor, este folosit la producerea gazelor tehnice si cate alte nenumarate aplicatii are. Aerul comprimat este definit in primul rand prin presiune si debit, temperatura si continut de impuritati – condens, ulei rezidual, particole mecanice, bacterii, iar calitatea aerului comprimat este regasita in domeniul standardului DIN ISO 8573-1.</p>
                    <p className='quote-author'>- Mihai Hristescu</p>
                    {/* <img className='signature' src={signature} alt='signature missing' /> */}
                </div>
            </div>

            {/* <img src={immg} className='imgtest2' /> */}
            {/* <div className="containertest toberelative">
                <img src={immg} className='imgtest' />
                <p className='tobesticky'>Lucrez din 1993 in comertul industrial cu echipamente. Pot afirma ca in orice flux tehnologic este pus in miscare folosind energiea electrica si aer compirmat. Aerul comprimat desi este produs prin consum de energie electrica, este cel mai raspnadit ca forta de miscare a mecanismelor liniilor de fabricatie si robotilor industriali.</p>
            </div> */}
        </main>
    )
}

// import immg from '../assets/imgtest.jpg';