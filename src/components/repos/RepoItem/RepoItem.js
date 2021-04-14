import React from 'react'
import PropTypes from 'prop-types'
import styles from './RepoItem.module.css'


const RepoItem = ({ repo }) => {
  return (
    <>
        <ul className={styles.repoList}>
          <li className={styles.repoListItem} key={repo.id}>
            <a href={repo.html_url} className={styles.repoLinkContainer} target='_blank' rel="noreferrer">
              <h3 >
                {repo.name}
              </h3>
            </a>
          </li>
        </ul>
    </>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
