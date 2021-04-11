import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import Alert from './components/layout/Alert/Alert'
import User from './components/users/User/User'
import Home from './components/pages/Home/Home'
import NotFound from './components/pages/404/NotFound'
import About from './components/pages/About/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css'

const App = () => {
    return (
      <GithubState>
        <AlertState>
          <Router>
          <div className='App'>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route 
                  exact 
                  path='/' 
                  component={Home}
                />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          </Router>
        </AlertState>
      </GithubState>
    )
  }

export default App
