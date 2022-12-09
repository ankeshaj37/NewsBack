import React ,{useState,useEffect}from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import './App.css'
import Page from './Page'
import { auth } from './firebase'
import User  from './User'
import Profile from './Profile'
import Home from './Home'
import Dash from './Dash'
import Breking from './Breking'
import Live from './Live'
import News from './News'

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

      <Route path='/setting' element={<User/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dash/>}/>
      <Route path='/addnews' element={<Breking/>}/>
      <Route path='/live' element={<Live/>}/>
      <Route path='/total' element={<News/>}/>
      {/* ///////////// */}
   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App