import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Dashboard = () => {

  return (

    <>
      <Navbar />
      <div className='ddd'>

        <div className='dashss container'>
          <div className=' insaidnav row'>
            <div className='col-lg-2'>
              <Link to="/breking">Post News</Link>
            </div>

            <div className='col-lg-2'>
              <Link to="/live">Live News</Link>
            </div>

            <div className='col-lg-2'>
              <Link to="/merquree">Merquree</Link>
            </div>

          </div>







        </div>
      </div>

    </>
  )
}

export default Dashboard