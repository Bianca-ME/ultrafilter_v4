import React, { useState } from 'react';

import SlidingPane from "../sliding-pane/react-sliding-pane.js";
import '../assets/react-sliding-pane.css';

import arrow from '../assets/north-east-arrow.svg';

export const TablePET = () => {
    return (
        <div>
            <p>m3 / h?</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare Champion cu piston si ungere cu ulei</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Putere ax motor</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>Kw</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='14' className='productDescription'>Compresoare cu piston in trepte de compresie, racite cu apa, fara ungere, pentru suflat recipienti din PET.</td>
                    <td className='productModel'>VH 7</td>
                    <td className='tableData'>423</td>
                    <td className='tableData'>70</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 9</td>
                    <td className='tableData'>584</td>
                    <td className='tableData'>94</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 12</td>
                    <td className='tableData'>734</td>
                    <td className='tableData'>108</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 15</td>
                    <td className='tableData'>922</td>
                    <td className='tableData'>135</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 18</td>
                    <td className='tableData'>1123</td>
                    <td className='tableData'>172</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 21</td>
                    <td className='tableData'>1411</td>
                    <td className='tableData'>211</td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 25</td>
                    <td className='tableData'>1510</td>
                    <td className='tableData'>224</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 28</td>
                    <td className='tableData'>1691</td>
                    <td className='tableData'>239</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 29</td>
                    <td className='tableData'>1811</td>
                    <td className='tableData'>250</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 35</td>
                    <td className='tableData'>2133</td>
                    <td className='tableData'>306</td>
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 40</td>
                    <td className='tableData'>2315</td>
                    <td className='tableData'>325</td>
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 40</td>
                    <td className='tableData'>2315</td>
                    <td className='tableData'>325</td>
                </tr>
                {/* 15 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 45</td>
                    <td className='tableData'>2717</td>
                    <td className='tableData'>405</td>
                </tr>
                {/* 16 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VH 50</td>
                    <td className='tableData'>3220</td>
                    <td className='tableData'>468</td>
                </tr>
            </table>
        </div>
    );
};

export const TableEnviroAirApa = () => {
    return (
        <div>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Oil Free and Silicon Free, Gardner Denver cu injectie de apa pura</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Fluidul de racire</td>
                    <td className='parameterName'>Presiuni de lucru</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/min</td>
                    <td className='parameterUnity'></td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>Kg</td>
                    <td className='parameterUnity'>mm</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='6' className='productDescription'>Compresoare cu injectie de apa pura in blocul de compresie, pentru etansare si preluarea temperaturii de comprimare. Cu turatie fixa.</td>
                    <td className='productModel' rowspan='2'>EnviroAire 15</td>
                    <td className='tableData'>2.3</td>
                    <td className='tableData' rowspan='2'>Aer/Apa</td>
                    <td className='tableData'>8</td>
                    <td className='tableData' rowspan='2'>15</td>
                    <td className='tableData' rowspan='2'>68/65</td>
                    <td className='tableData' rowspan='2'>672/624</td>
                    <td className='tableData' rowspan='2'>1345x880x1612</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>1.8</td>
                    {/* <td className='tableData'></td> */}
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel' rowspan='2'>EnviroAire 22</td>
                    <td className='tableData'>3.5</td>
                    <td className='tableData' rowspan='2'>Aer/Apa</td>
                    <td className='tableData'>8</td>
                    <td className='tableData' rowspan='2'>22</td>
                    <td className='tableData' rowspan='2'>68/65</td>
                    <td className='tableData' rowspan='2'>691/643</td>
                    <td className='tableData' rowspan='2'>1345x880x1612</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>2.89</td>
                    {/* <td></td> */}
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel' rowspan='2'>EnviroAire 37</td>
                    <td className='tableData'>5.89</td>
                    <td className='tableData' rowspan='2'>Aer/Apa</td>
                    <td className='tableData'>8</td>
                    <td className='tableData' rowspan='2'>37</td>
                    <td className='tableData' rowspan='2'>71/61</td>
                    <td className='tableData' rowspan='2'>960/860</td>
                    <td className='tableData' rowspan='2'>1722x920x1659</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>5.14</td>
                    {/* <td></td> */}
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

                <tr className='empty-row'></tr>

                {/* 9 */}
                <tr>
                    <td rowspan='6' className='productDescription'>Compresoare cu injectie de apa pura in blocul de compresie, pentru etansare si preluarea temperaturii de comprimare. Cu turatie si debit variabile.</td>
                    <td className='productModel'>EnviroAire VS 15</td>
                    <td className='tableData'>0.34 - 2.25</td>
                    <td className='tableData'>Aer/ apa</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>67/64</td>
                    <td className='tableData'>687/639</td>
                    <td className='tableData'>1345x880x1612</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>EnviroAire VS 22</td>
                    <td className='tableData'>0.69 - 3.37</td>
                    <td className='tableData'>Aer/ apa</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>22</td>
                    <td className='tableData'>67/64</td>
                    <td className='tableData'>687/658</td>
                    <td className='tableData'>1345x880x1612</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>EnviroAire VS 37</td>
                    <td className='tableData'>1.22 - 6.42</td>
                    <td className='tableData'>Aer/ apa</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>37</td>
                    <td className='tableData'>71/61</td>
                    <td className='tableData'>995/895</td>
                    <td className='tableData'>1722x920x1659</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>EnviroAire VS 50</td>
                    <td className='tableData'>1.23 - 7.54</td>
                    <td className='tableData'>Aer/ apa</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>50</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>1570/1490</td>
                    <td className='tableData'>2158 x 1412 x 1971</td>
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>EnviroAire VS 75</td>
                    <td className='tableData'>1.86 - 11.34</td>
                    <td className='tableData'>Aer/ apa</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>1890/1810</td>
                    <td className='tableData'>2158 x 1412 x 1971</td>
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>EnviroAire VS 100</td>
                    <td className='tableData'>3.17 - 18.46</td>
                    <td className='tableData'>Aer/ apa</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>110</td>
                    <td className='tableData'>78</td>
                    <td className='tableData'>2200</td>
                    <td className='tableData'>2158 x 1412 x 1971</td>
                </tr>
            </table>
        </div>
    );
};

