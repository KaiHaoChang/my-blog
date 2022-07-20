import React from 'react'
import {auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Login = ({setIsAuth}) => {
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // 之後登入後確認是否登入中
      localStorage.setItem('isAuth', true)

      // 登入後確認是否登入中
      setIsAuth(true)

      // 登入後可以回到Home畫面  
      navigate('/')
    })
  }

  return (
    <div className="login-container">
      <h1 className='login-title'>Sign in with Google to continue</h1>
      <button className='login-btn' onClick={signInWithGoogle} >Google Sign In</button>
    </div>
  )
}

export default Login