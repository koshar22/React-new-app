import React from 'react'
import classes from './CSS/Login.module.scss'

export default function Signup() {
  return (
    <div className={classes.background}>
      <div className={classes.login}>
      <form>
        <div className={classes.name}>
          <label htmlFor='uname'>Username</label>
          <input id='uname' type='text' name='username'></input>
        </div>
        <br />
        <div className={classes.name}>
          <label htmlFor='passwd'>Password</label>
          <input id='paaawd' type='password' name='password'></input>
        </div>
        <br />
        <div className={classes.name}>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email'></input>
        </div>
        <br />
        <div className={classes.name}>
          <label htmlFor='name'>Full name</label>
          <input id='name' type='text' name='name'></input>
        </div>
        <br />
        <div className={classes.submit}>
          <input type='submit' name='submit' value='SUBMIT DATA'></input>
        </div>
      </form>
    </div>
    </div>
  )
}
