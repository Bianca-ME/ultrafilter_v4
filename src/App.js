import React from 'react';
import Switch from 'react-router-dom';

// components
import Header from './components/Header';
import About from './components/About';
// nume prea lung?
// import Donaldson-and-GardnerDenver-pages from ''; 

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
                </Switch>
            </main>
        </Router>
    )
}

export default App;