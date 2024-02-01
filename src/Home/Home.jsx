import React from 'react'
import './Home.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import Filter_form from '../components/Filter_form/Filter_form'
const Home = ({data}) => {

  return (
    <div className='home'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='right'>
        <div className='column'>
          <div className='content' >
            <section id='form'>
              <Filter_form data={data}/>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
