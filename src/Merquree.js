import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { db } from './firebase'
import Navbar from './Navbar'

const Merquree = () => {
  const [show, setShow] = useState([])

  console.log(show);

  const [mertitle, setMertitle] = useState('')
  const [merimage, setMerimage] = useState('')
  const [mervideo, setMervideo] = useState('')

  useEffect(() => {
    db.collection('Merquree').onSnapshot((tap) => (
      setShow(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))

  }, [])

  const add = () => {
    db.collection("Merquree").add({ mertitle: mertitle, merimage: merimage, mervideo: mervideo })
    setMertitle("")
    setMerimage('')
    setMervideo("")
  };

  const delt = (uid) => {
    db.collection('Merquree').doc(uid).delete()
    console.log(uid);
  }

  return (
    <>
      <Navbar />
      <Dashboard/>

      <div className='ddd'>
      <h1>Merquree Title</h1>
        <div className='boxx'>
        <label>MERQUREE TITLE</label>
          <div>
            
          <input type='text'placeholder='Enter Merquree Title' value={mertitle} onChange={(e) => setMertitle(e.target.value)} />
          </div>
          <br/>
          <button onClick={add}>Add</button>
        </div>
        

       <div className='bigadd col-lg-12 '>
       {show.map((e,i) => (
            <> 
           
             <div className='adddiv col-lg-3'>
              <p>{i+1}</p>
             <div> <p>{e.uid}</p></div>
            <div><p>Merquree Title : {e.data.mertitle}</p></div>
            
          
             <div className='butadd'><button onClick={() => delt(e.uid)}>delete</button></div>
             </div>
            </>
          ))}
       </div>
          
        </div>

      
    </>

  )
}

export default Merquree