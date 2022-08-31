
import React, { useState, useEffect } from 'react';
import './App.css';
import { csv } from 'd3';
import BarChart from './Components/BarChart';
import Dropdown from './Components/Dropdown';
const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('GenericData.csv').then(setData);
  }, []);
  const [xaxis,setXAxis] = useState('First');
  const [yaxis,setYAxis] = useState('Total');

  return (
    <div className="App">
      <Dropdown label={'X-axis'} 
      onChange={event => {
      setXAxis(event.target.value);
      }}
      />
      <Dropdown label={'Y-axis'} 
        onChange={
        event => {
          setYAxis(event.target.value);
        }}
      />
      <BarChart data={data} xaxis={xaxis} yaxis={yaxis}/>
    </div>
  );
}

export default App;
