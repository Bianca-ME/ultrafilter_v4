import React from 'react';
import '../assets/commonstyle.css';

export default function About() {
    return (
        <div data-scroll className='white-background regular-text margin-from-header wide-padding'>
            <div data-scroll data-scroll-direction='horizontal' data-scroll-speed='2' className='p-hw'>
                <p>Infiintata in aprilie 1999 cu un personal format din doi angajati, s-a dezvoltat ca experta in <span className='underline'>domeniul filtratii/ purificarii aerului comprimat si a solutiilor lichide</span>.</p>
            </div>
            <div data-scroll data-scroll-direction='horizontal' data-scroll-speed='3' className='p-hw'>
                <p>Actualmente ne consideram o firma inca mica, dar cu mare flexibililtate si dinamism cu un personal compus din 12 angajati, cu acoperire in zonele invecinate cu Satu Mare – Timisoara, Brasov, Sibiu, Ploiesti, Bucuresti si Constanta.</p>
            </div>

                <p>Cheia succesului nostru o reprezinta munca sustinuta, know how-ul acumulat “din teren” si imbinat cu sustinerea tehnica si experienta fabricantilor reprezentati de noi in Romania.</p>
                <br />
                <p>Specialitatea noastra a ramas expertiza in domeniul filtrarilor cu specializare in retele de aer comprimat; compresoare, filtre si uscatoare pentru aerul comprimat, putem realiza filtrarea aerului comprimat pana la nivelul de sterilizare; filtrare solutii lichide si racitoare frigorifice – water chillers pentru controlul temperaturii apei de racire; desprafuire industriala si colectoare de praf, fum si emulsii utilizate pentru purificarea mediului unde apar contaminanti in atmosfera degajati din procese tehnologice de productie; filtre rama pentru ventilatie si filtre Hepa; ventilatoare centrifugale si axiale; puneri in functiune, service, piese de schimb pentru compresoare si cartuse filtrante hidraulice, masuratori de debite, masutarori calitate aer comprimat, inchiriei compresoare, proiectare si solutii la cheie.</p>
        </div>
    )
};

// export default function About() {
//     return (
//         <div data-scroll>
//             <h1 style={{fontSize: 300, marginTop: 0}}>About component rendered</h1>
//         </div>
//     )
// };

// const About = () => (
//     <div>
//         <h1>it works!</h1>
//     </div>
//     );

// export default About;