export const TableIndustry4 = () => {
    return (
        <div>
            <p>de reparat hover</p>
            <p>de verificat daca tabelul este identic cu cel de la ESM 160-290</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare Gardner Denver cu suruburi elicoidale si injectie cu ulei</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Presiune</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>kg</td>
                    <td className='parameterUnity'>mm</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='12' className='productDescription'>Compresoare Gardner Denver tip ESM cu turatie fixa</td>
                    <td rowspan='3' className='productModel'>ESM 160</td>
                    <td className='tableData'>32.04</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>160</td>
                    <td className='tableData' rowspan='3'>76</td>
                    <td className='tableData' rowspan='3'>4186</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>28.2</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>23.91</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 200</td>
                    <td className='tableData'>39.23</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>200</td>
                    <td className='tableData' rowspan='3'>77</td>
                    <td className='tableData' rowspan='3'>4415</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>34.85</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>29.38</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 250</td>
                    <td className='tableData'>42.03</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>250</td>
                    <td className='tableData' rowspan='3'>78</td>
                    <td className='tableData' rowspan='3'>4625</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>37.01</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>32.64</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 290</td>
                    <td className='tableData'>47.1</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>290</td>
                    <td className='tableData' rowspan='3'>79</td>
                    <td className='tableData' rowspan='3'>4650</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>41.53</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>36.44</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

                <tr className='empty-row'></tr>

                {/* 15 */}
                <tr>
                    <td rowspan='4' className='productDescription'>Compresoare Gardner Denver tip<br />VS cu turatie si debit variabile</td>
                    <td className='productModel'>VS 90</td>
                    <td className='tableData'>6.54 - 32.33</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>160</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>4378</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
                {/* 16 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 200</td>
                    <td className='tableData'>5.99 - 39.44</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>200</td>
                    <td className='tableData'>77</td>
                    <td className='tableData'>4573</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
                {/* 17 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 250</td>
                    <td className='tableData'>5.83 - 42.80</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>250</td>
                    <td className='tableData'>78</td>
                    <td className='tableData'>4669</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
                {/* 18 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 290</td>
                    <td className='tableData'>5.87 - 47.02</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>290</td>
                    <td className='tableData'>79</td>
                    <td className='tableData'>4684</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
            </table>
        </div>
    );
};

export const TableCTipScroll = () => {
    return (
        <div>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare Scroll, Champion, 100% fara ulei</td>
                    <td className='parameterName'>Debit</td>
                    <td className='parameterName'>Presine maxima </td>
                    <td className='parameterName'>Putere   motor</td>
                    <td className='parameterName'>Racire cu aer</td>
                    <td className='parameterName'>Alimentare</td>
                    <td className='parameterName'>Greutate</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'></td>
                    <td className='parameterUnity'>Volt/50Hz</td>
                    <td className='parameterUnity'>Kg</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='6' className='productDescription'>Compresoarele Champion Scroll Simplex asigura puritate absoluta a aerului comprimat, silicon free si clasa 0 pentru ulei cf. DIN ISO 8573-1</td>
                    <td className='productModel'>S4</td>
                    <td className='tableData'>23,8</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>4</td>
                    <td className='tableData'>Da</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>315</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>S6</td>
                    <td className='tableData'>34,5</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>5,5</td>
                    <td className='tableData'>Da</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>315</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>S8</td>
                    <td className='tableData'>53,4</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>Da</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>315</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>S7 Duplex</td>
                    <td className='tableData'>47,6</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>7</td>
                    <td className='tableData'>Da</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>653</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>S11 Duplex</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>Da</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>653</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>S15 Duplex</td>
                    <td className='tableData'>107</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>Da</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>653</td>
                </tr>
            </table>
        </div>
    );
};
export const TableCPortabile = () => {
    return (
        <div>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu surub, portabile, actionate de motor termic</td>
                    <td className='parameterName'>Debit</td>
                    <td className='parameterName'>Presiune maxima</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Model motor</td>
                    <td className='parameterName'>Nivel zgomot</td>
                    <td className='parameterName'>Alimentare</td>
                    <td className='parameterName'>Rezervor diesel</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/min</td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>tip</td>
                    <td className='parameterUnity'>d(B)</td>
                    <td className='parameterUnity'>diesel</td>
                    <td className='parameterUnity'>Volum litrii</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td className='productModel'>CMP-P10-12  ÷  CMP-P14 </td>
                    <td className='tableData'>1 ÷ 1.4</td>
                    <td className='tableData'>7 ÷ 12</td>
                    <td className='tableData'>15.5</td>
                    <td className='tableData'>Honda GX 630</td>
                    <td className='tableData'>93</td>
                    <td className='tableData'>Honda</td>
                    <td className='tableData'>20</td>
                </tr>
                {/* 4 */}
                <tr>
                    <td className='productModel'>CMP-P21 ÷ CMP-P31</td>
                    <td className='tableData'>1.8 ÷ 2.9</td>
                    <td className='tableData'>6 ÷ 12</td>
                    <td className='tableData'>16.5 ÷ 18.9</td>
                    <td className='tableData'>3TNV76-MCP-DCP</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>Yanmar</td>
                    <td className='tableData'>32</td>
                </tr>
                {/* 5 */}
                <tr>
                    <td className='productModel'>CMP-P36-10 ÷ CMP-P51</td>
                    <td className='tableData'>3.5 ÷ 5</td>
                    <td className='tableData'>7 ÷ 10</td>
                    <td className='tableData'>35</td>
                    <td className='tableData'>4TNV88C-DCP</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>Yanmar</td>
                    <td className='tableData'>60</td>
                </tr>
                {/* 6 */}
                <tr>
                    <td className='productModel'>CMP-P56-14 ÷ CMP-P77</td>
                    <td className='tableData'>5.5 ÷ 7.6</td>
                    <td className='tableData'>7 ÷ 14</td>
                    <td className='tableData'>53.7</td>
                    <td className='tableData'>4TNV98CT-NCP</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>Yanmar</td>
                    <td className='tableData'>140</td>
                </tr>
                {/* 7 */}
                <tr>
                    <td className='productModel'>CMP-P86-14 ÷ CMP-P141-9</td>
                    <td className='tableData'>3.5 ÷ 5</td>
                    <td className='tableData'>8.6 ÷ 13.3</td>
                    <td className='tableData'>90 ÷ 105</td>
                    <td className='tableData'>Deutz TCD 4.1 L4</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>Deutz</td>
                    <td className='tableData'>175</td>
                </tr>
                {/* 8 */}
                <tr>
                    <td className='productModel'>CMP-P201TS-14 ÷ CMP-P271TS-9</td>
                    <td className='tableData'>20 ÷ 27</td>
                    <td className='tableData'>6 ÷ 24</td>
                    <td className='tableData'>180 ÷ 224</td>
                    <td className='tableData'>QSB 6.7</td>
                    <td className='tableData'>71</td>
                    <td className='tableData'>Cummins</td>
                    <td className='tableData'>350</td>
                </tr>
            </table>
        </div>
    );
};

