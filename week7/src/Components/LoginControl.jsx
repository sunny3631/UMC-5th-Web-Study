import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginControl ({isLoggedIn,setIsLoggedIn}) {
    const navigate = useNavigate();

  return (
    <div className='Logincontrol' >
        <button style = {{borderRadius : '50px', display : 'flex'}} className='loginButton' 
        onClick={()=>{
            if (isLoggedIn) {
            navigate('/login');}
            else{
            navigate('/')
            setIsLoggedIn(true)}}
        }>
            {isLoggedIn ? '로그인' : '로그아웃'}
        </button>
        <p style = {{color : 'white', display : 'flex'}} className='loginMessage'>
            {isLoggedIn ? '로그인 해주세요!':'환영합니다!' }
        </p>
    </div>
  )
}


