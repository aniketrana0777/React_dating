import React,{useState}from 'react'
import './Singup.css'
function Singup() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const collectData=()=>{
        console.log( name,email,password);
    }
  return (
    <div className='rigister' >
    <center>
    <h1>REGISTER</h1>
    <input className='inputBox' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
    <input className='inputBox' type='email'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'></input>
    <input className='inputBox' type='password'value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'></input>
    <button onClick={collectData} className='appbutton' type='button'>Sing Up</button>
    </center>
    </div>
  )
}

export default Singup