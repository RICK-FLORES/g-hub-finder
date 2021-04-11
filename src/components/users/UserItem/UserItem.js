import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './UserItem.module.css'


const UserItem = ({user: { login, avatar_url, }}) => {
    return (
      <div className={styles.card}>
        <img 
          src={avatar_url} 
          alt="profile" 
          className={styles.img}
          style={{ width: '60px' }}
        />
        <h3 className={styles.userName}>
          {login}
        </h3>

        <div>
          <Link to={`/user/${login}`} className={styles.btn}>View User</Link>
        </div>
      </div>
    )
  }

  UserItem.propTypes = {
    user: PropTypes.object.isRequired
  }

export default UserItem
