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
      <Dash />
      <div className='ddd'>
        <h1>All News</h1>
        <div className='boxx'>
          <div class="col-md-4">

            <select id="inputState" class="form-select">
              <option selected>Choose News Category...</option>
              <option>Breking News</option>
              <option>Trending News</option>
              <option>Populer News</option>
              <option>Letuse News</option>
            </select>
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
                <div class=" flax row">
                <div class=" adddiv col-lg-6">
             
                {olddata.map((e) => (
                <>
                  <p>{e.data.title} </p>
                  <img className='imageadd' src={e.data.image} alt={''} />
                  <video className='videooo' width="320" height="240" controls>
                    <source src={e.data.video} type="video/mp4" /></video>
                  <button onClick={() => del(e.uid)}>delete</button>
                  </>
               ))}
                </div>
              
                </div>
                </div>
             
             
          
    
{/* 
          <div class="row main-cont-wthree-2 py-5">

            <div class="col-lg-12 feature-grid-right mt-lg-0 mt-5">

              <div class="row call-grids-w3 justify-content-center">
               
                    <div class="col-md-4 col-6 col-sec">
                   
                      <div class="box-wrap">
                      {olddata.map((e) => (
                  <>
                        <div class="icon">
                          <img src={e.data.image} class="img-fluid" alt="" />
                        </div>
                        <div>
                          <video href={e.data.video}></video>
                        </div>
                        <h4>{e.data.title}</h4>
                        <button onClick={() => del(e.uid)}>delete</button>
                        </>
                ))}
                      </div>
                 
                    </div>
               
              </div>

            </div>

          </div> */}
        </>
      </div>
    </>

  )
}

export default Breking