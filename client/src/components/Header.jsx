import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render () {
    const userLinks = (
      <ul>
        <li className='btn btn-primary'>Logout</li>
      </ul>
    )
    const guestLinks = (
      <div className='guestLinks'>
        <Link to='/register' className='btn btn-primary'>Sign up</Link>
        <Link to='/login' className='btn btn-primary'>Login</Link>
      </div>
    )
    const {isAuthenticated} = this.props
    return (
      <div className='header row text-center align-bottom'>
        <div className='col-sm-3'>
          <Link
            to='/new'
            className='btn btn-primary'>
            New Ask
          </Link>
        </div>
        <div className='col-sm-6'>
          <h1>Communikey 🔑</h1>
        </div>
        <div className='col-sm-3'>
          {isAuthenticated ? userLinks : guestLinks}
        </div>
      </div>
    )
  }
}

export default Header