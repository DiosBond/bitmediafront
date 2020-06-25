import React from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/style.css';
const urlChart = "localhost:8080/"


class Charts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={ user: id, data: [] };
  }

  componentDidMount = async() => {
    const response = await fetch(urlChart);
    const data = await response.json() 
    //console.log(data)
    this.setState({data})
  }


  render(){

    const data = Array.from(this.state.data);

    return (
      <div> 
      <div> TEXT CHART</div>
      <h2>{this.props.match.params.id}</h2>
      </div> 
  );
  }

}

export default Charts;
