import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../layout/Spinner/Spinner'
import Repos from '../../repos/Repos/Repos'
import GithubContext from '../../../context/github/githubContext'
import styles from './User.module.css'
import './User.css'

const User = ({ match }) => {
  const githubContext = useContext(GithubContext)

  const { user, getUser, loading, getUserRepos, repos } = githubContext

  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login) 
    // eslint-disable-next-line
  }, []) 


  const { 
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
  } = user

  if(loading) return <Spinner />

  return (
    <>
      <div className='bgImageContainer'>
        <div className='bgImage'></div>
      </div>
      <div className={styles.goBackBtnContainer}>
        <Link to='/' className={styles.goBackBtn}>Go Back</Link>
      </div>
      <div className={styles.userCard}>
        <div className={styles.container}>
          <img 
            src={avatar_url} 
            className={styles.img} 
            alt="" 
            style={{ width: '150px' }} 
          />
          <h1 className={styles.userName}>{name}</h1>
          <p className={styles.location}>Location: {location}</p>
        </div>
        <div className={styles.bioContainer}>
          {bio && <>
            <h3 className={styles.bioHeader}>Bio</h3>
            <p className={styles.bio}>{bio}</p>
          </>}
          <a href={html_url} className={styles.viewGitHubBtn} target='_blank' rel="noreferrer">View Github</a>
          <ul className={styles.userInfo}>
            <li className={styles.userName}>
              {login && <>
                <strong>Username: </strong> {login}
              </>}
            </li>
            <li className={styles.company}>
              {login && <>
                <strong>Company: </strong> {company}
              </>}
            </li>
            <li className={styles.website}>
              {login && <>
                <strong>Website: </strong> {blog}
              </>}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.miscInfo}>
        <div className={styles.miscInfoItems}>
          <p className={styles.followers}>Followers </p><span className={styles.count}>{followers}</span>
        </div>
        <div className={styles.miscInfoItems}>
          <p className={styles.following}>Following </p><span className={styles.count}>{following}</span>
        </div>
        <div className={styles.miscInfoItems}>
          <p className={styles.repos}>Repos </p><span className={styles.count}>{public_repos}</span>
        </div>
        <div className={styles.miscInfoItems}>
          <p className={styles.gists}>Gists</p><span className={styles.count}>{public_gists}</span>
        </div>
      </div>
      <h2 className={styles.repoHeader}>Most Recent Repositories</h2>
      <Repos repos={repos} className={styles.repos} />
    </>
  )
}

export default User
