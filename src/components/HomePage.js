import React from 'react';
// import { NavLink, Link} from 'react-router-dom'; ca nu mai folosit NavLink
import { Link } from 'react-router-dom';

// images
import Dlogo from '../assets/donaldson-logo.jpg';
import GDlogo from '../assets/gardner-denver-logo.jpg';

// styling
import '../assets/DonaldsonAndGD.css';

export default function Header() {



    return (
        <main className='white-font'>
            <div className='DonaldsonAndGD margin-from-header home-page'>
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
            <div>
                <p className='title-on-homepage'>Tehnologie pentru un mediu mai curat</p>
            </div>
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