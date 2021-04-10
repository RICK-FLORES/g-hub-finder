import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'
import styles from './Users.module.css'


const Users = () => {
  const githubContext = useContext(GithubContext)
  const { users, loading } = githubContext
    if(loading) {
      return <Spinner />
    } else {
      return (
        <div className={styles.container}>
          {users.map(user => {
            return <ul className={styles.usersList}><li className={styles.usersItem}><UserItem key={user.id} user={user} /></li></ul> 
          })}
        </div>
      )
    }
  }

  
export default Users
