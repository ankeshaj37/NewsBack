import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Dashboard = () => {

  return (

    <>
      <Navbar />
          <div className=' insaidnav row'>
            <ul className='ulss'>
            <li className='lii'>
              <Link to="/">Home</Link>
              </li>
              <li className='lii'>
              <Link to="/breking">Post News</Link>
              </li>
              <li className='lii'>
              <Link to="/">Live News</Link>
              </li>
              <li className='lii' >
              <Link to="/">Merquree</Link>
              </li>
            </ul>  
          </div>
    </>
  )
}

export default Dashboard