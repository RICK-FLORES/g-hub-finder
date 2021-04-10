import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


const Navbar = ({ icon, title }) => {

    return (
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
        <i className='fab fa-github'></i> G-Hub Finder
        </h1>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}><Link to="/"><i className="fas fa-home"></i></Link></li>
          <li className={styles.linkItem}><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }

export default Navbar
