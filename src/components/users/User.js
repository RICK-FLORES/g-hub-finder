import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

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
      <Link to='/' className='btn btn-light'>Go Back</Link>
      <div className="card grid-2">
        <div className="all-center">
          <img 
            src={avatar_url} 
            className='round-img' 
            alt="" 
            style={{ width: '150px' }} 
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && <>
            <h3>Bio</h3>
            <p>{bio}</p>
          </>}
          <a href={html_url} className='btn btn-dark my-1'>View Github</a>
          <ul>
            <li>
              {login && <>
                <strong>Username: </strong> {login}
              </>}
            </li>
            <li>
              {login && <>
                <strong>Company: </strong> {company}
              </>}
            </li>
            <li>
              {login && <>
                <strong>Website: </strong> {blog}
              </>}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Repos: {public_repos}</div>
        <div className="badge badge-dark">Gists: {public_gists}</div>
      </div>
      <h2 style={{textAlign: 'center'}}>Most Recent Repositories</h2>
      <Repos repos={repos} />
    </>
  )
}

export default User
