import React from 'react'
import classes from './CSS/Login.module.scss'
// import image from './image1.png'

// const imageFol = new URL("./images/image1.png")

export default function Login() {
  return (
    <div className={classes.background1}>
      <div className={classes.login}>
        <form align='center'>
          <div className={classes.name}>
            <label htmlFor='name'>Username</label>
            <input type='text' id='name' name='username' />
          </div>
          <div className={classes.name}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
          </div>
        </form>
        {/* <img src={imageFol} /> */}
        {/* <img src={image} alt="logo" /> */}
      </div>
    </div>
  )
}