export const TableFM_7_22 = () => {
    return (
        <div>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu surub si injectie de ulei</td>
                    <td className='parameterName'>Debit</td>
                    <td className='parameterName'>Presine maxima</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel zgomot</td>
                    <td className='parameterName'>tensiune alimentare</td>
                    <td className='parameterName'>Rezervor </td>
                    <td className='parameterName'>Optional</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/min</td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>V/50Hz</td>
                    <td className='parameterUnity'>Volum litrii</td>
                    <td className='parameterUnity'>Uscator si filtre</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='5' className='productDescription'>Seria FM, turatie fixa, transmisie prin culere</td>
                    <td className='productModel'>FM 7 </td>
                    <td className='tableData'>1.14_0.99_0.97_0.8</td>
                    <td className='tableData'>7_8_10_13</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>270 sau 500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 11</td>
                    <td className='tableData'>1.59_1.58_1.39_1.14</td>
                    <td className='tableData'>7_8_10_13</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>270 sau 500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 15</td>
                    <td className='tableData'>2.64_2.46_2.20_1.79</td>
                    <td className='tableData'>7_8_10_13</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 18</td>
                    <td className='tableData'>3.15_2.96_2.71_2.38</td>
                    <td className='tableData'>7_8_10_13</td>
                    <td className='tableData'>18</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 22</td>
                    <td className='tableData'>3.5_3.23_3.06_2.59</td>
                    <td className='tableData'>7_8_10_13</td>
                    <td className='tableData'>22</td>
                    <td className='tableData'>74</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>Da</td>
                </tr>

                <tr className='empty-row'></tr>

                {/* 8 */}
                <tr>
                    <td rowspan='5' className='productDescription'>Seria FM RS, turatie variabila, transmisie prin culere</td>
                    <td className='productModel'>FM 7 RS</td>
                    <td className='tableData'>0.8 ÷ 1.13</td>
                    <td className='tableData'>5 ÷ 13</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>67</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>270 sau 500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 11 RS</td>
                    <td className='tableData'>1.07 ÷ 1.58</td>
                    <td className='tableData'>5 ÷ 13</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>270 sau 500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 15 RS</td>
                    <td className='tableData'>1.73 ÷ 2.64</td>
                    <td className='tableData'>5 ÷ 13</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 18 RS</td>
                    <td className='tableData'>2.25 ÷ 3.15</td>
                    <td className='tableData'>5 ÷ 13</td>
                    <td className='tableData'>18</td>
                    <td className='tableData'>71</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>Da</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>FM 22 RS</td>
                    <td className='tableData'>2.59 ÷ 3.50</td>
                    <td className='tableData'>5 ÷ 13</td>
                    <td className='tableData'>22</td>
                    <td className='tableData'>71</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>Da</td>
                </tr>
            </table>
        </div>
    );
};

