import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

const Dash = () => {


  return (
    <>
      <Navbar/>
      <Dashboard/>
      <div className='ddd'>
           <div className='dashh'>
            <Link to='/addnews'className='dashlink'>Add News </Link>
            <Link to='/live' className='dashlink' >Live News </Link>
            
           </div>
      </div>
   
    </>
  )
}

export default Dash