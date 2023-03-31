import React from 'react';
import { NavLink } from 'react-router-dom';

// import style
import '../../assets/commonstyle.css';

// import other files
// import signature from '../assets/semnaturaMHprovizoriu.svg';

export default function GardnerDenver() {
    return (
        <main className='main-1 margin-from-header'>
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
                        <td className='td-gd-c'>Compresoare scroll, fara ungere</td>
                    </tr>
                    <tr>
                        {/* <td className='td-gd-c'>Compresoare cu piston, cu presiuni de refulare de 8 ÷ 15 bar si puteri instalate intre 1.1 si 15 Kw, cu transmisie directa sau prin curele</td> */}
                        {/* test */}
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
                                <br/>
                                <span class="details1">
                                    <NavLink to='/GardnerDenver/C_pt_scafandrii_aer_respirabil'>
                                        &#10095;  Compresaore pentru scafandrii_aer respirabil
                                    </NavLink>
                                </span>
                                <br/>
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
                        <td className='td-gd-c'>Compresoare cu suruburi elicoidale si injectie de ulei, cu puteri de la 2.2 Kw la 400 kw si presiuni de refulare de la 7.5 bar pana la 13 bar cu debit/turatie fixa sau turatie vadiabila</td>
                    </tr>
                    <tr>
                        <td className='td-gd-c'>Compresoare portabile 6.3 kw ÷ 15.5 Kw cu suruburi elicoidale si injectie de ulei</td>
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