import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/c_portabil.jpg';

export default function C_cu_excentric_si_cu_paleti_centrifugali() {
    return (
        <main className='main-1 margin-from-header wide-padding'>
            <p className='regular-text-important'>Compresoare Champion mobile, acolo unde ai nevoie de aer comprimat</p>
            <img className='simpleimg' src={gdimg1} alt='image missing' />
            <p className='regular-text'>
                Solutia de a avea aer comprimat portabil la diverse aplicatii de reparatii stradale sau locuri intamplatoare de lucru o reprezinta compresoarele cu surub sau turbocompresoarele portabile, compresoare de asfalt.
                Usor de tractat sau de transportat, cu sursa independenta de actionare, compacte si usoare, functioneaza cu emisii reduse, eficiente energetic.
            </p>

            <table className='temptable'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'>Compresoare cu surub, portabile, actionate de motor termic</td>
                    <td>Debit</td>
                    <td>Presiune maxima</td>
                    <td>Putere motor</td>
                    <td>Model motor</td>
                    <td>Nivel zgomot</td>
                    <td>Alimentare</td>
                    <td>Rezervor diesel</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    <td>m³/min</td>
                    <td>Bar</td>
                    <td>Kw</td>
                    <td>tip</td>
                    <td>d(B)</td>
                    <td>diesel</td>
                    <td>Volum litrii</td>
                </tr>
                {/* 3 */}
                <tr>
                   <td>CMP-P10-12  ÷  CMP-P14 </td>
                   <td>1 ÷ 1.4</td>
                   <td>7 ÷ 12</td>
                   <td>15.5</td>
                   <td>Honda GX 630</td>
                   <td>93</td>
                   <td>Honda</td>
                   <td>20</td>
                </tr>
                {/* 4 */}
                <tr>
                    <td>CMP-P21 ÷ CMP-P31</td>
                    <td>1.8 ÷ 2.9</td>
                    <td>6 ÷ 12</td>
                    <td>16.5 ÷ 18.9</td>
                    <td>3TNV76-MCP-DCP</td>
                    <td>69</td>
                    <td>Yanmar</td>
                    <td>32</td>
                </tr>
                {/* 5 */}
                <tr>
                   <td>CMP-P36-10 ÷ CMP-P51</td>
                   <td>3.5 ÷ 5</td>
                   <td>7 ÷ 10</td>
                   <td>35</td>
                   <td>4TNV88C-DCP</td>
                   <td>69</td>
                   <td>Yanmar</td>
                   <td>60</td>
                </tr>
                {/* 6 */}
                <tr>
                   <td>CMP-P56-14 ÷ CMP-P77</td>
                   <td>5.5 ÷ 7.6</td>
                   <td>7 ÷ 14</td>
                   <td>53.7</td>
                   <td>4TNV98CT-NCP</td>
                   <td>69</td>
                   <td>Yanmar</td>
                   <td>140</td>
                </tr>
                {/* 7 */}
                <tr>
                   <td>CMP-P86-14 ÷ CMP-P141-9</td>
                   <td>3.5 ÷ 5</td>
                   <td>8.6 ÷ 13.3</td>
                   <td>90 ÷ 105</td>
                   <td>Deutz TCD 4.1 L4</td>
                   <td>70</td>
                   <td>Deutz</td>
                   <td>175</td>
                </tr>
                {/* 8 */}
                <tr>
                    <td>CMP-P201TS-14 ÷ CMP-P271TS-9</td>
                    <td>20 ÷ 27</td>
                    <td>6 ÷ 24</td>
                    <td>180 ÷ 224</td>
                    <td>QSB 6.7</td>
                    <td>71</td>
                    <td>Cummins</td>
                    <td>350</td>
                </tr>
            </table>

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};