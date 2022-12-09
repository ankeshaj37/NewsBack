import React, { useState } from 'react'
import { auth } from './firebase';
import{signInWithEmailAndPassword }from "firebase/auth";

const Page = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    
    

    const log = async() => {
       try{
       const user = await signInWithEmailAndPassword(auth,email, password)
       console.log(user);
       }catch(error){
            console.log(error);
            setEmail('')
            setPassword('')
       }
    }
   
    return (
        <>

        <div className='bigbox'>
        <div className='box'>
       <label>Email</label><input className='inp' placeholder='Enter Admin Email'  value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        <label>Password</label><input  className='inp' placeholder='Enter Passward' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/> 
        <br/>
            <button className='butt' onClick={log}>Login</button>
           
       </div>
        </div>
           
        </>
    )
}

export default Page