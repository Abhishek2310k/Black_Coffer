import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const FunnelChart = ({ data }) => {

  if (data.length === 0) return(
    <div className='no_data'>
      <img src='https://imgs.search.brave.com/xqN-9i5rMIcw-IqsygPM2bX8w2dy9s_H50wJOl2C6wQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzQyMzUvNjQt/Tm8tZGF0YV9BcnRi/b2FyZC0xLnN2Zw.svg'
      alt='/' height={400} width={"100%"}/>
    </div>
  );

  return (
    <div className='funnel_chart' style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width='100%' height='100%'>
        <ScatterChart>
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          <XAxis dataKey='country' />
          <YAxis dataKey='likelihood' />
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
          <Scatter name='A school' data={data} fill='#8884d8' />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelChart;
