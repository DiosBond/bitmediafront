import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/style.css';


class Charts extends React.Component {

  render(){
    return (
      <div> 
      <div> TEXT CHART</div>
      <h2>{this.props.match.params.id}</h2>
      </div> 
  );
  }

}

export default Charts;