export const TableESM_VS_160_290 = () => {
    return (
        <div>
            <p>de reparat hover</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu suruburi elicoidale si injectie cu ulei Gardner Denver</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Presiune</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>kg</td>
                    <td className='parameterUnity'>mm</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='12' className='productDescription'>Compresoare Gardner Denver tip ESM cu turatie fixa</td>
                    <td rowspan='3' className='productModel'>ESM 160</td>
                    <td className='tableData'>32.04</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>160</td>
                    <td className='tableData' rowspan='3'>76</td>
                    <td className='tableData' rowspan='3'>4186</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>28.2</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>23.91</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 200</td>
                    <td className='tableData'>39.23</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>200</td>
                    <td className='tableData' rowspan='3'>77</td>
                    <td className='tableData' rowspan='3'>4415</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>34.85</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>29.38</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 250</td>
                    <td className='tableData'>42.03</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>250</td>
                    <td className='tableData' rowspan='3'>78</td>
                    <td className='tableData' rowspan='3'>4625</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>37.01</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>32.64</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 290</td>
                    <td className='tableData'>47.1</td>
                    <td className='tableData'>7.5</td>
                    <td className='tableData' rowspan='3'>290</td>
                    <td className='tableData' rowspan='3'>79</td>
                    <td className='tableData' rowspan='3'>4650</td>
                    <td className='tableData' rowspan='3'>2949/2111/2193</td>
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>41.53</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>36.44</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

                <tr className='empty-row'></tr>

                {/* 15 */}
                <tr>
                    <td rowspan='4' className='productDescription'>Compresoare Gardner Denver tip<br />VS cu turatie si debit variabile</td>
                    <td className='productModel'>VS 90</td>
                    <td className='tableData'>6.54 - 32.33</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>160</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>4378</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
                {/* 16 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 200</td>
                    <td className='tableData'>5.99 - 39.44</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>200</td>
                    <td className='tableData'>77</td>
                    <td className='tableData'>4573</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
                {/* 17 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 250</td>
                    <td className='tableData'>5.83 - 42.80</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>250</td>
                    <td className='tableData'>78</td>
                    <td className='tableData'>4669</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
                {/* 18 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 290</td>
                    <td className='tableData'>5.87 - 47.02</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>290</td>
                    <td className='tableData'>79</td>
                    <td className='tableData'>4684</td>
                    <td className='tableData'>2949/2111/2193</td>
                </tr>
            </table>
        </div>
    );
};

export const TableESM_90_132 = () => {
    return (
        <div>
            <p>de reparat hover</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu suruburi elicoidale si injectie cu ulei Gardner Denver</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Presiune </td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>kg</td>
                    <td className='parameterUnity'>mm</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='15' className='productDescription'>Compresoare Gardner Denver tip<br />ESM cu turatie fixa</td>
                    <td rowspan='3' className='productModel'>ESM 90</td>
                    <td className='tableData'>18,16</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='3'>90</td>
                    <td className='tableData' rowspan='3'>73</td>
                    <td className='tableData' rowspan='3'>2513</td>
                    <td className='tableData' rowspan='3'>2337/1368/2039</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>15,51</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>13,52</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 90e</td>
                    <td className='tableData'>18,16</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>90</td>
                    <td className='tableData' rowspan='2'>73</td>
                    <td className='tableData' rowspan='2'>2513</td>
                    <td className='tableData' rowspan='2'>2337/1368/2039</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>15,58</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 110</td>
                    <td className='tableData'>21,6</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='3'>110</td>
                    <td className='tableData' rowspan='3'>75</td>
                    <td className='tableData' rowspan='3'>2614</td>
                    <td className='tableData' rowspan='3'>1958/1138/1857</td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>18,85</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>16,47</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 110e</td>
                    <td className='tableData'>21,6</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>110</td>
                    <td className='tableData' rowspan='2'>75</td>
                    <td className='tableData' rowspan='2'>2614</td>
                    <td className='tableData' rowspan='2'>2337/1368/2039</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>18,93</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 132</td>
                    <td className='tableData'>24,79</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='3'>132</td>
                    <td className='tableData' rowspan='3'>76</td>
                    <td className='tableData' rowspan='3'>2778</td>
                    <td className='tableData' rowspan='3'>2337/1368/2039</td>
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>21,51</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 15 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>18,7</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 16 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 132e</td>
                    <td className='tableData'>24,79</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>132</td>
                    <td className='tableData' rowspan='2'>76</td>
                    <td className='tableData' rowspan='2'>2778</td>
                    <td className='tableData' rowspan='2'>2337/1368/2039</td>
                </tr>
                {/* 17 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>21,6</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

                <tr className='empty-row'></tr>

                {/* 18 */}
                <tr>
                    <td rowspan='3' className='productDescription'>Compresoare Gardner Denver tip<br />VS cu turatie si debit variabile</td>
                    <td className='productModel'>VS 90</td>
                    <td className='tableData'>5.26 - 18.16</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>90</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>2513</td>
                    <td className='tableData'>2337/1368/2039</td>
                </tr>
                {/* 19 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 110</td>
                    <td className='tableData'>5.26 - 21.51</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>110</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>2614</td>
                    <td className='tableData'>2337/1368/2039</td>
                </tr>
                {/* 20 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 132</td>
                    <td className='tableData'>5.26 - 24.76</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>132</td>
                    <td className='tableData'>76</td>
                    <td className='tableData'>2778</td>
                    <td className='tableData'>2337/1368/2039</td>
                </tr>
            </table>
        </div>
    );
};

export const TableESM_55_75 = () => {
    return (
        <div>
            <p>de reparat hover</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu suruburi elicoidale si injectie cu ulei Gardner Denver</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Presiune </td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>kg</td>
                    <td className='parameterUnity'>mm</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='10' className='productDescription'>Compresoare Gardner Denver tip ESM cu turatie fixa</td>
                    <td rowspan='3' className='productModel'>ESM 55</td>
                    <td className='tableData'>10,71</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='3'>55</td>
                    <td className='tableData' rowspan='3'>69</td>
                    <td className='tableData' rowspan='3'>1405</td>
                    <td className='tableData' rowspan='3'>1958/1138/1857</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>9,5</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>8,25</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 75</td>
                    <td className='tableData'>13,98</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='3'>75</td>
                    <td className='tableData' rowspan='3'>72</td>
                    <td className='tableData' rowspan='3'>1495</td>
                    <td className='tableData' rowspan='3'>1958/1138/1857</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>12,54</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>10,5</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 55e
                    </td>
                    <td className='tableData'>10,71</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>55</td>
                    <td className='tableData' rowspan='2'>69</td>
                    <td className='tableData' rowspan='2'>1406</td>
                    <td className='tableData' rowspan='2'>1958/1138/1857</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>9,57</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 75e</td>
                    <td className='tableData'>14,8</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>75</td>
                    <td className='tableData' rowspan='2'>71</td>
                    <td className='tableData' rowspan='2'>1785</td>
                    <td className='tableData' rowspan='2'>1958/1138/1857</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>12,7</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

                <tr className='empty-row'></tr>

                {/* 13 */}
                <tr>
                    <td rowspan='2' className='productDescription'>Compresoare Gardner Denver tip VS cu turatie si debit variabile</td>
                    <td className='productModel'>VS 55</td>
                    <td className='tableData'>2.50- 10.99</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>55</td>
                    <td className='tableData'>69 - 72</td>
                    <td className='tableData'>1430</td>
                    <td className='tableData'>1958/1138/1858</td>
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 75</td>
                    <td className='tableData'>2.10 - 14.03</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>72 - 74</td>
                    <td className='tableData'>1520</td>
                    <td className='tableData'>1958/1138/1859</td>
                </tr>
            </table>
        </div>
    );
};

