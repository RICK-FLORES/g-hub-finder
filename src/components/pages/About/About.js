import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About G-Hub Finder</h1>
      <p className={styles.description}>App to search Github users</p>
    </div>
  )
}

export default About
