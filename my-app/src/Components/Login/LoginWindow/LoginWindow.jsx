import React from 'react'
import s from './LoginWindow.module.css'
import { NavLink } from 'react-router-dom'

//todo страница forgottenPassword не разработана, вертска не соответствует макету.
const LoginWindow = (props) => {

    let onChangeName = (e) => {
        let name = e.target.value
        props.updateLoginText(name)
    }

    let onChangePassword = (e) => {
        let password = e.target.value
        props.updatePasswordText(password)
    }

    let onClick = () => {
        props.loginEnter()
    }

    return <div className={s.LoginWindow}>
        <div>Имя пользователя</div>
        <textarea onChange={onChangeName} value={props.textNameValue} placeholder={'Имя пользователя'}> </textarea>
        <div>Пароль</div>
        <div><NavLink to={'./forgottenPassword'}>Забыли пароль?</NavLink></div>
        <textarea onChange={onChangePassword} value={props.textPasswordValue} placeholder={'Пароль'}> </textarea>
        <div>
            <button onClick={onClick}>Войти</button>
        </div>
    </div>
}

export default LoginWindow