import React, { useEffect, useState } from 'react'
import Dash from './Dash'
import { db } from './firebase'

import Navbar from './Navbar'

const Breking = () => {

  const [title, setTitle] = useState([])
  const [image, setImage] = useState([])
  const [video, setVideo] = useState([])
  const [olddata, setOlddata] = useState([])

  const post = () => {
    

    db.collection(select).add({ title: title, image: image, video: video })

    setTitle('')
    setImage('')
    setVideo('')

    
  }
      
  useEffect(() => {
    db.collection('brekingnews').onSnapshot(tap => (
      setOlddata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))

    db.collection('bignews').onSnapshot(tap => (
      setOlddata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))
    db.collection('populernews').onSnapshot(tap => (
      setOlddata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))
    db.collection('trendingnews').onSnapshot(tap => (
      setOlddata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))
    db.collection('topnews').onSnapshot(tap => (
      setOlddata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))
  }, [])

  const del = (uid) => {
    db.collection('brekingnews').doc(uid).delete()
    db.collection('bignews').doc(uid).delete()
    db.collection('populernews').doc(uid).delete()
    db.collection('trendingnews').doc(uid).delete()
    db.collection('topnews').doc(uid).delete()
  }

  const [select, setSelect] = useState([])

  

  return (
    <>
      <Navbar />
      <Dash />
      <div className='ddd'>
        <h1>All News</h1>
        <div className='boxx'>
          <div class="col-md-4">
            <div className='selecterdiv'>
              <select onChange={(e) => setSelect(e.target.value)} id="inputState" class="form-select" >
                <option selected>Choose News Category...</option>
                <option >brekingnews </option>
                <option>bignews</option>
                <option>populernews</option>
                <option >trendingnews</option>
                <option >topnews</option>
             
              </select> 
            </div>
          </div>
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
          <div>
            <input type='text' placeholder='Enter Details ' value={''} onChange={''} />
          </div><br />
          <button onClick={post}>Post</button>
        </div>
        <>
          <div class="container-fluid">
            <div class="row">
              {olddata.map((e) => (
                <>
                  <div class=" adddiv col-lg-3">
                    <div>
                      <p>{e.data.title} </p>
                      <div> <img className='imageadd' src={e.data.image} alt={''} /></div>
                      <div><video className='videooo' width="320" height="240" controls>
                        <source src={e.data.video} type="video/mp4" /></video></div>
                      <p> <button onClick={() => del(e.uid)}>delete</button></p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      </div>
    </>

  )
}

export default Breking