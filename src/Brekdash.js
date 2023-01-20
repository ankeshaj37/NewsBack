import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { db } from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Brekdash = () => {
const [brek, setBrek] = useState([])
const [big, setBig] = useState([])
const [pop, setPop] = useState([])
const [tred, setTred] = useState([])
const [top, setTop] = useState([])

useEffect(() => {
  db.collection('brekingnews').onSnapshot(tap=>(
    setBrek(tap.docs.map((e)=>({uid:e.id,data:e.data()})))
  ))
}, [])

useEffect(() => {
    db.collection('bignews').onSnapshot(tap=>(
        setBig(tap.docs.map((e)=>({uid:e.id,data:e.data()})))
    ))

  }, [])
  useEffect(() => {
    db.collection('populernews').onSnapshot(tap=>(
        setPop(tap.docs.map((e)=>({uid:e.id,data:e.data()})))
    ))
  }, [])
  useEffect(() => {
    db.collection('trendingnews').onSnapshot(tap=>(
        setTred(tap.docs.map((e)=>({uid:e.id,data:e.data()})))
    ))
  }, [])
  useEffect(() => {
    db.collection('topnews').onSnapshot(tap=>(
        setTop(tap.docs.map((e)=>({uid:e.id,data:e.data()})))
    ))
  }, [])

  const delet =(uid)=>{
    db.collection('brekingnews').doc(uid).delete()
    db.collection('bignews').doc(uid).delete()
    db.collection('populernews').doc(uid).delete()
    db.collection('trendingnews').doc(uid).delete()
    db.collection('topnews').doc(uid).delete()
  
  }
  
 

  return (
    <>
    
    <Tabs>
    <TabList>
      <Tab>Breking News <br/><div className='len'>{brek.length}</div></Tab>
      <Tab>Big News<br/><div className='len'>{big.length}</div></Tab>
      <Tab>Populer News <br/><div className='len'>{pop.length}</div></Tab>
      <Tab>Trending News<br/><div className='len'>{tred.length}</div></Tab>
      <Tab>Top News<br/><div className='len'>{top.length}</div></Tab>
    </TabList>

    <TabPanel>
    <div class="row">
              {brek.map((e) => (
                <>
                  <div class=" adddiv col-lg-3">
                    <div>
                      <p>{e.data.title} </p>
                      <div> <img className='imageadd' src={e.data.image} alt={''} /></div>
                      <div><video className='videooo' width="320" height="240" controls>
                        <source src={e.data.video} type="video/mp4" /></video></div>
                        <div className='bb'>
                        <DeleteIcon className='de' onClick={()=>delet(e.uid)}></DeleteIcon>
                       <BorderColorIcon  className='de'></BorderColorIcon>
                        </div>
                       
                    </div>
                  </div>
                  
                </>
              ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div class="row">
              {big.map((e) => (
                <>
                  <div class=" adddiv col-lg-3">
                    <div>
                      <p>{e.data.title} </p>
                      <div> <img className='imageadd' src={e.data.image} alt={''} /></div>
                      <div><video className='videooo' width="320" height="240" controls>
                        <source src={e.data.video} type="video/mp4" /></video></div>
                        <div className='bb'>
                        <DeleteIcon className='de' onClick={()=>delet(e.uid)}></DeleteIcon>
                       <BorderColorIcon  className='de'></BorderColorIcon>
                        </div>
                    </div>
                  </div>
                </>
              ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div class="row">
              {pop.map((e) => (
                <>
                  <div class=" adddiv col-lg-3">
                    <div>
                      <p>{e.data.title} </p>
                      <div> <img className='imageadd' src={e.data.image} alt={''} /></div>
                      <div><video className='videooo' width="320" height="240" controls>
                        <source src={e.data.video} type="video/mp4" /></video></div>
                        <div className='bb'>
                        <DeleteIcon className='de' onClick={()=>delet(e.uid)}></DeleteIcon>
                       <BorderColorIcon  className='de'></BorderColorIcon>
                        </div>
                    </div>
                  </div>
                </>
              ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div class="row">
              {tred.map((e) => (
                <>
                  <div class=" adddiv col-lg-3">
                    <div>
                      <p>{e.data.title} </p>
                      <div> <img className='imageadd' src={e.data.image} alt={''} /></div>
                      <div><video className='videooo' width="320" height="240" controls>
                        <source src={e.data.video} type="video/mp4" /></video></div>
                        <div className='bb'>
                        <DeleteIcon className='de' onClick={()=>delet(e.uid)}></DeleteIcon>
                       <BorderColorIcon  className='de'></BorderColorIcon>
                        </div>
                    </div>
                  </div>
                </>
              ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div class="row">
              {top.map((e) => (
                <>
                  <div class=" adddiv col-lg-3">
                    <div>
                      <p>{e.data.title} </p>
                      <div> <img className='imageadd' src={e.data.image} alt={''} /></div>
                      <div><video className='videooo' width="320" height="240" controls>
                        <source src={e.data.video} type="video/mp4" /></video></div>
                        <div className='bb'>
                        <DeleteIcon className='de' onClick={()=>delet(e.uid)}></DeleteIcon>
                       <BorderColorIcon  className='de'></BorderColorIcon>
                        </div>
                    </div>
                  </div>
                </>
              ))}
    </div>
    </TabPanel>
  </Tabs>
    </>
  )
}

export default Brekdash