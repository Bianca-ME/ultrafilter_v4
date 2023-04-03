import React from 'react';
import '../assets/commonstyle.css';

export default function Contact() {
    return (
        <main className='main-1-custom1 regular-text-custom1 borders'>
            <p className='regular-text-important-custom'>work in progress</p>
            <div className='inline-flex-container'>
                <div className='display-as-column padding-top'>

                    {/* de pastrat intact acest div */}
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

                    {/* adresa */}
                    <div className='contact-info'>
                        <p>Intrarea</p>
                        <p>Profesor Gheorghe Costa Foru, nr. 4,</p>
                        <p>sector 2, </p>
                        <p>024098 Bucuresti</p>
                    </div>
                </div>
                <div className='form-container padding-top'>
                    <form className='form-column1'>
                        <input className='input1' type='text' id='name' placeholder='nume' required />
                        <input className='input2' type='email' id='email' placeholder='adresa dvs de email' required />
                        <input className='input3' type='text' id='phone' placeholder='numar de telefon' required />
                        <textarea id='message' rows='10' placeholder='cum va putem ajuta?' required />
                        <div className='button'>
                            <button type='submit'>[ trimite ]</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.852694494476!2d26.12399741479579!3d44.43618377910226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2ed43cc651%3A0xc3f3d069cd2f0453!2sUltrafilter!5e0!3m2!1sen!2sro!4v1677702958374!5m2!1sen!2sro" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </main>
    )
};

// &#9993;