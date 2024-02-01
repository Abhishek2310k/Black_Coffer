import React from 'react';
import './RadialGraph.scss';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const Topics = ({ data }) => {

  if (data.length === 0) return(
    <div className='no_data'>
      <img src='https://imgs.search.brave.com/xqN-9i5rMIcw-IqsygPM2bX8w2dy9s_H50wJOl2C6wQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdG9y/aWVzLmZyZWVwaWts/YWJzLmNvbS9zdG9y/YWdlLzQyMzUvNjQt/Tm8tZGF0YV9BcnRi/b2FyZC0xLnN2Zw.svg'
      alt='/' height={400} width={"100%"}/>
    </div>
  );

  const freq = {};
  data.forEach(element => {
    freq[element.topic] = (freq[element.topic] || 0) + element.relevance; // Increment frequency count for each topic
  });

  const freqData = Object.entries(freq).map(([topic, frequency]) => ({ topic, frequency }));

  return (
    <div className='topics'>
    <ResponsiveContainer width={730} height={400}>
      <BarChart data={freqData}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="topic" />
        <YAxis />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              var {topic ,frequency} = payload[0].payload;
              return (
                <div className="custom-tooltip" style={{
                backgroundColor:"rgba(0,0,0,0.5)",
                color:"white",
                padding:"10px",
                borderRadius:"25px"
                }}>
                  <p>Topic: {topic}</p>
                  <p>Relevance: {frequency}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Bar dataKey="frequency" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Topics;

// record freq of topics
// record freq of country for each topic
