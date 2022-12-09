import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { signOut } from "firebase/auth";
import { auth } from './firebase'

const Dashboard = () => {


  const Logout = async () => {
    await signOut(auth);
 
  }
console.log(Logout);

  return (

    <>
      <Navbar />
      <div className='container-fluid'>
      <div className=' insaidnav row'>
            <ul className='ulss'>
            <li className='lii'>
              <Link to="/">Home</Link>
              </li>

              <li className='lii'>
              <Link  onClick={Logout} >Logout</Link>
              </li>
              
            </ul>  
          </div>
      </div>
          
    </>
  )
}

export default Dashboard