import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


const Navbar = ({ icon, title }) => {

    return (
      <nav className={styles.navbar}>
        <h1>
        <i className={icon}></i> {title}
        </h1>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}><Link to="/">Home</Link></li>
          <li className={styles.linkItem}><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }

  Navbar.defaultProps = {
    title: 'G-Hub Finder',
    icon: 'fab fa-github' 
  }

  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }


export default Navbar
