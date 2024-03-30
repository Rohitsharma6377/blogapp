import React from 'react'
import Home from '../../pages/blog/Home';
import Login from '../common/login/Login';

const Nav = () => {
  return (
    <div className="container">
        <h2 className="logo">TECH BLOG</h2>
        <div className="nav">
            <li className='navlist'>
                <ul><a href={Home}>Home</a></ul>
                <ul><a href={Login}>Login</a></ul>
                <ul>Logout</ul>
            </li>
            
        </div>
    </div>
  )
}

export default Nav;
