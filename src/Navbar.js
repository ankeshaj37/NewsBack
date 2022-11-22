import React from 'react'
import { auth } from './firebase'
import { signOut } from "firebase/auth";
import { Link } from 'react-router-dom';


const Navbar = () => {


  const Logout = async () => {
    await signOut(auth);

  }
  return (
    <>
      <div className=' navs container'>


        <div className=' nav row'>
          <div className='dash col-lg-8'>
            <Link to='/'>Home</Link>
            <div className='lik'><Link to='/dashboard'>Dashboard</Link></div>
            <div className='lik'><Link to='/setting'>Setting</Link></div>
            <div className='lik'><Link to='/profile'>Profile</Link></div>
            <div className='lik'><Link to='/about'>About us</Link></div>
        
            <button className='logout' onClick={Logout}>Logout</button>
          </div>
          <div className='flaxx col-lg-4'>
            <h1>Admin Panal</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar