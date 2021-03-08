import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import s from './Layout.module.scss'
import {AppStateType} from "../../redux/redux-store";
import { getAccounts } from '../../redux/login-reducer'
import { UserType } from '../../types/types'

const Layout = ({children}) => {
    const user: UserType = useSelector((state: AppStateType) => state.loginPage.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAccounts())
    },[])

    return (
        <div className={s.wrapper}>
            <Header user={user}/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
