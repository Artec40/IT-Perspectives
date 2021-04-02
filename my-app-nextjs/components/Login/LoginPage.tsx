import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useSelector, useDispatch} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import s from './LoginPage.module.scss'
import {loginActions} from "../../redux/login-actions";

const LoginPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const textNameValue: string = useSelector((state: AppStateType) => state.loginPage.textName)
    const textPasswordValue: string = useSelector((state: AppStateType) => state.loginPage.textPassword)
    const isAuth: boolean = useSelector((state: AppStateType) => state.loginPage.currentUser.isAuth)

    useEffect(() => {
        if (isAuth) router.push('/')
    },[isAuth])

    let onChangeName = (e) => {
        dispatch(loginActions.changeName(e.target.value))
    }
    let onChangePassword = (e) => {
        dispatch(loginActions.changePassword(e.target.value))
    }
    let onClick = () => {
        dispatch(loginActions.changeCurrentUser(textNameValue, textPasswordValue))
    }

    return <div className={s.Login}>
        <div className={s.Title}>
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