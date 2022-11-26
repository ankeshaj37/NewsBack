import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { db } from './firebase'
import Navbar from './Navbar'

const Tranding = () => {
  const [show, setShow] = useState([])

  console.log(show);

  const [trandtitle, setTrandTitle] = useState('')
  const [trandimage, setTrandImage] = useState('')
  const [trandvideo, setTrandVideo] = useState('')

  useEffect(() => {
    db.collection('Trending').onSnapshot((tap) => (
      setShow(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))

  }, [])

  const add = () => {
    db.collection("Trending").add({ trandtitle: trandtitle, trandimage: trandimage, trandvideo: trandvideo })
    setTrandTitle("")
    setTrandImage('')
    setTrandVideo("")
  };

  const delt = (uid) => {
    db.collection('Trending').doc(uid).delete()
    console.log(uid);
  }

  return (
    <>
      <Navbar />
      <Dashboard/>

      <div className='ddd'>
      <h1>Tranding News</h1>
        <div className='boxx'>
        <label>TRANDING TITLE</label>
          <div>
            
          <input type='text'placeholder='Enter Title' value={trandtitle} onChange={(e) => setTrandTitle(e.target.value)} />
          </div>
          <label>TRANDING IMAGE</label>
          <div>
          <input type='text' placeholder='Enter Image url'  value={trandimage} onChange={(e) => setTrandImage(e.target.value)} />
            </div>
            <label>TRANDING VIDEO</label>
            <div>
            <input type='text'placeholder='Enter Video url' value={trandvideo} onChange={(e) => setTrandVideo(e.target.value)} />
            </div><br/>
          <button onClick={add}>Add</button>
        </div>
        

       <div className='bigadd col-lg-12 '>
       {show.map((e,i) => (
            <> 
           
             <div className='adddiv col-lg-3'>
              <p>{i+1}</p>
             <div> <p>{e.uid}</p></div>
            <div><p>Tranding Title : {e.data.trandtitle}</p></div>
            <div>Tranding Image : <img  className='imageadd' src={e.data.trandimage} alt={''} /></div>
      
            <div >Tranding Video : <video  className='videooo' width="320" height="240" controls>
                <source src={e.data.trandvideo} type="video/mp4" />
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

export default Tranding