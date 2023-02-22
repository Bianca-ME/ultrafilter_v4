import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import About from './components/About';
import Utile from './components/Utile';
import Contact from './components/Contact';

// const App = () => (
//     <div>
//         <h1>it works!</h1>
//     </div>
//     );

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/utile'>
                        <Utile />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App;