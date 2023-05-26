import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Homecrud = () => {
  return (
    <section id={style.nav}>
        <Link to="/createusers">CREATE-STUDENT</Link>
        <Link to="/users">STUDENTS</Link>
    </section>
  )
}

export default Homecrud