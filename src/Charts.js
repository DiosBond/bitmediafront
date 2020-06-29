import React from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      {/*
      <h2>{this.props.match.params.id}</h2>
      <h2>{urlChart+this.props.match.params.id}</h2> */}
      
      {/* <ul>
      {data.map((item, i) => (
          
          <li key={i} >
          
          {item.page_views} " " {item.clicks}
          </li>
      ))
      }
      </ul> */}

      <LineChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="page_views" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
      </LineChart>

      </div> 
  );
  }

}

export default Charts;
