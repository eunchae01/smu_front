import React from 'react';
import './App.css';
import Header from './components/Header';
import './components/nav.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Champion from './pages/Chamipon';
import Complex from './pages/Complex';
import Item from './pages/Item';
import Leader from './pages/Leader';
import Nav from './components/Nav';
import Search from './components/Search';
import Openteam from './components/Openteam';

function App() {
    return (
        <>
            <div className='relative'>
                <Router>
                    <Nav />
                    <Header />
                    <Switch>
                        <Route path='/' component={Home} exact={true} />
                        <Route path='/user' component={User} />
                        <Route path='/champion' component={Champion} />
                        <Route path='/line' component={Search} />
                        <Route path='/complex' component={Complex} />
                        <Route path='/item' component={Item} />
                        <Route path='/leader' component={Leader} />
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default App;
