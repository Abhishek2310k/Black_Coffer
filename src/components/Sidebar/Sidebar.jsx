import React from 'react'
import './Sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='title'><h1>BlackCoffer</h1></div>
        <div className='item'><a href='#form'><HomeIcon/>Form</a></div>
        <div className='item'><a href='#intensity'><InsightsIcon/>intensity</a></div>
        <div className='item'><a href='#radialgraph'><InsightsIcon/>Relevance</a></div>
        <div className='item'><a href='#likelihood'><InsightsIcon/>Likelihood</a></div>
        <div className='item'><a href='#topics'><InsightsIcon/>Frequency</a></div>
        <div className='item'><a href='#combination'><InsightsIcon/>Summary Graph</a></div>
        <div className='item'><a href='#explore'><SearchIcon/>Explore</a></div>
        <div className='item'><a href='#favourates'><FavoriteIcon/>Favourates</a></div>
        <div className='item'><a href='#settings'><SettingsIcon/>Settings</a></div>
    </div>
  )
}

export default Sidebar


// topic intensity relevance likelihood country 

// region city and year are left 