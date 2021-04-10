import React from 'react'
import Search from '../users/Search'
import Users from '../users/Users'
import './Home.css'


const Home = () => (
      <>
        <Search />
          <div className='bgImage'></div>
        <Users />
      </>
  )

export default Home
