import React from 'react'
import s from './Login.module.css'
import Title from './Title/Title'
import LoginWindowContainer from './LoginWindow/LoginWindowContainer'

const Login = () => {
    return <div className={s.Login}>
        <Title title={'Вход'}/>
        <LoginWindowContainer/>
    </div>
}

export default Login