export const TableESM_30_45 = () => {
    return (
        <div>
            <p>de reparat hover</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu suruburi elicoidale si injectie cu ulei Gardner Denver</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Presiune </td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>kg</td>
                    <td className='parameterUnity'>mm</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='15' className='productDescription'>Compresoare Gardner Denver tip ESM cu turatie fixa</td>
                    <td rowspan='3' className='productModel'>ESM 30</td>
                    <td className='tableData'>5,75</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='3' className='tableData'>30</td>
                    <td rowspan='3' className='tableData'>67</td>
                    <td rowspan='3' className='tableData'>887</td>
                    <td rowspan='3' className='tableData'>1722/920/1659</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>5,01</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>4,27</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 37</td>
                    <td className='tableData'>7</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='3' className='tableData'>37</td>
                    <td rowspan='3' className='tableData'>68</td>
                    <td rowspan='3' className='tableData'>912</td>
                    <td rowspan='3' className='tableData'>1722/920/1659</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>6,17</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>5,3</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 45</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='3' className='tableData'>45</td>
                    <td rowspan='3' className='tableData'>69</td>
                    <td rowspan='3' className='tableData'>953</td>
                    <td rowspan='3' className='tableData'>1722/920/1659</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>7</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>6,11</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 30e</td>
                    <td className='tableData'>6</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='2' className='tableData'>30</td>
                    <td rowspan='2' className='tableData'>67</td>
                    <td rowspan='2' className='tableData'>964</td>
                    <td rowspan='2' className='tableData'>1722/920/1659</td>
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>5,01</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 37e</td>
                    <td className='tableData'>7,35</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>37</td>
                    <td className='tableData' rowspan='2'>67</td>
                    <td className='tableData' rowspan='2'>989</td>
                    <td className='tableData' rowspan='2'>1722/920/1659</td>
                </tr>
                {/* 15 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>6.28</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                {/* 16 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='2' className='productModel'>ESM 45e</td>
                    <td className='tableData'>8,87</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData' rowspan='2'>45</td>
                    <td className='tableData' rowspan='2'>68</td>
                    <td className='tableData' rowspan='2'>1030</td>
                    <td className='tableData' rowspan='2'>1722/920/1659</td>
                </tr>
                {/* 17 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>7,71</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

                <tr className='empty-row'></tr>

                {/* 18 */}
                <tr>
                    <td rowspan='5' className='productDescription'>Compresoare Gardner Denver tip VS cu turatie si debit variabile</td>
                    <td className='productModel'>VS 30</td>
                    <td className='tableData'>1.13 - 5.53</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>30</td>
                    <td className='tableData'>66</td>
                    <td className='tableData'>925</td>
                    <td className='tableData'>1722/920/1659</td>
                </tr>
                {/* 19 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 37</td>
                    <td className='tableData'>1.44 - 6.90</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>37</td>
                    <td className='tableData'>67</td>
                    <td className='tableData'>952</td>
                    <td className='tableData'>1722/920/1659</td>
                </tr>
                {/* 20 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 45</td>
                    <td className='tableData'>1.41 - 8.02</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>45</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>974</td>
                    <td className='tableData'>1722/920/1659</td>
                </tr>
                {/* 21 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 37e</td>
                    <td className='tableData'>2.44 - 7.15</td>
                    <td className='tableData'>5 - 8</td>
                    <td className='tableData'>37</td>
                    <td className='tableData'>67</td>
                    <td className='tableData'>1029</td>
                    <td className='tableData'>1722/920/1659</td>
                </tr>
                {/* 22 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 45e</td>
                    <td className='tableData'>2.37 - 8.68</td>
                    <td className='tableData'>5 - 10</td>
                    <td className='tableData'>45</td>
                    <td className='tableData'>70</td>
                    <td className='tableData'>1051</td>
                    <td className='tableData'>1722/920/1659</td>
                </tr>
            </table>
        </div>
    );
};

export const TableESM_23_29 = () => {
    return (
        <div>
            <p>de reparat hover</p>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu suruburi elicoidale si injectie cu ulei Gardner Denver</td>
                    <td className='parameterName'>Debit FAD</td>
                    <td className='parameterName'>Presiune</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel de zgomot</td>
                    <td className='parameterName'>Greutate</td>
                    <td className='parameterName'>Gabarit</td>
                    <td className='parameterName' rowspan='2'>Optional cu uscator prin refrigerare</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}

                    <td className='parameterUnity'>m³/h</td>
                    <td className='parameterUnity'>bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>dB(A)</td>
                    <td className='parameterUnity'>kg</td>
                    <td className='parameterUnity'>mm</td>
                    {/* <td></td> */}
                </tr>
                {/* 3 */}
                <tr className='3'>
                    <td rowspan='9' className='productDescription'>Compresoare Gardner Denver tip ESM cu turatie fixa VS cu turatie si debit variabil</td>
                    <td rowspan='3' className='productModel'>ESM 23</td>
                    <td className='tableData'>4,16</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='3' className='tableData DiffHover'>22</td>
                    <td rowspan='3' className='tableData DiffHover'>67</td>
                    <td rowspan='3' className='tableData DiffHover'>650</td>
                    <td rowspan='3' className='tableData DiffHover'>1345/880/1612</td>
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 4 */}
                <tr className='4'>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData DiffHover'>3,45</td>
                    <td className='tableData DiffHover'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData DiffHover'>F 29 E</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>2,98</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 26</td>
                    <td className='tableData'>4,84</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='3' className='tableData'>26</td>
                    <td rowspan='3' className='tableData'>68</td>
                    <td rowspan='3' className='tableData'>677</td>
                    <td rowspan='3' className='tableData'>1345/880/1612</td>
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>4,13</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>3,44</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td rowspan='3' className='productModel'>ESM 29</td>
                    <td className='tableData'>5,52</td>
                    <td className='tableData'>7,5</td>
                    <td rowspan='3' className='tableData'>30</td>
                    <td rowspan='3' className='tableData'>69</td>
                    <td rowspan='3' className='tableData'>681</td>
                    <td rowspan='3' className='tableData'>1345/880/1612</td>
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>4,81</td>
                    <td className='tableData'>10</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>4,12</td>
                    <td className='tableData'>13</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                    <td className='tableData'>F 29 E</td>
                </tr>

                <tr className='empty-row'></tr>

                {/* 12 */}
                <tr>
                    <td rowspan='3' className='productDescription'>Compresoare Gardner Denver tip VS cu turatie si debit variabile</td>
                    <td className='productModel'>VS 23</td>
                    <td className='tableData'>1.11 - 4.12</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>22</td>
                    <td className='tableData'>68</td>
                    <td className='tableData'>681</td>
                    <td className='tableData'>1345/880/1612</td>
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 26</td>
                    <td className='tableData'>1.11 - 4.78</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>26</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>708</td>
                    <td className='tableData'>1345/880/1612</td>
                    <td className='tableData'>F 29 E</td>
                </tr>
                {/* 14 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>VS 29</td>
                    <td className='tableData'>1.11 - 5.41</td>
                    <td className='tableData'>5 - 13</td>
                    <td className='tableData'>30</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>712</td>
                    <td className='tableData'>1345/880/1612</td>
                    <td className='tableData'>F 29 E</td>
                </tr>
            </table>
        </div>
    );
};

export const TableCCuExcentricSiCuPaletiCentrifugali = () => {
    return (
        <div>
            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu excentric si paleti, Champion</td>
                    <td className='parameterName'>Debit</td>
                    <td className='parameterName'>Presiune maxima</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel zgomot</td>
                    <td className='parameterName'>Alimentare</td>
                    <td className='parameterName'>Cu recipient</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* deci tre sa sterg fiecare td 1 din fiecare urmatoarele row-uri */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/min</td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>d(B)</td>
                    <td className='parameterUnity'>Volt/50Hz</td>
                    <td className='parameterUnity'>Volum litrii</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='9' className='productDescription'>Cele mai simple compresoare cu intretinere minima, durata mare de exploatare. Recomandate pentru vulcanizari, vopsitorii, ateliere mici de bricolaje.</td>
                    <td className='productModel'>CMPV01 Tripod</td>
                    <td className='tableData'>0,12</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>1,1</td>
                    <td className='tableData'>62</td>
                    <td className='tableData'>230v sau 400v</td>
                    <td className='tableData'>Nu</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPV01 RM </td>
                    <td className='tableData'>0,12</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>1,1</td>
                    <td className='tableData'>62</td>
                    <td className='tableData'>230v sau 400v</td>
                    <td className='tableData'>75</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPV02 Tripod</td>
                    <td className='tableData'>0,23</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>2,2</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>230v sau 400v</td>
                    <td className='tableData'>75</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPV02 RM </td>
                    <td className='tableData'>0,23</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>2,2</td>
                    <td className='tableData'>69</td>
                    <td className='tableData'>230v sau 400v</td>
                    <td className='tableData'>75</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPV04 RM </td>
                    <td className='tableData'>0,57</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>4</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400v</td>
                    <td className='tableData'>200</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPR 05 PR 07 SDS</td>
                    <td className='tableData'>0,92</td>
                    <td className='tableData'>7</td>
                    <td className='tableData'>5,5</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400v</td>
                    <td className='tableData'>Nu</td>
                </tr>
                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPR 05 PR 10 SDS</td>
                    <td className='tableData'>0,77</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>5,5</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400v</td>
                    <td className='tableData'>Nu</td>
                </tr>
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPR 07 PR 07 SDS</td>
                    <td className='tableData'>1,27</td>
                    <td className='tableData'>7</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400v</td>
                    <td className='tableData'>Nu</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CMPR 07 PR 10 SDS</td>
                    <td className='tableData'>1,05</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>73</td>
                    <td className='tableData'>400v</td>
                    <td className='tableData'>Nu</td>
                </tr>
            </table>
        </div>
    );
};

