import React from 'react'
import classes from './CSS/Navbar.module.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className={classes.nav}>
          <div className={classes.logo}><Link to='/'>XYZ</Link></div>
          <div className={classes.list}>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/blogs'>Blogs</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <input type='text' placeholder='Search...' />
          </div>
          <div className={classes.sub}>
            <Link className={classes.log} to='/login'>Login</Link>
            <Link className={classes.log} to='/signup'>Signup</Link>
          </div>
        </div>
      </nav>
      {/* <img src='image1.png'></img> */}
    </div>
  )
}