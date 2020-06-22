import React from 'react';
import logo from './logo.svg';
//import './css/App.css';
import './css/style.css';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Chart from './Charts';
import Stat from './Stat';

function App() {
  return (
    <Router>

<div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Stat/>
    <Switch>
      <Route exact path='/stat' component={Stat}></Route>
      <Route exact path='/chart' component={Chart}></Route>
    </Switch>

    </div>
    </Router>
    
    
  );
}

class Navigation extends React.Component {
  render(){
    return (
      <div>
          <ul>
            <li><a href='/'>Main</a></li>
            <li><a href='/stat'>Stat</a></li>
            <li><a href='/chart'>Chart</a></li>
          </ul>
      </div>
    )
  }
}
//<img src={logo} className="App-logo" alt="logo" />


export default App;
