import React from 'react'
import styles from './About.module.css'
import exampleImg1 from '../../../images/ghub-finder-example1-1.png'
import exampleImg2 from '../../../images/ghub-finder-example2-1.png'
import exampleImg3 from '../../../images/ghub-finder-example3-1.png'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>About G-Hub Finder</h1>
        <p className={styles.description}>This app was inspired by the Traversy Media <span><a href='https://www.udemy.com/course/modern-react-front-to-back/' target='_blank' rel="noreferrer">React Front To Back</a></span> Udemy  course.</p>
        <p className={styles.description}>Below are screen shots of Brad's version of the app.</p>
        <div className={styles.imgContainer}>
          <p>(Screen-shot: Traversy Media's original app)</p>
          <img src={exampleImg1} alt="screen shot"/>
        </div>
        <div className={styles.imgContainer}>
          <p>(Screen-shot: Traversy Media's original app)</p>
          <img src={exampleImg2} alt="screen shot"/>
        </div>
        <div className={styles.imgContainer}>
          <p>(Screen-shot: Traversy Media's original app)</p>
          <img src={exampleImg3} alt="screen shot"/>
        </div>
      </div>
    </>
  )
}

export default About
