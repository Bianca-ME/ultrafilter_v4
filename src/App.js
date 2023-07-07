import React, { useState, useEffect } from 'react';
import { Redirect, Switch, BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import LocomotiveScroll from 'locomotive-scroll';

// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// components
import NotFound from './components/NotFound';
import Header from './components/Header';
import About from './components/About';
import Utile from './components/Utile';
import Contact from './components/Contact';
import Donaldson from './components/Donaldson';
import HomePage from './components/HomePage';
import Logo from './components/Logo';
// components Donaldson
import Compresoare from './pages/Donaldson/Compresoare';
import Presiuni4_13bari from './pages/Donaldson/Compresoare/Presiuni4_13bari';
import Presiuni20_400bari from './pages/Donaldson/Compresoare/Presiuni20_400bari';
// components GD
import GardnerDenver from './pages/Gardner-Denver/GardnerDenver';
import CompresoareGD from './pages/Gardner-Denver/Compresoare/CompresoareGD';
import C_cu_excentric_si_cu_paleti_centrifugali from './pages/Gardner-Denver/Compresoare/C_cu_excentric_si_cu_paleti_centrifugali';
import PDF_page_C_cu_excentric_si_cu_paleti_centrifugali from './pages/Gardner-Denver/Compresoare/PDF_page_C_cu_excentric_si_cu_paleti_centrifugali';
import Cabinete_dentare_compresoare_fara_ungere from './pages/Gardner-Denver/Compresoare/Cabinete_dentare_compresoare_fara_ungere';
import C_pt_scafandrii_aer_respirabil from './pages/Gardner-Denver/Compresoare/C_pt_scafandrii_aer_respirabil';
import C_cu_piston_debite_mici from './pages/Gardner-Denver/Compresoare/C_cu_piston_debite_mici';
import C_portabile from './pages/Gardner-Denver/Compresoare/C_portabile';
import ESM_23_29 from './pages/Gardner-Denver/Compresoare/ESM_23_29';
import ESM_30_45 from './pages/Gardner-Denver/Compresoare/ESM_30_45';
import ESM_55_75 from './pages/Gardner-Denver/Compresoare/ESM_55_75';
import ESM_90_132 from './pages/Gardner-Denver/Compresoare/ESM_90_132';
import ESM_VS_160_290 from './pages/Gardner-Denver/Compresoare/ESM_VS_160_290';
import FM_7_22 from './pages/Gardner-Denver/Compresoare/FM_7_22';
import C_oil_free_tip_scroll from './pages/Gardner-Denver/Compresoare/C_oil_free_tip_scroll';


// import Breadcrumbs from './components/Breadcrumbs';

// styling
import './assets/App.css';

function App() {
    // JAVASCRIPT
    const [showHomePage, setShowHomePage] = useState(false);

    function handleLogoClick() {
        setShowHomePage(true);
    }

    // TEMPORARILY DISABLE LOCOMOTIVE SCROLL
    // useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('[data-scroll-container]'),
    //         smooth: true,
    //         offset: ["10%", 0],
    //         smartphone: {
    //             smooth: true,
    //             multiplier: 1 //nu stiu ce face multiplier
    //         },
    //         tablet: {
    //             smooth: true,
    //             multiplier: 1
    //         }
    //     });

    // // Disable the default browser scrolling behavior
    // const disableScroll = (event) => {
    //     event.preventDefault();
    // };
    // window.addEventListener('mousewheel', disableScroll, { passive: false });
    // window.addEventListener('touchmove', disableScroll, { passive: false });

    // return () => {
    //     // Remove event listeners when component unmounts
    //     window.removeEventListener('mousewheel', disableScroll);
    //     window.removeEventListener('touchmove', disableScroll);
    // };

    // }, []);
    // END OF JAVASCRIPT

    return (


        <div className='astacaredaeroarea try-repair toberelative'>
            {/* IN MOM IN CARE TREC AICI data-scroll-container SCROLLUL VA MERGE IN TOATE PAGINILE, DAR NAV-UL NU MAI RAMANE FIXAT SUS. NU STIU CE SA FAC
            PARE CA LA HOME PAGE NU II PASA CA LOCOMOTIVE SCROLL A FOST DECLARAT IN APP */}
            {/*tre sa schimb className ca homepage este un component separat. App.js nu este HomePage ! */}

            <Router>
                <main >
                    <header className="App-header">
                        <Link to="/" onClick={handleLogoClick}>
                            <Logo />
                        </Link>
                        <div className='ribbon-right fixed-position'>
                            <p>tel: +40 371 152 977</p>
                        </div>

                        <nav >
                            <ul className='menu'>
                                {/* <li>
                                    <Link to="/" onClick={handleLogoClick} className='visited-link'>
                                        <Logo />
                                    </Link>
                                </li> */}
                                <li>
                                    <NavLink className='visited-link' to='/web-design' activeClassName="active-link">Despre Ultrafilter</NavLink>
                                </li>
                                <li>
                                    <NavLink className='visited-link' to='/photography' activeClassName="active-link">Donaldson</NavLink>
                                </li>

                                <li>
                                    <NavLink className='visited-link' to='/GardnerDenver' activeClassName="active-link">Gardner Denver</NavLink>
                                </li>
                                <li>
                                    <NavLink className='visited-link' to='/GardnerDenver/compresoare' activeClassName="active-link">Compresoare</NavLink>
                                </li>
                                <li>
                                    <NavLink className='visited-link' to='/contact' activeClassName="active-link">Linkuri Utile</NavLink>
                                </li>
                                <li>
                                    <NavLink className='visited-link' to='/vision' activeClassName="active-link">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Header /> */}
                    {/* <Breadcrumbs /> */}
                    <div data-scroll-container>
                        <Switch>
                            <Route exact path="/">
                                {showHomePage ? <HomePage /> : <HomePage />}
                            </Route>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                            <Route path='/utile'>
                                <Utile />
                            </Route>
                            <Route path='/contact'>
                                <Contact />
                            </Route>
                            <Route exact path='/Donaldson'>
                                <Donaldson />
                            </Route>
                            <Route exact path='/GardnerDenver'>
                                <GardnerDenver />
                            </Route>
                            <Route exact path='/GardnerDenver/compresoare'>
                                <CompresoareGD />
                            </Route>
                            <Route exact path='/Donaldson/compresoare'>
                                <Compresoare />
                            </Route>
                            <Route path='/Donaldson/compresoare/Presiuni4_13bari'>
                                <Presiuni4_13bari />
                            </Route>
                            <Route path='/Donaldson/compresoare/Presiuni20_400bari'>
                                <Presiuni20_400bari />
                            </Route>
                            <Route exact path='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali'>
                                <C_cu_excentric_si_cu_paleti_centrifugali />
                            </Route>
                            <Route exact path='/GardnerDenver/C_cu_excentric_si_cu_paleti_centrifugali/PDF'>
                                <PDF_page_C_cu_excentric_si_cu_paleti_centrifugali />
                            </Route>
                            <Route exact path='/GardnerDenver/Cabinete_dentare_compresoare_fara_ungere'>
                                <Cabinete_dentare_compresoare_fara_ungere />
                            </Route>
                            <Route exact path='/GardnerDenver/C_pt_scafandrii_aer_respirabil'>
                                <C_pt_scafandrii_aer_respirabil />
                            </Route>
                            <Route exact path='/GardnerDenver/C_cu_piston_debite_mici'>
                                <C_cu_piston_debite_mici />
                            </Route>
                            <Route exact path='/GardnerDenver/C_portabile'>
                                <C_portabile />
                            </Route>
                            <Route exact path='/GardnerDenver/ESM_23_29'>
                                <ESM_23_29 />
                            </Route>
                            <Route exact path='/GardnerDenver/ESM_30_45'>
                                <ESM_30_45 />
                            </Route>
                            <Route exact path='/GardnerDenver/ESM_55_75'>
                                <ESM_55_75 />
                            </Route>
                            <Route exact path='/GardnerDenver/ESM_90_132'>
                                <ESM_90_132 />
                            </Route>
                            <Route exact path='/GardnerDenver/ESM_VS_160_290'>
                                <ESM_VS_160_290 />
                            </Route>
                            <Route exact path='/GardnerDenver/FM_7_22'>
                                <FM_7_22 />
                            </Route>
                            <Route exact path='/GardnerDenver/C_oil_free_tip_scroll'>
                                <C_oil_free_tip_scroll />
                            </Route>

                            {/* /GardnerDenver/C_portabile */}

                            <Route path="/404">
                                <NotFound />
                            </Route>
                            <Redirect to="/404" />
                            {/* niu merge not found */}
                            {/* <Route path='*' component={NotFound}/> */}
                        </Switch>
                    </div>
                </main>
            </Router>
        </div>
    )
}

export default App;