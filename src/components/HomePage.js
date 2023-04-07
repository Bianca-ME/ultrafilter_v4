import React from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';

// images
import Dlogo from '../assets/donaldson-logo.jpg';
import GDlogo from '../assets/gardner-denver-logo.jpg';
import backgrr from '../assets/frame_8.png';
import Picture49 from '../assets/Picture49.png';
import Picture26 from '../assets/Picture26.jpg';

// styling
import '../assets/DonaldsonAndGD.css';

export default function Header() {



    return (
        <main className='white-font'>
            <div className='DonaldsonAndGD margin-from-header'>
                <div className='containsPage1 slide slide-top'>
                    <div className='page1Donaldson-container'>
                        <div className='slide-content-D'>
                            <Link to="/Donaldson" rel="noreferrer" className='active-link-D-GD'>
                                filtre, desprafuire industriala
                            </Link>
                        </div>
                        <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                    </div>
                </div>
                <div className='containsPage2  slide slide-top'>
                    <div className='page2GardnerDenver-container'>
                        <div className='slide-content-GD'>
                            <Link to="/GardnerDenver" rel="noreferrer" className='active-link-D-GD'>
                                compresoare si retele de aer comprimat
                            </Link>
                        </div>
                        <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                    </div>
                </div>
            </div>
            {/* <div className='hundredpercent'> */}
                {/* <div className='c'>c</div> */}
                {/* if using image as background */}
                {/* <div className='mountains-img' style={{backgroundImage: `url(${backgrr})`, backgroundSize:'100%', backgroundRepeat: 'no-repeat', height: '200px', width: '90%'}}></div> */}
                {/* <img className='mountains' src={backgrr} alt="image not loaded"></img> */}
            {/* </div> */}
            <p className='title-on-homepage narrow-padding'>Tehnologie pentru <br/>un mediu mai curat</p>
            {/* <div className='ab'> */}
                {/* <div className='a'>aaaaaaaa</div> */}
                {/* <div className='b'>bbbbbbbb</div> */}
            {/* </div> */}
            <img src={Picture49} alt="image not loaded"></img>
            <p className='regular-text-important sulphur-font dark-green'>filtrare aer comprimat pana la nivel de sterilizare</p>
            <img src={Picture26} alt="image not loaded"></img>
            <p className='regular-text-important sulphur-font dark-green'>colectoare de praf, fum si emulsii utilizate pentru purificarea mediului unde apar contaminanti in atmosfera degajati din procese tehnologice de productie</p>
        </main>
    )
}


// backup code before implementing sliding panels
{/* <main className='white-font'>
    <div className='DonaldsonAndGD margin-from-header home-page'>
        <div className='containsPage1 slide slide-top'>
            <div className='page1Donaldson-container'>
                <Link to="/Donaldson" rel="noreferrer" >
                    <img className='page1Donaldson' src={Dlogo} alt="Donaldson logo can.t be seen"></img>
                </Link>
            </div>
            <p className='home-titles underline-on-hover'>filtre, desprafuire industriala</p>
        </div>
        <div className='containsPage2'>
            <div className='page2GardnerDenver-container'>
                <Link to="/GardnerDenver" rel="noreferrer" >
                    <img className='page2GardnerDenver' src={GDlogo} alt="Gardner Denver logo can.t be seen"></img>
                </Link>
            </div>
            <p className='home-titles underline-on-hover'>compresoare si retele de aer comprimat</p>
        </div>
    </div>
</main> */}