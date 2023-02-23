import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Header from './components/Header';
import About from './components/About';
import Utile from './components/Utile';
import Contact from './components/Contact';
import Donaldson from './components/Donaldson';
import GardnerDenver from './components/GardnerDenver';
// import DonaldsonAndGD from './components/HomePage';
import HomePage from './components/HomePage';
import Logo from './components/Logo';

// styling
import './assets/App.css';

// const App = () => (
//     <div>
//         <h1>it works!</h1>
//     </div>
//     );

function App() {
    // TEST
    const [showHomePage, setShowHomePage] = useState(false);

    function handleLogoClick() {
      setShowHomePage(true);
    }
    // TEST

    return (
        <div className='home-page'> 
        {/*tre sa schimb className ca homepage este un component separat. App.js nu este HomePage ! */}
            <Router>
                <Header />
                {/* <DonaldsonAndGD /> */}
                <main>
                    {/* TEST */}
                    <header className="App-header">
                        <Link to="/" onClick={handleLogoClick}>
                            <Logo />
                        </Link>
                    </header>
                    {/* TEST */}

                    <Switch>
                        <Route exact path="/">
                            {showHomePage ? <HomePage /> : null}
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