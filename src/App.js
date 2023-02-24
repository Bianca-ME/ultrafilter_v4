import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Header from './components/Header';
import About from './components/About';
import Utile from './components/Utile';
import Contact from './components/Contact';
import Donaldson from './components/Donaldson';
import GardnerDenver from './components/GardnerDenver';
import HomePage from './components/HomePage';
import Logo from './components/Logo';

// styling
import './assets/App.css';

function App() {
    const [showHomePage, setShowHomePage] = useState(false);

    function handleLogoClick() {
      setShowHomePage(true);
    }

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
                    <Switch>
                        <Route exact path="/">
                            {showHomePage ? <HomePage /> : <HomePage />}
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
                        <Route path='/Donaldson'>
                            <Donaldson />
                        </Route>
                        <Route path='/GardnerDenver'>
                            <GardnerDenver />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App;