import React, { useState, useEffect } from 'react';
import { Redirect, Switch, BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

// main components
import NotFound from './components/NotFound';
import Logo from './components/Logo';
import HomePage from './components/HomePage';
import SideNavBar from './components/sidenavlibrary/SideNavBar';

// pages:
// components Donaldson
import CompresoareD from './pages/Donaldson/CompresoareD';

// components GD
import CompresoareGD from './pages/Gardner-Denver/Compresoare/CompresoareGD';

// styling
import './assets/CSS/App.css';

function App() {
    // JAVASCRIPT
    const [showHomePage, setShowHomePage] = useState(false);

    function handleLogoClick() {
        setShowHomePage(true);
    }

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
        <div className='toberelative'>
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
                    </header>
                    <SideNavBar />
                    <Switch>
                        <Route exact path="/">
                            {showHomePage ? <HomePage /> : <HomePage />}
                        </Route>
                        <Route exact path='/'>
                            <HomePage />
                        </Route>
                        <Route path='/about'>
                            {/* <About /> */}
                        </Route>
                        <Route path='/utile'>
                            {/* <Utile /> */}
                        </Route>
                        <Route path='/contact'>
                            {/* <Contact /> */}
                        </Route>
                        <Route exact path='/Donaldson'>
                            {/* <Donaldson /> */}
                        </Route>
                        <Route exact path='/GardnerDenver/compresoare'>
                            <CompresoareGD />
                        </Route>
                        <Route exact path='/Donaldson/compresoare'>
                            <CompresoareD />
                        </Route>

                        {/* the 404 page must be tested */}
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Redirect to="/404" />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App;