import React from 'react';
//import logo from './logo.svg';
//import './css/App.css';
import './css/style.css';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './view/Main';
import Chart from './Charts';
import Stat from './Stat';
import Head from './view/Header';
import Footer from './view/Footer';
import Nav from './view/Nav';


function App() {
  return (
    <div>
    <Head />
    <Nav />
    <Router>

    <div>
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/stat/:page' component={Stat}></Route>
      <Route path='/user/:id' component={Chart}></Route>
    </Switch>

    </div>
    </Router>

    <Footer />
    
    </div>
     
  );
}


export default App;
