import React from 'react'
import arrowRight from '../assets/arrows-svg/arrow-right-333-svgrepo-com-white.svg';

export default function Footer() {
    return (
        <div className='display-as-column padding-top card2'>
            <p className='letstalk'>Contact</p>
            <div className='flex wrap '>
                <div className='write-us'>
                    {/* form-container padding-top */}
                    <form className=''>
                        <input className='input1' type='text' id='name' placeholder='nume, prenume' required />
                        <input className='input2' type='email' id='email' placeholder='adresa dvs de email' required />
                        <input className='input3' type='text' id='phone' placeholder='numar de telefon' required />
                        <textarea className='leave-msg' id='message' rows='10' placeholder='[scrie-ne]' required />
                        <button className='submit-button' type='submit'><img className='send-arrow' src={arrowRight} alt='svg missing' /></button>
                    </form>
                </div>

                <div className='contact-info-all flex wrap'>
                    <div>
                        {/* <p>Adresa</p> */}
                        <div className='inline-flex contact-info'>
                            <div>
                                <p>Telefon:</p>
                                <p>Fax:</p>
                                <p>Email:</p>
                                <p>Web:</p>
                            </div>
                            <div>
                                <p>+40371 152 977</p>
                                <p>+40213260004</p>
                                <p>office@ultrafilter.ro</p>
                                <p className='underline-simple'>https://ultrafilter.ro</p>
                            </div>
                        </div>


                        <div className='contact-info'>
                            <p>Intrarea</p>
                            <p>Profesor Gheorghe Costa Foru, nr. 4,</p>
                            <p>sector 2, </p>
                            <p>024098 Bucuresti</p>
                        </div>
                    </div>
                    <div className='contact-info'>
                        <span style={{ fontWeight: '500' }}>Depozit Brasov</span>
                        <br />
                        Strada Zizinului 109 Bis
                        <br />
                        tel: +40 744 495016
                        <br />
                        <br />
                        <br />
                        <br />
                        CUI: RO 11435124
                        <br />
                        Reg. Com.: J 40/1300/1999
                        <br />
                        capital social 71 000,00 ron
                        <br />
                        Banca: UniCredit Bank SA, suc. Traian
                        <br />
                        <table className='address-table'>
                            <tbody>
                                <tr>
                                    <th>Cont:</th>
                                    <td>RON: RO73 BACX 0000 0000 3006 2310</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>EUR: RO88 BACX 0000 0000 3006 2040</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
            <p className='copyright'>Copyright © 2023 ultrafilter. Toate drepturile rezervate. | Design by
                <span className='tooltip'> B4a<span className='tooltiptext'>bianca.mgeg@gmail.com 🚴‍♀️</span></span></p>
        </div>

    )
}
