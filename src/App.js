import React, { useState } from 'react';
import { Redirect, Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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


import Breadcrumbs from './components/Breadcrumbs';

// styling
import './assets/App.css';

function App() {
    // JAVASCRIPT
    const [showHomePage, setShowHomePage] = useState(false);

    function handleLogoClick() {
      setShowHomePage(true);
    }

    // TEST >


    // TEST <

    // END OF JAVASCRIPT

    return (
        <div className='home-page'> 
        {/*tre sa schimb className ca homepage este un component separat. App.js nu este HomePage ! */}

            <Router>
                <main>
                    <header className="App-header">
                        <Link to="/" onClick={handleLogoClick}>
                            <Logo />
                        </Link>
                    </header>
                    <Header />
                    {/* <Breadcrumbs /> */}
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

                        {/* /GardnerDenver/C_portabile */}

                        <Route path="/404">
                            <NotFound/>
                            </Route>
                        <Redirect to="/404" />
                        {/* niu merge not found */}
                        {/* <Route path='*' component={NotFound}/> */}
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App;