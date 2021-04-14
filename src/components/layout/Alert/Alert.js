import React, { useContext } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import styles from './Alert.module.css'
import './Alert.css'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext

  return (
    alert !== null && (
      <div className={styles.alertContainer} >
        <i className="fas fa-info-circle"></i> 
        <p className={styles.alertMsg}>{ alert.msg }</p>
      </div>
    )
  )
}

export default Alert
