import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/32420_23_10_18_CBA22_OPEN_m_1.jpg';
import gdimg2 from '../../../assets/GD/32481_25_10_18_CBA36_OPEN_m_2.jpg';

export default function C_pt_scafandrii_aer_respirabil() {
    return (
        <main className='white-background margin-from-header wide-padding'>
            <p className='regular-text-important'>Compresoare Champion de inalta presiune HP (232 – 300 bar), pentru umplut butelii cu aer respirabil</p>
            <img className='simpleimg' src={gdimg1} alt='image missing' />
            <img className='simpleimg' src={gdimg2} alt='image missing' />
            <p className='regular-text'>
                Compresooare Champion de inalta presiune, pentru umplut butelii/ cilindrii, aer respirabil utilizat de pompieri, echipaje de salvare (ex. Salvare miniera, metoru, etc), scafandrii autonomi.
                Compresoarele Champion sunt versatile, sigure, flexibile in aplicatii si utilizari asigurand:
                Timpi scurti de umplere a buteliilor;
                Functionare automata;
                Diverse modele de motoare de actionare;
                Usor de utilizat;
                Montate pe sasiu sau in carcasa isonorizata;
                Actionate cu motor electric sau
                cu motor termic Honda;
                Inlcud o varietate larga de accesorii.
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
                    <td>315</td>
                    <td>300</td>
                    <td>5,5</td>
                    <td>77</td>
                    <td>400</td>
                    <td>6min20s</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 22 OPEN DIN300B</td>
                    <td>400</td>
                    <td>300</td>
                    <td>7,5</td>
                    <td>76</td>
                    <td>400</td>
                    <td>5</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 30 OPEN DIN300B</td>	
                    <td>500</td>
                    <td>300</td>
                    <td>9,2</td>
                    <td>76</td>
                    <td>400</td>
                    <td>4</td>
                </tr>

                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA 36 OPEN DIN300B</td>
	                <td>600</td>
                    <td>300</td>
                    <td>11</td>
                    <td>76</td>
                    <td>400</td>
                    <td>3</td>
                </tr>
                {/* 10 */}
                <tr>
                    <td rowspan='3'>Compresoare HP, actionate cu motor termic, racite cu aer, presiuni de refulare de 232 si 300 bar.</td>
		            <td>CBA 6 SH DIN300B Honda</td>
                    <td>100</td>
                    <td>300</td>
                    <td>4</td>
                    <td>101</td>
                    <td>Benzina</td>
                    <td>20</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA ERGO 16 SH DIB300B Honda</td>
                    <td>315</td>
                    <td>300</td>
                    <td>6,3</td>
                    <td>96</td>
                    <td>Benzina</td>
                    <td>8min30s</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td>CBA ERGO16 Lombardini DIN300B</td>	
                    <td>315</td>
                    <td>300</td>
                    <td>6,6</td>
                    <td>96</td>
                    <td>Benzina</td>
                    <td>6min30s</td>
                </tr>				
            </table>

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};