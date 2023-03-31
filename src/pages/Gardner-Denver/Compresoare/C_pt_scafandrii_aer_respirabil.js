import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/30496_24_4_18_CMPV04_RM_m.jpg';

export default function C_pt_scafandrii_aer_respirabil () {
    return (
        <main className='main-1 margin-from-header wide-padding'>
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
                    <td rowspan='2'>Compresoare cu piston si ungere cu ulei    Champion, model</td>
                    <td>Debit</td>
                    <td>Presiune maxima</td>
                    <td>Putere motor</td>
                    <td>Nivel zgomot</td>
                    <td>Alimentare</td>
                    <td>Timp de incarcare butelie de 10 litrii</td>
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
                    <td>minute</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='7'>Compresoare electrice cu piston, in trepte succesive de compresie, racite cu aer, transmisie prin curea, cu presiuni de refulare de 232 si 300 bar, cu racord DIN300B, DIN323B si YOKE232B.</td>
                    <td><NavLink to='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali/PDF'>CBA 6 EM DIN300B</NavLink></td>	
                    <td>80</td>
                    <td>300</td>
                    <td>2,2</td>
                    <td>91</td>
                    <td>230</td>
                    <td>25</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 6 ET DIN300B</td>
                    <td>100</td>
                    <td>300</td>
                    <td>3</td>
                    <td>95</td>
                    <td>400</td>
                    <td>20</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 13 ET SMART DIN300B</td>
                    <td>235</td>
                    <td>300</td>
                    <td>4</td>
                    <td>77</td>
                    <td>400</td>
                    <td>8min30s</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 16 ET SMART DIN300B</td>
                    315	300	5,5	77	400	6min20s			
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 22 OPEN DIN300B</td>
                    400	300	7,5	76	400	5	
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td>CMPR 05 PR 07 SDS</td>		
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 30 OPEN DIN300B</td>
                    500	300	9,2	76	400	4	
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* 10 */}
                <tr>
                    <td rowspan='3'>Compresoare HP, actionate cu motor termic, racite cu aer, presiuni de refulare de 232 si 300 bar.</td>
                    <td>CBA 36 OPEN DIN300B</td>
                    600	300	11	76	400	3		
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 6 SH DIN300B Honda</td>	
                    100	300	4	101	Benzina	20	
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    {/* <td></td> */}
                    <td>CBA ERGO 16 SH DIB300B Honda</td>	
                    315	300	6,3	96	Benzina	8min30s	
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {/* lipseste unul CBA ERGO16 Lombardini DIN300B */}
                {/* 315	300	6,6	96	Benzina	6min30s */}
            </table>

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};