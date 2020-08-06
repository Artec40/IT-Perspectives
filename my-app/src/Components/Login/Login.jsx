import React from 'react'
import s from './Login.module.css'
import Title from './Title/Title'
import LoginWindow from './LoginWindow/LoginWindow'

const Login = () => {
    return <div className={s.Login}>
        <Title title={'Вход'}/>
        <LoginWindow/>
    </div>
}

export default Login