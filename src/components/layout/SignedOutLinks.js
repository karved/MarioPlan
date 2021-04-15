import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><a href='/signup'>Signup</a></li>
        <li><a href='/signin'>Login</a></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks