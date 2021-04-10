import React from 'react'
import PropTypes from 'prop-types'
import styles from './RepoItem.module.css'


const RepoItem = ({ repo }) => {
  return (
    <>
        <ul className={styles.repoList}>
          <li className={styles.repoListItem} key={repo.id}>
            <h3 className={styles.repoLinkContainer}>
              <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
            </h3>
          </li>
        </ul>
    </>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
