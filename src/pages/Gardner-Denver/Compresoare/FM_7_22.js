import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/51313_7_2_23_FM7_ELITE_RENDER_FRAME_1_FRONT_CAMERA_FRONT_m.jpg';

export default function FM_7_22 () {
    return (
        <main className='main-1 margin-from-header wide-padding'>
            <p className='regular-text-important'>Compresoare Champion cu suruburi elicoidale si ungere cu ulei</p>
            <img className='simpleimg' src={gdimg1} alt='image missing' />
            <p className='regular-text'>
                Compresoarele Champion cu suruburi elicoidale model Enduro de mare fiabilitate si eficiente energetic, folosesc injectia de ulei in blocul de ocmpresie pentru a asigura ungerea mecanismului, etansarea cat si preluarea temperaturii de compresie.
                COntrollerul C-PRO 2.0 guverneaza functionarea compresorului, indica parametrii de stare cat si avertizari, alarme si protectia termica a motorului si a circuitului de aer si ulei.
                Compresoarele cu surub Champion este recomandabil sa fie folosite in temperature ambientale de maximum 46⁰C.
                Compresoarele cu suruburi elicoidale Champion pot fi livrate de sine stataor cat si montate pe recipient de aer comprimat in pachet cu filtru si uscator de aer prin refrigerare.
            </p>

            {/* table 12x9 */}
            <table className='temptable'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2'>Compresoare cu surub si injectie de ulei</td>
                    <td>Debit</td>
                    <td>Presine maxima</td>
                    <td>Putere motor</td>
                    <td>Nivel zgomot</td>
                    <td>tensiune alimentare</td>
                    <td>Rezervor </td>
                    <td>Optional</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td>m³/min</td>
                    <td>Bar</td>
                    <td>Kw</td>
                    <td>dB(A)</td>
                    <td>V/50Hz</td>
                    <td>Volum litrii</td>
                    <td>Uscator si filtre</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='5'>Seria FM, turatie fixa, transmisie prin culere</td>
                    <td>FM 7 </td>
                    <td>1.14_0.99_0.97_0.8</td>
                    <td>7_8_10_13</td>
                    <td>7,5</td>
                    <td>70</td>
                    <td>400</td>
                    <td>270 sau 500</td>
                    <td>Da</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 11</td>
                    <td>1.59_1.58_1.39_1.14</td>
                    <td>7_8_10_13</td>
                    <td>11</td>
                    <td>70</td>
                    <td>400</td>
                    <td>270 sau 500</td>
                    <td>Da</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 15</td>
                    <td>2.64_2.46_2.20_1.79</td>
                    <td>7_8_10_13</td>
                    <td>15</td>
                    <td>73</td>
                    <td>400</td>
                    <td>500</td>
                    <td>Da</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 18</td>
                    <td>3.15_2.96_2.71_2.38</td>
                    <td>7_8_10_13</td>
                    <td>18</td>
                    <td>73</td>
                    <td>400</td>
                    <td>500</td>
                    <td>Da</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 22</td>
                    <td>3.5_3.23_3.06_2.59</td>
                    <td>7_8_10_13</td>
                    <td>22</td>
                    <td>74</td>
                    <td>400</td>
                    <td>500</td>
                    <td>Da</td>
                </tr>
                {/* 8 */}
                <tr>
                    <td rowspan='5'>Seria FM RS, turatie variabila, transmisie prin culere</td>
                    <td>FM 7 RS</td>
                    <td>0.8 ÷ 1.13</td>
                    <td>5 ÷ 13</td>
                    <td>7,5</td>
                    <td>67</td>
                    <td>400</td>
                    <td>270 sau 500</td>
                    <td>Da</td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 11 RS</td>
                    <td>1.07 ÷ 1.58</td>
                    <td>5 ÷ 13</td>
                    <td>11</td>
                    <td>70</td>
                    <td>400</td>
                    <td>270 sau 500</td>
                    <td>Da</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 15 RS</td>
                    <td>1.73 ÷ 2.64</td>
                    <td>5 ÷ 13</td>
                    <td>15</td>
                    <td>70</td>
                    <td>400</td>
                    <td>500</td>
                    <td>Da</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 18 RS</td>
                    <td>2.25 ÷ 3.15</td>
                    <td>5 ÷ 13</td>
                    <td>18</td>
                    <td>71</td>
                    <td>400</td>
                    <td>500</td>
                    <td>Da</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td>FM 22 RS</td>
                    <td>2.59 ÷ 3.50</td>
                    <td>5 ÷ 13</td>
                    <td>22</td>
                    <td>71</td>
                    <td>400</td>
                    <td>500</td>
                    <td>Da</td>
                </tr>
            </table>

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};