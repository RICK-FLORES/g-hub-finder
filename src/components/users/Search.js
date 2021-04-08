import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import styles from './Search.module.css'


const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if(text === '') {
      alertContext.setAlert('Please enter something', 'light')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

  const onChange = e => {
    setText(e.target.value)
  }
  
  
  return (
    <div className={styles.container}>
      <form 
        className={styles.form}
        onSubmit={onSubmit}
      >
        <input
          className={styles.txtInput}
          type='text' 
          name='text' 
          placeholder='Search Users...' 
          value={text}
          onChange={onChange}
        />
        <input 
          type='submit' 
          value='Search' 
          className={styles.searchBtn}
        />         
        {
          githubContext.users.length > 0 &&
            <button 
              className={styles.clearBtn} 
              onClick={githubContext.clearUsers}>
                Clear
              </button>
          }
      </form>
    </div>
  )
}

export default Search
