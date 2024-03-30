import React from 'react'
import '../login/Register.css'
import Register from './Register';
function Login() {
  return (
 <div className="register">
    <div className="registerform">
        <span className="logo">TECH BLOG</span>
        <span className="title">Login</span>
        <form>
        <input type="email" placeholder='Email address' />
        <input type="password" placeholder='passsword' />
            <button>login</button>
        </form>
       
        <p> you don't have an account ? <span onClick={Register}>Register</span></p>
    </div>
 </div>
 )
}

export default Login;
