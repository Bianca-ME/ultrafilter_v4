import React from 'react';
import { NavLink } from 'react-router-dom';

// import style
import '../../assets/commonstyle.css';

// import other files
// import signature from '../assets/semnaturaMHprovizoriu.svg';
import gdimg1 from '../../assets/GD/30496_24_4_18_CMPV04_RM_m.jpg';


// test sliding pane
// import { Component } from "react";
// import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import '../../sliding-pane/react-sliding-pane.css';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import { useState } from 'react';

export default function GardnerDenver() {


    // TEST sliding pane >

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    // TEST <


    return (
        <main className='main-1 margin-from-header'>


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* TEST sliding pane > */}

            <button onClick={() => setState({ isPaneOpen: true })}>
                Click me to open right pane!
            </button>

            <div style={{ marginTop: "32px" }}>
                <button onClick={() => setState({ isPaneOpenLeft: true })}>
                    Click me to open left pane with 20% width!
                </button>
            </div>
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                title="Hey, it is optional pane title.  I can be React component too."
                subtitle="Optional subtitle."
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ isPaneOpen: false });
                }}
            >
                <div className='bring-slide-to-front'>

                    <p className='regular-text-important'>Champion Rotary Vane Compressors - Compresoare Champion cu excentric si paleti</p>
                    <img className='simpleimg' src={gdimg1} alt='image missing' />
                    <p className='regular-text'>Anduranta mare in exploatare
                        Intretinere minima;
                        Doi ani garantie standard;
                        Design foarte simplist;
                        Actionate prin cuplaj elastic de motoare electrice;
                        Nivel scazut de zgomot;
                        Fara reductor pentru transmisie;
                        Calitate rificata a aerului reulat;
                        Ungere cu ulei;
                        Fara rulmenti care sa preia fortele axiale – fara forte axiale in camera de compresie, avantaj fata de compresoarele cu suruburi elicoidale.
                    </p>



                    <table className='temptable'>
                        {/* 1 */}
                        <tr>
                            <td rowspan='2'></td>
                            <td rowspan='2'>Compresoare cu excentric si paleti,    Champion, model</td>
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
                            <td rowspan='9'>Cele mai simple compresoare cu intretinere minima, durata mare de exploatare. Recomandate pentru vulcanizari, vopsitorii, ateliere mici de bricolaje.</td>
                            <td><NavLink to='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali/PDF'>CMPV01 Tripod</NavLink></td>
                            <td>0,12</td>
                            <td>10</td>
                            <td>1,1</td>
                            <td>62</td>
                            <td>230v sau 400v</td>
                            <td>Nu</td>
                        </tr>
                        {/* 4 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPV01 RM </td>
                            <td>0,12</td>
                            <td>10</td>
                            <td>1,1</td>
                            <td>62</td>
                            <td>230v sau 400v</td>
                            <td>75</td>
                        </tr>
                        {/* 5 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPV02 Tripod</td>
                            <td>0,23</td>
                            <td>10</td>
                            <td>2,2</td>
                            <td>69</td>
                            <td>230v sau 400v</td>
                            <td>75</td>
                        </tr>
                        {/* 6 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPV02 RM </td>
                            <td>0,23</td>
                            <td>10</td>
                            <td>2,2</td>
                            <td>69</td>
                            <td>230v sau 400v</td>
                            <td>75</td>
                        </tr>
                        {/* 7 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPV04 RM </td>
                            <td>0,57</td>
                            <td>10</td>
                            <td>4</td>
                            <td>73</td>
                            <td>400v</td>
                            <td>200</td>
                        </tr>
                        {/* 8 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPR 05 PR 07 SDS</td>
                            <td>0,92</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>73</td>
                            <td>400v</td>
                            <td>Nu</td>
                        </tr>
                        {/* 9 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPR 05 PR 10 SDS</td>
                            <td>0,77</td>
                            <td>10</td>
                            <td>5,5</td>
                            <td>73</td>
                            <td>400v</td>
                            <td>Nu</td>
                        </tr>
                        {/* 10 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPR 07 PR 07 SDS</td>
                            <td>1,27</td>
                            <td>7</td>
                            <td>7,5</td>
                            <td>73</td>
                            <td>400v</td>
                            <td>Nu</td>
                        </tr>
                        {/* 11 */}
                        <tr>
                            {/* <td></td> */}
                            <td>CMPR 07 PR 10 SDS</td>
                            <td>1,05</td>
                            <td>10</td>
                            <td>7,5</td>
                            <td>73</td>
                            <td>400v</td>
                            <td>Nu</td>
                        </tr>
                    </table>

                </div>
                {/* <br />
                <img className='simpleimg' src={gdimg1} alt='image missing' /> */}
            </SlidingPane>

            {/* <SlidingPane
                closeIcon={<div>Some div containing custom close icon.</div>}
                isOpen={state.isPaneOpenLeft}
                title="Hey, it is optional pane title.  I can be React component too."
                from="left"
                width="200px"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
                <div>And I am pane content on left.</div>
            </SlidingPane> */}

            {/* TEST sliding pane < */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}


            <div className='regular-text wide-padding'>
                <p><span className='underline'>Gardner Denver</span> face parte din cel mai mare grup de producatori de utiaje dinamice, impreuna cu Champion, Ingersol Rand, CompAir, TamRotor, Hydrovane, Belliss&Morcom, Nash, TCM Marine, Elmo Rietschle, Ravell, Robuski, Bottarini, Mako, Drum.</p>
                <p className='regular-text-important'>In site-ul nostru veti regasi modele de <span className='big-word'>compresoare</span>:</p>

            </div>
            <div className='narrow-padding'>
                <table className='table-GD-c'>
                    <tr>
                        <td className='td-gd-c'>Pentru cabinete dentare, compresoare cu piston, fara ungere – oil free</td>
                    </tr>
                    <tr>
                        {/* <td className='td-gd-c'>
                            <NavLink to='/GardnerDenver/C_oil_free_tip_scroll'>
                                Compresoare scroll, fara ungere
                            </NavLink>
                        </td> */}
                        <td>
                            <button onClick={() => setState({ isPaneOpen: true })}>
                                Compresoare scroll, fara ungere
                            </button>
                        </td>
                    </tr>
                    <tr>
                        {/* <td className='td-gd-c'>Compresoare cu piston, cu presiuni de refulare de 8 ÷ 15 bar si puteri instalate intre 1.1 si 15 Kw, cu transmisie directa sau prin curele</td> */}
                        { }
                        <td className='td-gd-c'>
                            <details class="clickToOpen">
                                <summary>
                                    Compresoare cu piston, cu presiuni de refulare de 8 ÷ 15 bar si puteri instalate intre 1.1 si 15 Kw, cu transmisie directa sau prin curele
                                </summary>
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/Cabinete_dentare_compresoare_fara_ungere'>
                                        &#10095;  Cabinete dentare_compresoare fara ungere
                                    </NavLink>
                                    {/*  */}
                                </span>
                                <br />
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/C_pt_scafandrii_aer_respirabil'>
                                        &#10095;  Compresaore pentru scafandrii_aer respirabil
                                    </NavLink>
                                </span>
                                <br />
                                {/* <span class="details1">
                                &#10095;  Compresoare cu excentric si paleti_Champion vane compressors
                                </span>
                                <br/> */}
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/C_cu_piston_debite_mici'>
                                        &#10095;  Compresoare cu piston_debite mici
                                    </NavLink>
                                </span>
                            </details></td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>
                            <details class="clickToOpen">
                                <summary>
                                    {/* PREZENTAREA GENERALA INCA NU STIU UNDE SA O BAG */}
                                    Compresoare cu suruburi elicoidale si injectie de ulei, cu puteri de la 2.2 Kw la 400 kw si presiuni de refulare de la 7.5 bar pana la 13 bar cu debit/turatie fixa sau turatie vadiabila
                                </summary>
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/ESM_23_29'>
                                        &#10095;  ESM 23-29
                                    </NavLink>
                                </span>
                                <br />
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/ESM_30_45'>
                                        &#10095;  ESM 30-45
                                    </NavLink>
                                </span>
                                <br />
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/ESM_55_75'>
                                        &#10095;  ESM 55-75
                                    </NavLink>
                                </span>
                                <br />
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/ESM_90_132'>
                                        &#10095;  ESM 90-132
                                    </NavLink>
                                </span>
                                <br />
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/ESM_VS_160_290'>
                                        &#10095;  ESM 160-290
                                    </NavLink>
                                </span>
                                <br />
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/FM_7_22'>
                                        &#10095;  FM 7-22
                                    </NavLink>
                                </span>
                                <br />
                            </details>

                        </td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>
                            <NavLink to='/GardnerDenver/C_portabile'>
                                Compresoare portabile 6.3 kw ÷ 15.5 Kw cu suruburi elicoidale si injectie de ulei
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Compresoare cu suruburi elicoidale, in doua trepte de compresie, fara ungere – oil free, inclusiv cea mai avansata gama de compresie oil free – Ultima Gardner Denver</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Compresoare cu ungere cu apa, in gama oil free</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'><NavLink to='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali'>Compresoare cu excentric si cu paleti centrifugali – vane compressors</NavLink></td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Recipient de stocare ai aerului comprimat de la 270 litrii la 10000 litrii, protejati prin vopsire, galvanizare sau cu interior protejat cu vitroflex – pentru aplicatii oil free din industria farmaceutica, electronica sau alimentara;</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Purje automate pentru evacuarea condesului acumulat in reteaua de aer comprimat</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Sisteme complexe de filtrare cu retinerea particulelor mecanice, a uleiului rezidual si a bactriilor, presiuni 4 ÷ 16 bar 45 ÷ 400 bar</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Uscatoare de aer comprimat prin refrigerare la +3⁰C PDP (pressure dew point – punct de roua sub presiune), presiune maxima 13 ÷ 16 bar</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Uscatoare de aer comprimat prin refrigerare la +3⁰C PDP (pressure dew point – punct de roua sub presiune), presiune maxima 45 bar</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Uscatoare cu membrana pentru aerul comprimat</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Uscatoare prin adsorptie cu -20⁰ ÷ -70⁰ C PDP, presiune de lucru 4 ÷ 16 bar</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Uscatoare prin adsorptie cu -20⁰ ÷ -70⁰ C PDP, presiune pana la 400 bar</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Turn de carbune activ – pentru retinerea uleiului residual si a hidrocarburilor absorbate accidental in masina de comprimare, pana la un rest de ulei residual de 0.003 mg/m³</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Piese de schimb si service de intretinere</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Comanda sincronizata pentru pana la 12 compresoare GD connect</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Vizualizare on-line a parametrilor de functionare, avertizari si alarme, prin tehnologie GSM – iConn Gardner Denver</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Constructii retele de aer comprimat</td>
                    </tr>
                </table>

            </div>
            {/* <ul>
                    <li>Pentru cabinet dentare, compresoare cu piston, fara ungere – oil free;</li>
                    <li>Compresoare scroll, fara ungere;</li>
                    <li>Compresoare cu piston, cu presiuni de refulare de 8 ÷ 15 bar si puteri instalate intre 1.1 si 15 Kw, cu transmisie directa sau prin curele;</li>
                    <li>Compresoare cu suruburi elicoidale si injectie de ulei, cu puteri de la 2.2 Kw la 400 kw si presiuni de refulare de la 7.5 bar pana la 13 bar cu debit/turatie fixa sau turatie vadiabila;</li>
                    <li>Compresoare portabile 6.3 kw ÷ 15.5 Kw cu suruburi elicoidale si injectie de ulei;</li>
                    <li>Compresoare cu suruburi elicoidale, in doua trepte de compresie, fara ungere – oil free, inclusiv cea mai avansata gama de compresie oil free – Ultima Gardner Denver;</li>
                    <li>Compresoare cu ungere cu apa, in gama oil free;</li>
                    <li>Compresoare cu excentric si cu paleti centrifugali – vane compressors;</li>
                    <li></li>
                </ul> */}
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