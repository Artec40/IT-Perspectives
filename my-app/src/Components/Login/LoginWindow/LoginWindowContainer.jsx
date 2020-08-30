import React from 'react'
import LoginWindow from './LoginWindow'
import {
    loginActionCreator,
    onTextNameChangeActionCreator,
    onTextPasswordChangeActionCreator
} from '../../../redux/login-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        textNameValue: state.loginPage.textName,
        textPasswordValue: state.loginPage.textPassword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginEnter: () => {
            dispatch(loginActionCreator())
        },
        updateLoginText: (text) => {
            dispatch(onTextNameChangeActionCreator(text))
        },
        updatePasswordText: (text) => {
            dispatch(onTextPasswordChangeActionCreator(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow)