import React from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/style.css';
const urlChart = "http://localhost:8080/stat/"


class Charts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={ user: this.props.match.params.id, data: [] };
  }

  componentDidMount = async() => {
    const response = await fetch(urlChart+this.props.match.params.id);
    const data = await response.json();
    //console.log(data)
    this.setState({data})
  }


  render(){

    const data = Array.from(this.state.data);

    return (
      <div> 
      <div> TEXT CHART</div>
      <h2>{this.props.match.params.id}</h2>
      <h2>{urlChart+this.props.match.params.id}</h2>
      
      <ul>
      {data.map((item, i) => (
          
          <li key={i} >
          
          {item.page_views} " " {item.clicks}
          </li>
      ))
      }
      </ul>
      </div> 
  );
  }

}

export default Charts;