export const TableCPtCabineteDentare = () => {
    return (
        <table className='alt'>
            {/* 1 */}
            <tr>
                <td rowspan='2'></td>
                <td rowspan='2' className='productModelHeader'>Compresoare dentare fara ungere, Champion, cu sau fara carcasa</td>
                <td className='parameterName'>Numar de scaune</td>
                <td className='parameterName'>Presiune</td>
                <td className='parameterName'>debit FAD la 5 bar</td>
                <td className='parameterName'>Nivel zgomot</td>
                <td className='parameterName'>Alimentare</td>
                <td className='parameterName'>Putere instalata</td>
                <td className='parameterName'>Volum recipient</td>
            </tr>
            {/* 2 */}
            <tr>
                {/* <td></td> */}
                {/* <td></td> */}
                <td className='parameterUnity'></td>
                <td className='parameterUnity'>Bar</td>
                <td className='parameterUnity'>litrii/min</td>
                <td className='parameterUnity'>d(B)</td>
                <td className='parameterUnity'>Volt/50Hz</td>
                <td className='parameterUnity'>Kw</td>
                <td className='parameterUnity'>litrii</td>
            </tr>
            {/* 3 */}
            <tr>
                {/* de schimbat pdf ul */}
                <td rowspan='7' className='productDescription'>Compresoare cu actionare directa prin cuplaj "C prime" cu uscator cu membrana cu -20⁰C PDP si filtrare la  0.01 mic, (optinal in carcasa isonorizanta 53 ÷ 56 dB).</td>
                <td className='productModel'>C Prime 30-7 SM</td>
                <td className='tableData'>1</td>
                <td className='tableData'>5</td>
                <td className='tableData'>78</td>
                <td className='tableData'>65</td>
                <td className='tableData'>230</td>
                <td className='tableData'>0,75</td>
                <td className='tableData'>24</td>
            </tr>
            {/* 4 */}
            <tr>
                {/* <td></td> */}
                <td className='productModel'>C Prime 50-15 SM</td>
                <td className='tableData'>3</td>
                <td className='tableData'>5</td>
                <td className='tableData'>152</td>
                <td className='tableData'>66</td>
                <td className='tableData'>230</td>
                <td className='tableData'>1,5</td>
                <td className='tableData'>40</td>
            </tr>
            {/* 5 */}
            <tr>
                {/* <td></td> */}
                <td className='productModel'>C Prime 50-25 SM</td>
                <td className='tableData'>4</td>
                <td className='tableData'>5</td>
                <td className='tableData'>225</td>
                <td className='tableData'>66</td>
                <td className='tableData'>230</td>
                <td className='tableData'>2,2</td>
                <td className='tableData'>40</td>
            </tr>
            {/* 6 */}
            <tr>
                {/* <td></td> */}
                <td className='productModel'>C Prime 100-30 Tandem SM</td>
                <td className='tableData'>5</td>
                <td className='tableData'>5</td>
                <td className='tableData'>305</td>
                <td className='tableData'>69</td>
                <td className='tableData'>230</td>
                <td className='tableData'>3</td>
                <td className='tableData'>90</td>
            </tr>
            {/* 7 */}
            <tr>
                {/* <td></td> */}
                <td className='productModel'>C Prime 100-50 Tandem SM</td>
                <td className='tableData'>7</td>
                <td className='tableData'>5</td>
                <td className='tableData'>450</td>
                <td className='tableData'>69</td>
                <td className='tableData'>400</td>
                <td className='tableData'>4,4</td>
                <td className='tableData'>90</td>
            </tr>
            {/* 8 */}
            <tr>
                {/* <td></td> */}
                <td className='productModel'>C Prime 200-75 Tandem SM</td>
                <td className='tableData'>9</td>
                <td className='tableData'>5</td>
                <td className='tableData'>660</td>
                <td className='tableData'>72</td>
                <td className='tableData'>400</td>
                <td className='tableData'>6,6</td>
                <td className='tableData'>200</td>
            </tr>
            {/* 9 */}
            <tr>
                {/* <td></td> */}
                <td className='productModel'>C Prime 270-100 Tandem SM</td>
                <td className='tableData'>14</td>
                <td className='tableData'>5</td>
                <td className='tableData'>780</td>
                <td className='tableData'>75</td>
                <td className='tableData'>400</td>
                <td className='tableData'>10</td>
                <td className='tableData'>270</td>
            </tr>
        </table>
    );
};

