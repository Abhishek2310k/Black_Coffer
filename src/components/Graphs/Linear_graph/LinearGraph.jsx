import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
import './LinearGraph.scss';

const LinearGraph = ({ data }) => {

  if (data.length === 0) return(
    <div className='no_data'>
      <img src='https://imgs.search.brave.com/xqN-9i5rMIcw-IqsygPM2bX8w2dy9s_H50wJOl2C6wQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzQyMzUvNjQt/Tm8tZGF0YV9BcnRi/b2FyZC0xLnN2Zw.svg'
      alt='/' height={400} width={"100%"}/>
    </div>
  );

  const filteredData = data.filter(item => item.country !== '');

  return (
    <div className='linear_graph-container'>
      <div className='linear_graph'>
      <ResponsiveContainer width='100%' height={400} margin={{ top: 0, left: 0, right: 5, bottom: 0 }}>
        <LineChart data={filteredData}>
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              var {likelihood, topic ,country,start_year,end_year} = payload[0].payload;
              if(country === "") {
                country = "unknown";
              }
              if(end_year === ""){
                end_year = "NA"
              }
              if(start_year === ""){
                start_year = "Unknown"
              }
              return (
                <div className="custom-tooltip" style={{
                backgroundColor:"rgba(0,0,0,0.5)",
                color:"white",
                padding:"10px",
                borderRadius:"25px"
                }}>
                  <p>Topic: {topic}</p>
                  <p>Country: {country}</p>
                  <p>Likelihood: {likelihood}</p>
                  <p>Start Year: {start_year}</p>
                  <p>End Year: {end_year}</p>
                </div>
              );
            }
            return null;
          }}
        />
            <Legend />
          <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
          {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
          <XAxis dataKey="country"/>
          <YAxis />
        </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LinearGraph;

// represents Intensity of each topic in each country 