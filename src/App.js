import React ,{useState,useEffect}from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Breking from './Breking'
import {onAuthStateChanged} from 'firebase/auth'
import './App.css'
import Page from './Page'
import { auth } from './firebase'
import Dashboard from './Dashboard'
import User  from './User'
import Profile from './Profile'
import About from './About'
import Home from './Home'
import Bignews from './Bignews'

const App = () => {
  

  const [first, setFirst] = useState("")
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setFirst(currentUser)
   
  });
  }, [])
  

  return (

    <>
   
    <BrowserRouter>
    <Routes>

      {/* /-/-/-/----//-/-/-/-/- */}

      {!first? <Route path='/' element={<Page/>}/>:
      <>
      <Route path='/' element={<Home/>}/>
      </>}

       {/* --//--//-/-/-/--/-/-/-/ */}

      <Route path='setting' element={<User/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      {/* ///////////// */}
      <Route path='breking' element={<Breking/>}/>
      <Route path='bignews' element={<Bignews/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App