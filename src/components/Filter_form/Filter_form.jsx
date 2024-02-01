import React, { useState } from 'react'
import './Filter_form.scss'
import LinearGraph from '../Graphs/Linear_graph/LinearGraph';
import { useEffect } from 'react';
import RadialGraph from '../Graphs/Radial_graph/RadialGraph';
import FunnelChart from '../Graphs/FunnelChart/FunnelChart';
import Topics from '../Graphs/Topics/Topics';
import Combination from '../Graphs/Combination/Combination';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Filter_form = ({data}) => {
    const [end_year,setEnd_year] = useState('');
    const [topic,setTopic] = useState('');
    const [sector,setSector] = useState('');
    const [region,setRegion] = useState('');
    const [start_year,setStartyear] = useState('');
    const [country,setCountry] = useState('');
    const [pest,setPest] = useState('');
    const [source,setSource] = useState('');
    const [final_end_year,setFinalnd_year] = useState('');
    const [final_topic,setFinalTopic] = useState('');
    const [final_sector,setFinalSector] = useState('');
    const [final_region,setFinalRegion] = useState('');
    const [final_start_year,setFinalStartyear] = useState('');
    const [final_country,setFinalCountry] = useState('');
    const [final_pest,setFinalPest] = useState('');
    const [final_source,setFinalSource] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleClick = () => {
        setFinalCountry(country);
        setFinalnd_year(end_year);
        setFinalTopic(topic);
        setFinalRegion(region);
        setFinalSector(sector);
        setFinalStartyear(start_year);
        setFinalPest(pest);
        setFinalSource(source);

    }
    
    useEffect(() => {
        const updatedData = data.filter(item => {
            // Include the item in the filtered data if end_year is empty
            if ((end_year === '' || item.end_year == end_year) &&
            (topic === ''|| item.topic == topic) &&
            (sector === ''|| item.sector == sector) && 
            (start_year === ''|| item.start_year == start_year) && 
            (final_region === '' || item.region == final_region)&&
            (final_pest === '' || item.pest == final_pest) &&
            (final_source === '' || item.source == final_source))
             {
                return true;
            }
            return false;
        });
        setFilteredData(updatedData);
    }, [final_sector,final_topic,final_end_year, data,final_start_year,final_region,final_country,final_pest]);


  return (
    <div className='result'>
        <div className='filter_form'>
            <section className='main_form'>
            <h1>Please Enter The Filters Needed</h1>
            <form action='/' method='get'>
                <label for='end_year'>End Year</label>
                <input type='tect' id='end_year' value={end_year} onChange={(e)=>{setEnd_year(e.target.value)}}/>
                <label for='topics'>Topic</label>
                <input type='tect' id='topic' value={topic} onChange={(e)=>{setTopic(e.target.value)}}/>
                <label for='sector'>Sector</label>
                <input type='tect' id='sector' value={sector} onChange={(e)=>{setSector(e.target.value)}}/>
                <label for='start_year'>Start Year</label>
                <input type='tect' id='start_year' value={start_year} onChange={(e)=>{setStartyear(e.target.value)}}/>
                <label for='region'>Region</label>
                <input type='tect' id='region' value={region} onChange={(e)=>{setRegion(e.target.value)}}/>
                <label for='country'>Country</label>
                <input type='tect' id='country' value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
                <label for='pest'>Pestle</label>
                <input type='tect' id='pest' value={pest} onChange={(e)=>{setPest(e.target.value)}}/>
                <label for='source'>Source</label>
                <input type='tect' id='source' value={source} onChange={(e)=>{setSource(e.target.value)}}/>

                <a href='#intensity' onClick={()=>handleClick()}>Filter</a>
            </form>
            </section>
        </div>
        <div className='graphs'>
            <section className='graph' id='intensity'>
                <div className='col1'>
                <h1>Intensity</h1>
                <LinearGraph data={filteredData}/>
                </div>
                <div className='col2'>
                <a href='#radialgraph'><ArrowDownwardIcon fontSize='large'/></a>
                    <a href='#'><ArrowUpwardIcon fontSize='large'/></a>
                </div>
            </section>
            <section className='graph' id='radialgraph'>
            <div className='col1'>
            <h1>Relevance of Each topic</h1>
            <RadialGraph data={filteredData}/></div>
            <div className='col2'>
                    <a href='#likelihood'><ArrowDownwardIcon fontSize='large'/></a>
                    <a href='#intensity'><ArrowUpwardIcon fontSize='large'/></a>
                </div>
            </section>
            <section className='graph' id='likelihood'>
            <div className='col1'>
            <h1>Likelihood</h1>
            <FunnelChart data={filteredData}/></div>
            <div className='col2'>
            <a href='#topics'><ArrowDownwardIcon fontSize='large'/></a>
                    <a href='#radialgraph'><ArrowUpwardIcon fontSize='large'/></a>
                </div></section>
            <section className='graph' id='topics'>
            <div className='col1'>
            <h1>Frequency of each Topic</h1>
            <Topics data={filteredData}/>
            </div>
            <div className='col2'>
            <a href='#combination'><ArrowDownwardIcon fontSize='large'/></a>
                    <a href='#likelihood'><ArrowUpwardIcon fontSize='large'/></a>
                </div>
            </section>
            <section className='graph' id='combination'>
            <div className='col1'>
            <h1>Graph summarising the Data</h1>
            <Combination data={filteredData}/>
            </div>
            <div className='col2'>
                    <div style={{height:"65px"}}></div>
                    <a href='#topics'><ArrowUpwardIcon fontSize='large'/></a>
                </div>
            </section>
        </div>
        {/* <section className='graph' id='radial'><RadialGraph data={filteredData}/></section> */}
    </div>
        
  )
}

export default Filter_form


// i can get the data from the form by pressing the onSubmit button then

// 1-> creating the filtered data in 

{/* <section className='graphs' id='likelihood'>likelihood</section> */}