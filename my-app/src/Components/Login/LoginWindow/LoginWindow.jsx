import React from 'react'
import s from './LoginWindow.module.css'
import { NavLink } from 'react-router-dom'

//todo страница forgottenPassword не разработана
const LoginWindow = () => {
    return <div className={s.LoginWindow}>
        <div>Имя пользователя</div>
        <textarea placeholder={'Имя пользователя'}> </textarea>
        <div>Пароль</div>
        <div><NavLink to={'./forgottenPassword'}>Забыли пароль?</NavLink></div>
        <textarea placeholder={'Пароль'}> </textarea>
        <div><button> Войти</button></div>
    </div>
}

export default LoginWindow