import React ,{useEffect, useState}from 'react'
import { db } from './firebase'
import Navbar from './Navbar'

const Bignews = () => {
   
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [video, setVideo] = useState('')

   useEffect(() => {
    db.collection('news').onSnapshot((tap)=>(
        setTitle(tap.docs.map((e)=>(e.data())))
    ))
 
   }, [])
   
    const add =()=>{
        db.collection("Bignews").add({title,image,video})
        setTitle("")
        setVideo('')
        setImage("")
    };
   
    
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

     </div>
    </>
   
  )
}

export default Bignews