import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


const Navbar = () => {

    return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
          <i className='fab fa-github'></i> G-Hub Finder
          </h1>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}><Link to="/"><i className="fas fa-home"></i> <span>Home</span></Link></li>
            <li className={styles.linkItem}><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar
