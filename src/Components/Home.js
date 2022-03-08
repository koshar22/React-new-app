import React from 'react'
import Navbar from './Navbar'
import classes from './CSS/Home.module.scss'
// import Blog from './Blog'
// import Blogs from './Blogs'

export default function Home() {
  return (
    <div className={classes.home}>
        <Navbar/>
        {/* <Blog/> */}
        {/* <Blogs/> */}
    </div>
  )
}