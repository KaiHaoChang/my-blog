import React from 'react'
import { Link } from 'react-router-dom'
import {auth, provider} from '../firebase-config'
import { signOut } from 'firebase/auth'

const nav = ({isAuth, setIsAuth}) => {


  const signOutGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = './login'
    })
  }

  return (
    <nav className="nav-container">
      <Link to='/'>Home</Link>
        {isAuth ? 
        <>
          <Link to='/createpost'>Posting</Link>
          <button className='sign-out-btn' onClick={signOutGoogle}>Sign out</button> 
        </> :
          <Link to='login'>Sign in</Link>
      }
    </nav>
  )
}

export default nav