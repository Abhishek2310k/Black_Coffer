import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LineChart = ({ data }) => {

  if (data.length === 0) return(
      <div className='no_data'>
        <img src='https://imgs.search.brave.com/xqN-9i5rMIcw-IqsygPM2bX8w2dy9s_H50wJOl2C6wQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzQyMzUvNjQt/Tm8tZGF0YV9BcnRi/b2FyZC0xLnN2Zw.svg'
        alt='/' height={400} width={"100%"}/>
      </div>
    );

  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <RechartsLineChart width={1200} height={400} data={data} className='bg-white'>
        <XAxis dataKey="name" />
        <YAxis />
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
        {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
        <Legend />
        <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
        <Line type="monotone" dataKey="likelihood" stroke="#0088FE" />
        <Line type="monotone" dataKey="relevance" stroke="#FFBB28" />
        {/* <Line type="monotone" dataKey="value4" stroke="#FF8042" /> */}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
