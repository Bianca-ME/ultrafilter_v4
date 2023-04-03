import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/41725_22_1_21_CHAMPION_DUPLEX_ANGLE2_m_1.jpg';
import gdimg2 from '../../../assets/GD/41728_22_1_21_CHAMPION_DUPLEX_INTERNALS_m_1.jpg';

export default function C_oil_free_tip_scroll () {
    return (
        <main className='main-1 margin-from-header narrow-padding'>
            <p className='regular-text-important'>Compresoare Champion, 100% oil free, bloc de compresie scroll</p>
            <img className='simpleimg' src={gdimg1} alt='image missing' />
            <img className='simpleimg' src={gdimg2} alt='image missing' />
            <p className='regular-text'>
                Puritatea aerului comprimat este cruciala in aplicatile multor sectoare industriale, cum ar fi cercetarea, biotehnologie, electronica, medicina, tipografii, industria auto, etc. Seria-S de compresoare scroll Champion fara ungere, nu utilizeaza uleiuri pentru ungere sau etansare, este certificate clasa 0 cf. DIN ISO 8573-1 si silicon free, cee ace reprezinta cel mai inalt standard de calitate al aerului comprimat.
            </p>

            {/* table 8x8 */}
            <table className='temptable'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2'>Compresoare Scroll, Champion, 100% fara ulei</td>
                    <td>Debit</td>
                    <td>Presine maxima </td>
                    <td>Putere   motor</td>
                    <td rowspan='2'>Racire cu aer</td>
                    <td>Alimentare</td>
                    <td>Greutate</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td>m³/h</td>
                    <td>Bar</td>
                    <td>Kw</td>
                    {/* <td></td> */}
                    <td>Volt/50Hz</td>
                    <td>Kg</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='6'>Compresoarele Champion Scroll Simplex asigura puritate absoluta a aerului comprimat, silicon free si clasa 0 pentru ulei cf. DIN ISO 8573-1</td>
                    <td>S4</td>
                    <td>23,8</td>
                    <td>8</td>
                    <td>4</td>
                    <td>Da</td>
                    <td>400</td>
                    <td>315</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td>S6</td>
                    <td>34,5</td>
                    <td>8</td>
                    <td>5,5</td>
                    <td>Da</td>
                    <td>400</td>
                    <td>315</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td>S8</td>
                    <td>53,4</td>
                    <td>8</td>
                    <td>7,5</td>
                    <td>Da</td>
                    <td>400</td>
                    <td>315</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td>S7 Duplex</td>
                    <td>47,6</td>
                    <td>8</td>
                    <td>7</td>
                    <td>Da</td>
                    <td>400</td>
                    <td>653</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td>S11 Duplex</td>
                    <td>69</td>
                    <td>8</td>
                    <td>11</td>
                    <td>Da</td>
                    <td>400</td>
                    <td>653</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td>S15 Duplex</td>
                    <td>107</td>
                    <td>8</td>
                    <td>15</td>
                    <td>Da</td>
                    <td>400</td>
                    <td>653</td>
                </tr>
            </table>

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};