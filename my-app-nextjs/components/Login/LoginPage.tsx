import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import s from './LoginPage.module.scss'
import {loginActions} from "../../redux/login-actions";

const LoginPage = () => {
    const textNameValue: string = useSelector((state: AppStateType) => state.loginPage.textName)
    const textPasswordValue: string = useSelector((state: AppStateType) => state.loginPage.textPassword)
    const dispatch = useDispatch()

    let onChangeName = (e) => {
        let name = e.target.value
        dispatch(loginActions.changeName(name))
    }
    let onChangePassword = (e) => {
        let password = e.target.value
        dispatch(loginActions.changePassword(password))
    }
    let onClick = () => {
        dispatch(loginActions.changeUserStatus(textNameValue, textPasswordValue))
    }

    return <div className={s.Login}>
        <div className={s.Title}>
            {console.log(useSelector((state:AppStateType)=>state.loginPage.users))}
            <div className={s.text}>Вход</div>
        </div>

        <div className={s.LoginWindow}>
            <div>Имя пользователя</div>
            <textarea onChange={onChangeName} value={textNameValue} placeholder={'Имя пользователя'}> </textarea>
            <div>Пароль</div>
            <div>Забыли пароль?</div>
            <textarea onChange={onChangePassword} value={textPasswordValue} placeholder={'Пароль'}> </textarea>
            <div>
                <button onClick={onClick}>Войти</button>
            </div>
        </div>
    </div>
}

export default LoginPage