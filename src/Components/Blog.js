import React from 'react'
import Navbar from './Navbar'
import classes from './CSS/Blog.module.scss'

export default function Blog() {
  return (
    <div className={classes.blog}>
      <Navbar />
      <div className={classes.box}>
        <img src="image/image3.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat itaque aperiam quidem nostrum, delectus voluptatum sit amet id rem voluptates voluptas odio tenetur, quos reiciendis sint cupiditate eius nobis esse? Eos ea ratione eligendi, maxime perspiciatis fugit voluptatum nesciunt. Excepturi sapiente consectetur nostrum, alias eligendi magnam amet, ex architecto quos explicabo voluptas. Quos ut consequuntur iure amet doloribus temporibus maiores molestias explicabo vero facere eius animi repudiandae nostrum, iste eos accusantium ab voluptatibus nesciunt? Quibusdam ea fugit alias adipisci rem inventore, voluptas eveniet maiores sit cumque commodi iure est illum. Libero ad ipsam alias unde vel magni enim illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad recusandae, quaerat dolores aliquam accusamus cupiditate molestiae eum ducimus a suscipit, quas repellendus. Error in dicta vero necessitatibus fugiat provident minima dolores eligendi voluptates, eos tempore sapiente soluta sunt deserunt tenetur suscipit, sit nihil fuga esse cum itaque dolorem maxime.</p>
        <p>Written By: Ram</p>
      </div>
    </div>
  )
}