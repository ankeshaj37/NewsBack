import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { db } from './firebase'

import Navbar from './Navbar'

const Breking = () => {

  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])
  const [video, setVideo] = useState([])
  const [olddata, setOlddata] = useState([])


  const post = () => {
    db.collection('ankesh').doc('TGVzpLpkYRPCi5JJ4hV2').set({ title, image, video })

   
    setVideo("")
    db.collection('sumkesh').add({ title: title, image: image, video: video })
    db.collection('treding').add({ title: title, image: image, video: video })
    db.collection('populer').add({ title: title, image: image, video: video })
    db.collection('news').add({ title: title, image: image, video: video })
    db.collection('snews').add({ title: title, image: image, video: video })
  }



  useEffect(() => {
    db.collection('sumkesh').onSnapshot(tap => (
      setOlddata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))
  }, [])


  const del = (uid) => {
    db.collection('sumkesh').doc(uid).delete()
  }


  return (
    <>
      <Navbar />
      <Dashboard />
      <div className='ddd'>
        <h1>All News</h1>
        <div className='boxx'>
          <label>News Title</label>
          <div>
            <input type='text' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <label>News Image</label>
          <div>
            <input type='text' placeholder='Enter Image url' value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <label>News Video</label>
          <div>
            <input type='text' placeholder='Enter Video url' value={video} onChange={(e) => setVideo(e.target.value)} />
          </div><br />
          <button onClick={post}>Post</button>
        </div>
        <>
          <div class="container">
            {olddata.map((e) => (
              <div class="row">
                <div class=" adddiv col-sm-8">
                  <p>{e.data.title} </p>
                  <img className='imageadd' src={e.data.image} alt={''} />
                  <video className='videooo' width="320" height="240" controls>
                    <source src={e.data.video} type="video/mp4" /></video>
                  <button onClick={() => del(e.uid)}>delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </>

  )
}

export default Breking