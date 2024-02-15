import React from 'react'
 import me from '../Componentes/image/Free love-bro.png'
 import Navcard from './Navcard'
import { NavLink } from 'react-router-dom'
function IMG() {
  return (
    <div className="container">
    <div className='row'>
    <div className='col-md-6 col-lg-6'>
    <div>
    <h1 className='title'>
    <b>
    <br></br>
    START SOMETHING
    <br></br>
    NEW <img src='https://cdn-icons-gif.flaticon.com/11870/11870965.gif' height={70}/>
    <br></br>
    COME AND GET SOME.
    </b></h1>
    <br></br>
    <div className='links d-flex'>
    <NavLink  class="nav-link" to="/product"b ><button ><h4><b>Get start</b></h4></button></NavLink>
    <NavLink class="nav-link" to="/product"><h4>Book a Meeting</h4></NavLink>
    </div>
   
    </div>
    </div>
    <div className='col-md-6 col-lg-6'>
    <img src={me} height={500} width={600}/>
    </div>
    </div>
    <Navcard></Navcard>
    
    </div>
    
   
  )
}

export default IMG