import React, { useEffect, useState } from 'react'
import Dash from './Dash'
import { db } from './firebase'
import Navbar from './Navbar'

const Live = () => {
  const [show, setShow] = useState([])

  console.log(show);

  const [livetitle, setLivetitle] = useState('')
  const [liveimage, setLiveimage] = useState('')
  const [livevideo, setLivevideo] = useState('')

  useEffect(() => {
    db.collection('live').onSnapshot((tap) => (
      setShow(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))

  }, [])

  const add = () => {
    db.collection("live").add({ livetitle: livetitle, liveimage: liveimage, livevideo: livevideo })
    setLivetitle("")
    setLiveimage('')
    setLivevideo("")
  };

  const delt = (uid) => {
    db.collection('live').doc(uid).delete()
    console.log(uid);
  }

  return (
    <>
      <Navbar />
<Dash/>
      <div className='ddd'>
      <h1>Live News</h1>
        <div className='boxx'>
        <label>LIVE VIDEO LINK</label>
          <div>
            
          <input type='text'placeholder='Enter Live Link' value={livetitle} onChange={(e) => setLivetitle(e.target.value)} />
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
            <div><p>Live Link : {e.data.livetitle}</p></div>
           
          
             <div className='butadd'><button onClick={() => delt(e.uid)}>delete</button></div>
             </div>
            </>
          ))}
       </div>
          
        </div>

      
    </>

  )
}

export default Live