export const TestTable = () => {
    return (
        <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>
    );
};

export const TableCuPistonDebiteMici = () => {
    return (
        <div>
            {/* <p>cu piston debite mici</p> */}

            <table className='alt'>
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'>Compresoare cu piston si ungere cu ulei Champion, model</td>
                    <td className='parameterName'>Debit</td>
                    <td className='parameterName'>Presiune maxima</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel zgomot</td>
                    <td className='parameterName'>Alimentare</td>
                    <td className='parameterName'>Cu recipient</td>
                </tr>
                <tr>
                    <td className='parameterUnity'>m³/min</td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>d(B)</td>
                    <td className='parameterUnity'>Volt/50Hz</td>
                    <td className='parameterUnity'>Volum litrii</td>
                </tr>

                <tr>
                    <td rowspan='4' className='productDescription'>Compresoare cu actionare directa prin cuplaj "C base"</td>
                    <td className='productModel'>
                        CB-OF-6-CF15
                        <img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} />
                    </td>
                    <td className='tableData'>0,12</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>1,1</td>
                    <td className='tableData'>82</td>
                    <td className='tableData'>230</td>
                    <td className='tableData'>6</td>
                </tr>

                <tr>
                    <td className='productModel'>CB-3-CF2  <img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} /></td>
                    <td className='tableData'>0,19</td>
                    <td className='tableData'>8</td>
                    <td className='tableData'>1,5</td>
                    <td className='tableData'>76</td>
                    <td className='tableData'>230</td>
                    <td className='tableData'>3 ÷ 100</td>
                </tr>

                <tr>
                    <td className='productModel'>CB-24-CM25</td>
                    <td className='tableData'>0,24</td>
                    <td className='tableData'>9</td>
                    <td className='tableData'>1,8</td>
                    <td className='tableData'>79</td>
                    <td className='tableData'>230</td>
                    <td className='tableData'>24 ÷ 100</td>
                </tr>

                <tr>
                    <td className='productModel'>CB-24-WB3</td>
                    <td className='tableData'>0,34</td>
                    <td className='tableData'>9</td>
                    <td className='tableData'>2,2</td>
                    <td className='tableData'>82</td>
                    <td className='tableData'>230</td>
                    <td className='tableData'>24 ÷ 100</td>
                </tr>

                <tr className='empty-row'></tr>

                <tr>
                    <td rowspan='2' className='productDescription'>Compresoare cu transmisie prin curele, o singura treapta de compresie, o singura faza.</td>
                    <td className='productModel'>CL28B-25-CM2</td>
                    <td className='tableData'>0,25</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>1,5</td>
                    <td className='tableData'>77</td>
                    <td className='tableData'>230</td>
                    <td className='tableData'>25 ÷ 150</td>
                </tr>


                <tr>
                    <td className='productModel'>CP28B-50-CM3</td>
                    <td className='tableData'>0.29 ÷ 0.42</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>2,2</td>
                    <td className='tableData'>76 ÷ 78</td>
                    <td className='tableData'>230 ÷ 400</td>
                    <td className='tableData'>50 ÷ 270</td>
                </tr>

                <tr className='empty-row'></tr>

                <tr>
                    <td rowspan='5' className='productDescription'>Compresoare cu transmisie prin curele, doua trepte de compresie, actionate cu  motor electric trifazat.</td>
                    <td className='productModel'>CL4-200-FT4</td>
                    <td className='tableData'>0,54</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>3</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>200 ÷ 270</td>
                </tr>

                <tr>
                    <td className='productModel'>CL5-200-FT55</td>
                    <td className='tableData'>0,61</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>4</td>
                    <td className='tableData'>82</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>200 ÷ 500</td>
                </tr>

                <tr>
                    <td className='productModel'>CL6-200-FT75</td>
                    <td className='tableData'>0,8</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>5,5</td>
                    <td className='tableData'>82</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>200 ÷ 500</td>
                </tr>

                <tr>
                    <td className='productModel'>CL10-270-FT10</td>
                    <td className='tableData'>1,25</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>82</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>200 ÷ 900</td>
                </tr>

                <tr>
                    <td className='productModel'>CA15-500-FT155</td>
                    <td className='tableData'>1,51</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>82</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>200 ÷ 900</td>
                </tr>

                <tr className='empty-row'></tr>

                <tr>
                    <td rowspan='4' className='productDescription'>Compresoare cu transmisie prin curele, doua trepte de compresie, actionate cu motor electric trifazat.</td>
                    <td className='productModel'>CA5-270-15-FT55</td>
                    <td className='tableData'>0,43</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>4</td>
                    <td className='tableData'>81</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>270</td>
                </tr>

                <tr>
                    <td className='productModel'>CA6-270-15-FT75</td>
                    <td className='tableData'>0,57</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>5,5</td>
                    <td className='tableData'>81</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>270</td>
                </tr>

                <tr>
                    <td className='productModel'>CA10-500-15-FT10</td>
                    <td className='tableData'>0,94</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>81</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                </tr>

                <tr>
                    <td className='productModel'>CA15-500-15-FT155 SDS</td>
                    <td className='tableData'>1,14</td>
                    <td className='tableData'>15</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>81</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>500</td>
                </tr>

                <tr className='empty-row'></tr>

                <tr>
                    <td rowspan='3' className='productDescription'>Compresoare cu motor termic, tip Honda, cu benzina</td>
                    <td className='productModel'>CA3-11+11-C4</td>
                    <td className='tableData'>0,3</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>3</td>
                    <td className='tableData'>74</td>
                    <td className='tableData'>Honda</td>
                    <td className='tableData'>22</td>
                </tr>

                <tr>
                    <td className='productModel'>CA4-100-C55	</td>
                    <td className='tableData'>0,42</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>4</td>
                    <td className='tableData'>75</td>
                    <td className='tableData'>Honda</td>
                    <td className='tableData'>100 ÷ 200</td>
                </tr>

                <tr>
                    <td className='productModel'>CA5-270-C9</td>
                    <td className='tableData'>0,56</td>
                    <td className='tableData'>10</td>
                    <td className='tableData'>7,1</td>
                    <td className='tableData'>81</td>
                    <td className='tableData'>Honda</td>
                    <td className='tableData'>270</td>
                </tr>
            </table>
        </div>
    );
};

