import React from 'react'
import LoginWindow from './LoginWindow'
import {
    loginActionCreator,
    onTextNameChangeActionCreator,
    onTextPasswordChangeActionCreator
} from '../../../login-reducer'


const LoginWindowContainer = (props) => {
    let store = props.store

    let enter = () => {
        store.dispatch(loginActionCreator())
    }

    let onTextNameChange = (text) => {
        store.dispatch(onTextNameChangeActionCreator(text))
    }

    let onTextPasswordChange = (text) => {
        store.dispatch(onTextPasswordChangeActionCreator(text))
    }
    return <LoginWindow textNameValue={store._state.login.textName}
                        textPasswordValue={store._state.login.textPassword}
                        loginEnter={enter}
                        updateLoginText={onTextNameChange}
                        updatePasswordText={onTextPasswordChange}/>

}

export default LoginWindowContainer