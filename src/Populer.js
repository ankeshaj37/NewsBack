import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { db } from './firebase'
import Navbar from './Navbar'


const Populer = () => {
  const [get, setGet] = useState([])

  console.log(get);

  const [poptitle, setPoptitle] = useState('')
  const [popimage, setPopimage] = useState('')
  const [popvideo, setPopvideo] = useState('')

  useEffect(() => {
    db.collection('populer').onSnapshot((tap) => (
      setGet(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))

  }, [])

  const add = () => {
    db.collection("populer").add({ poptitle:poptitle,popimage:popimage,popvideo:popvideo})
    setPoptitle("")
    setPopimage("")
    setPopvideo("")
  };

  const delt = (uid) => {
    db.collection('populer').doc(uid).delete()
    console.log(uid);
  }

  return (
    <>
      <Navbar />
      <Dashboard/>
     
      <div className='ddd'>
      <h1>Populer News</h1>
        <div className='boxx'>
        <label>POPULER TITLE</label>
          <div>
            
          <input type='text'placeholder='Enter Title' value={poptitle} onChange={(e) => setPoptitle(e.target.value)} />
          </div>
          <label>POPULER IMAGE</label>
          <div>
          <input type='text' placeholder='Enter Image url'  value={popimage} onChange={(e) => setPopimage(e.target.value)} />
            </div>
            <label>POPULER VIDEO</label>
            <div>
            <input type='text'placeholder='Enter Video url' value={popvideo} onChange={(e) => setPopvideo(e.target.value)} />
            </div><br/>
          <button onClick={add}>Add</button>
        </div>
        

       <div className='bigadd col-lg-12 '>
       
       {get.map((e,i) => (
            <> 
           
             <div className='adddiv col-lg-3'>
              <p>{i+1}</p>
             <div> <p>{e.uid}</p></div>
            <div><p>title : {e.data.poptitle}</p></div>
            <div>image : <img  className='imageadd' src= {e.data.popimage} /></div>
      
            <div > video : <video  className='videooo' width="320" height="240" controls>
                <source src={e.data.popvideo} type="video/mp4" />
              </video></div>
          
             <div className='butadd'><button onClick={() => delt(e.uid)}>delete</button></div>
             </div>
            </>
          ))}
       </div>
          
        </div>

      
    </>

  )
}

export default Populer