import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import About from './components/About';

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