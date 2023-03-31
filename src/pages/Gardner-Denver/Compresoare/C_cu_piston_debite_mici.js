import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/commonstyle.css';
import gdimg1 from '../../../assets/GD/34002_28_3_19_CA5_BP_FT55_m.jpg';

export default function C_cu_piston_debite_mici () {
    return (
        <main className='main-1 margin-from-header wide-padding'>
            <p className='regular-text-important'>Compresoare cu piston, Champion, debite mici, presiuni pana la 15 bar, pentru ateliere de lucru</p>
            <img className='simpleimg' src={gdimg1} alt='image missing' />
            <p className='regular-text'>
                Compresoare cu piston, actionate cu motor electric cu puteri intre 1.5 si 22 Kw, cu transmisie prin cuplaj cu o singura faza sau transmisie prin curele actionate cu motoare electrice trifazice, cu obtiunea de montaj in carcasa isonorizata, presiuni de refultare intre 8 si 15 bar, alimentate la 230V ÷ 400V. Compresoarele cu piston Champion pot fi montate pe sasiu sau pe recipientul de aer comprimat.
                Compresoare cu piston actionate cu motor temic Honda.
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
                    <td rowspan='4'>Compresoare cu actionare directa prin cuplaj "C base"</td>
                    <td><NavLink to='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali/PDF'>CB-OF-6-CF15 OIL FREE</NavLink></td>
                    <td>0,12</td>
                    <td>8</td>
                    <td>1,1</td>
                    <td>82</td>
                    <td>230</td>
                    <td>6</td>
                </tr>

                {/* 4 */}
                <tr>
                    {/* <td></td> */}
                    <td>CB-3-CF2</td>
                    <td>0,19</td>
                    <td>8</td>
                    <td>1,5</td>
                    <td>76</td>
                    <td>230</td>
                    <td>3 ÷ 100</td>
                </tr>

                {/* 5 */}
                <tr>
                    {/* <td></td> */}
                    <td>CB-24-CM25</td>
                    <td>0,24</td>
                    <td>9</td>
                    <td>1,8</td>
                    <td>79</td>
                    <td>230</td>
                    <td>24 ÷ 100</td>
                </tr>

                {/* 6 */}
                <tr>
                    {/* <td></td> */}
                    <td>CB-24-WB3</td>
                    <td>0,34</td>
                    <td>9</td>
                    <td>2,2</td>
                    <td>82</td>
                    <td>230</td>
                    <td>24 ÷ 100</td>
                </tr>

                {/* 7 */}
                <tr>
                    <td rowspan='2'>Compresoare cu transmisie prin curele, o singura treapta de compresie, o singura faza.</td>
                    <td>CL28B-25-CM2</td>
                    <td>0,25</td>
                    <td>10</td>
                    <td>1,5</td>
                    <td>77</td>
                    <td>230</td>
                    <td>25 ÷ 150</td>
                </tr>


                {/* 8 */}
                <tr>
                    {/* <td></td> */}
                    <td>CP28B-50-CM3</td>
                    <td>0.29 ÷ 0.42</td>
                    <td>10</td>
                    <td>2,2</td>
                    <td>76 ÷ 78</td>
                    <td>230 ÷ 400</td>
                    <td>50 ÷ 270</td>
                </tr>
   
                {/* 9 */}
                <tr>
                    <td rowspan='5'>Compresoare cu transmisie prin curele, doua trepte de compresie, actionate cu  motor electric trifazat.</td>
                    <td>CL4-200-FT4</td>
                    <td>0,54</td>
                    <td>10</td>
                    <td>3</td>
                    <td>75</td>
                    <td>400</td>
                    <td>200 ÷ 270</td>
                </tr>
 
                {/* 10 */}
                <tr>
                    {/* <td></td> */}
                    <td>CL5-200-FT55</td>
                    <td>0,61</td>
                    <td>11</td>
                    <td>4</td>
                    <td>82</td>
                    <td>400</td>
                    <td>200 ÷ 500</td>
                </tr>

                {/* 11 */}
                <tr>
                    {/* <td></td> */}
                    <td>CL6-200-FT75</td>		
                    <td>0,8</td>
                    <td>11</td>
                    <td>5,5</td>
                    <td>82</td>
                    <td>400</td>
                    <td>200 ÷ 500</td>
                </tr>

                {/* 12 */}
                <tr>
                    {/* <td></td> */}
                    <td>CL10-270-FT10</td>
                    <td>1,25</td>
                    <td>11</td>
                    <td>7,5</td>
                    <td>82</td>
                    <td>400</td>
                    <td>200 ÷ 900</td>
                </tr>

                {/* 13 */}
                <tr>
                    {/* <td></td> */}
                    <td>CA15-500-FT155</td>		
                    <td>1,51</td>
                    <td>11</td>
                    <td>11</td>
                    <td>82</td>
                    <td>400</td>
                    <td>200 ÷ 900</td>
                </tr>

                {/* 14 */}
                <tr>
                    <td rowspan='4'>Compresoare cu transmisie prin curele, doua trepte de compresie, actionate cu motor electric trifazat.</td>
                    <td>CA5-270-15-FT55</td>		
                    <td>0,43</td>
                    <td>15</td>
                    <td>4</td>
                    <td>81</td>
                    <td>400</td>
                    <td>270</td>
                </tr>						

                {/* 15 */}
                <tr>
                    {/* <td></td> */}
                    <td>CA6-270-15-FT75</td>		
                    <td>0,57</td>
                    <td>15</td>
                    <td>5,5</td>
                    <td>81</td>
                    <td>400</td>
                    <td>270</td>
                </tr>

                {/* 16 */}
                <tr>
                    {/* <td></td> */}
                    <td>CA10-500-15-FT10</td>		
                    <td>0,94</td>
                    <td>15</td>
                    <td>7,5</td>
                    <td>81</td>
                    <td>400</td>
                    <td>500</td>
                </tr>
		
                {/* 17 */}
                <tr>
                    {/* <td></td> */}
                    <td>CA15-500-15-FT155 SDS</td>		
                    <td>1,14</td>
                    <td>15</td>
                    <td>11</td>
                    <td>81</td>
                    <td>400</td>
                    <td>500</td>
                </tr>

                {/* 18 */}
                <tr>
                    <td rowspan='3'>Compresoare cu motor termic, tip Honda, cu benzina</td>
                    <td>CA3-11+11-C4</td>		
                    <td>0,3</td>
                    <td>10</td>
                    <td>3</td>
                    <td>74</td>
                    <td>Honda</td>
                    <td>22</td>
                </tr>

                {/* 19 */}
                <tr>
                    {/* <td></td> */}
                    <td>CA4-100-C55	</td>		
                    <td>0,42</td>
                    <td>10</td>
                    <td>4</td>
                    <td>75</td>
                    <td>Honda</td>
                    <td>100 ÷ 200</td>
                </tr>
				
                {/* 20 */}
                <tr>
                    {/* <td></td> */}
                    <td>CA5-270-C9</td>		
                    <td>0,56</td>
                    <td>10</td>
                    <td>7,1</td>
                    <td>81</td>
                    <td>Honda</td>
                    <td>270</td>
                </tr>
            </table>

        </main>
        // <div>
        //     <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>
        // </div>
    )
};