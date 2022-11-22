import React ,{useEffect, useState}from 'react'
import { db } from './firebase'
import Navbar from './Navbar'

const Breking = () => {
   const [show, setShow] = useState([])
   console.log(show);
    const [title, setTitle] = useState('')

    const [image, setImage] = useState('')
    const [video, setVideo] = useState('')

   useEffect(() => {
    db.collection('Brekingnews').onSnapshot((tap)=>(
        setShow(tap.docs.map((e)=>(e.data())))
    ))
 
   }, [])
   
    const add =()=>{
        db.collection("Brekingnews").add({title,image,video})
        setTitle("")
        setVideo('')
        setImage("")
    };
   
    const delt =()=>{

    }
  return (
    <>
    <Navbar/>
   
     <div className='ddd'>
       <div>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
        <input type='text' value={video} onChange={(e)=>setVideo(e.target.value)}/>
       </div>
       <button onClick={add}>add</button>

       <div>
         {show.map((e)=>(
          <>
          <p>{e.title}</p>
          <img src={e.image}/>
          <video width="320" height="240" controls>
  <source src={e.video} type="video/mp4"/>

  Your browser does not support the video tag.
</video>
<button onClick={delt}>delet</button>
          </>
         ))}
       </div>

     </div>
    </>
   
  )
}

export default Breking