import React, { useEffect, useState } from 'react'
import Brekdash from './Brekdash'
import Dashboard from './Dashboard'
import { db } from './firebase'
import Navbar from './Navbar'


const News = () => {
  const [breks, setBrek] = useState([])
  const [big, setBig] = useState([])
  const [pop, setPop] = useState([])
  const [trend, setTrend] = useState([])
  const [top, setTop] = useState([])



  useEffect(() => {
   db.collection('brekingnews').onSnapshot(tap=>(
    setBrek(tap.docs.map((e)=>(e.data())))
   ))
   db.collection('bignews').onSnapshot(tap=>(
    setBig(tap.docs.map((e)=>(e.data())))
   ))
   db.collection('populernews').onSnapshot(tap=>(
    setPop(tap.docs.map((e)=>(e.data())))
   ))
   db.collection('topnews').onSnapshot(tap=>(
    setTop(tap.docs.map((e)=>(e.data())))
   ))
   db.collection('trendingnews').onSnapshot(tap=>(
    setTrend(tap.docs.map((e)=>(e.data())))
   ))

  }, [])
  

  
  

    
  return (
    <>
    <Navbar/>
    <Dashboard/>
      <>
      <div class=" ddd container">
  <div class="row">
   <h2>Total News</h2>
  </div><br/><br/>
  <Brekdash/>
</div>

      </>
      
    </>
    
  )
}

export default News