import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/30496_24_4_18_CMPV04_RM_m.jpg';

export default function C_cu_excentric_si_cu_paleti_centrifugali() {
    return (
        <main className='white-background margin-from-header wide-padding'>
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

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};