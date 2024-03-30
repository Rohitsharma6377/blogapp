import React from 'react'
import '../login/Register.css'
import Add from './n3.jpg'
import { Link } from 'react-router-dom'
function Register() {
  return (
 <div className="register">
    <div className="registerform">
        <span className="logo">TECH BLOG</span>
        <span className="title">HOW ARE YOU ..?</span>
        <form>
        <input type="text" placeholder='Your Full Name ' />
        <input type="email" placeholder='Email address' />
        <input type="password" placeholder='passsword' />
         <input  style={{display:'none'}} type="file"  id='file'/>
         <label htmlFor="file"><img src={Add} alt="" />
         <span>Add an Avatar</span></label>
            <button>sign up</button>
        </form>
       
        <p>have an account ? <span>
            Register</span></p>
    </div>
 </div>
  )
}

export default Register;
