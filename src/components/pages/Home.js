import React from 'react'
import Search from '../users/Search'
import Users from '../users/Users'
import './Home.css'


const Home = () => (
      <>
        <Search />
        <div className='container'>
            <div className='bgImage'></div>
        </div>
        <Users />
      </>
  )

export default Home
