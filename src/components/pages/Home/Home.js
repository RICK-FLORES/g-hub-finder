import React from 'react'
import Search from '../../users/Search/Search'
import Users from '../../users/Users/Users'
import './Home.css'


const Home = () => (
      <>
        <Search />
        <Users />
        <div className='bgImageContainer'>
            <div className='bgImage'></div>
        </div>
      </>
  )

export default Home