export const TableScafandrii = () => {
    // sliding pane --- >
    const [state, setState] = useState({
        pane_cScafandrii: false,
    });

    // --- sliding pane <
    return (
        <div>

            <SlidingPane
                className="some-custom-class stop-background-scroll"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.pane_cScafandrii}
                title="Compresoare Champion de inalta presiune HP (232 – 300 bar), pentru umplut butelii cu aer respirabil"
                subtitle="vezi pagina 4 si 5"
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ pane_cScafandrii: false });
                }}
            >
                <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '70%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/xufr/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
            </SlidingPane>


            {/* <img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} /> */}

            <table className='alt'>
                {/* 1 */}
                <tr>
                    <td rowspan='2'></td>
                    <td rowspan='2' className='productModelHeader'><mark>Compresoare cu piston si ungere cu ulei    Champion, model</mark></td>
                    <td className='parameterName'>Debit</td>
                    <td className='parameterName'>Presiune maxima</td>
                    <td className='parameterName'>Putere motor</td>
                    <td className='parameterName'>Nivel zgomot</td>
                    <td className='parameterName'>Alimentare</td>
                    <td className='parameterName'>Timp de incarcare butelie de 10 litrii</td>
                </tr>
                {/* 2 */}
                <tr>
                    {/* <td></td> */}
                    {/* deci tre sa sterg fiecare td 1 din fiecare urmatoarele row-uri */}
                    {/* <td></td> */}
                    <td className='parameterUnity'>m³/min</td>
                    <td className='parameterUnity'>Bar</td>
                    <td className='parameterUnity'>Kw</td>
                    <td className='parameterUnity'>d(B)</td>
                    <td className='parameterUnity'>Volt/50Hz</td>
                    <td className='parameterUnity'>minute</td>
                </tr>
                {/* 3 */}
                <tr>
                    <td rowspan='7' className='productDescription'>Compresoare electrice cu piston, in trepte succesive de compresie, racite cu aer, transmisie prin curea, cu presiuni de refulare de 232 si 300 bar, cu racord DIN300B, DIN323B si YOKE232B.</td>
                    <td className='productModel'>CBA 6 EM DIN300B</td>
                    {/* <td className='productModel' onClick={() => setState({ pane_cScafandrii: true })}><span className='tooltip'>CBA 6 EM DIN300B<img className='arrow-in-table' src={arrow} alt='svg missing' style={{ height: '12px', width: '12px' }} /> <span className='tooltiptexttable'>deschide brosura la pagina 4</span></span></td> */}
                    <td className='tableData'>80</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>2,2</td>
                    <td className='tableData'>91</td>
                    <td className='tableData'>230</td>
                    <td className='tableData requireBorderRight'>25</td>
                </tr>
                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA 6 ET DIN300B</td>
                    <td className='tableData'>100</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>3</td>
                    <td className='tableData'>95</td>
                    <td className='tableData'>400</td>
                    <td className='tableData requireBorderRight'>20</td>
                </tr>
                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA 13 ET SMART DIN300B</td>
                    <td className='tableData'>235</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>4</td>
                    <td className='tableData'>77</td>
                    <td className='tableData'>400</td>
                    <td className='tableData requireBorderRight'>8min30s</td>
                </tr>
                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA 16 ET SMART DIN300B</td>
                    <td className='tableData'>315</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>5,5</td>
                    <td className='tableData'>77</td>
                    <td className='tableData'>400</td>
                    <td className='tableData requireBorderRight'>6min20s</td>
                </tr>
                {/* 7 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA 22 OPEN DIN300B</td>
                    <td className='tableData'>400</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>7,5</td>
                    <td className='tableData'>76</td>
                    <td className='tableData'>400</td>
                    <td className='tableData requireBorderRight'>5</td>
                </tr>
                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA 30 OPEN DIN300B</td>
                    <td className='tableData'>500</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>9,2</td>
                    <td className='tableData'>76</td>
                    <td className='tableData'>400</td>
                    <td className='tableData requireBorderRight'>4</td>
                </tr>

                {/* 9 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA 36 OPEN DIN300B</td>
                    <td className='tableData'>600</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>11</td>
                    <td className='tableData'>76</td>
                    <td className='tableData'>400</td>
                    <td className='tableData requireBorderRight'>3</td>
                </tr>

                <tr className='empty-row'></tr>

                {/* 10 */}
                <tr>
                    <td rowspan='3' className='productDescription'>Compresoare HP, actionate cu motor termic, racite cu aer, presiuni de refulare de 232 si 300 bar.</td>
                    <td className='productModel'>CBA 6 SH DIN300B Honda</td>
                    <td className='tableData requireBorderTop'>100</td>
                    <td className='tableData requireBorderTop'>300</td>
                    <td className='tableData requireBorderTop'>4</td>
                    <td className='tableData requireBorderTop'>101</td>
                    <td className='tableData requireBorderTop'>Benzina</td>
                    <td className='tableData requireBorderTop requireBorderRight'>20</td>
                </tr>
                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA ERGO 16 SH DIB300B Honda</td>
                    <td className='tableData'>315</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>6,3</td>
                    <td className='tableData'>96</td>
                    <td className='tableData'>Benzina</td>
                    <td className='tableData requireBorderRight'>8min30s</td>
                </tr>
                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td className='productModel'>CBA ERGO 16 Lombardini DIN300B</td>
                    <td className='tableData'>315</td>
                    <td className='tableData'>300</td>
                    <td className='tableData'>6,6</td>
                    <td className='tableData'>96</td>
                    <td className='tableData'>Benzina</td>
                    <td className='tableData requireBorderRight'>6min30s</td>
                </tr>
            </table>
        </div>
    )
};



