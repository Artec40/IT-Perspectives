import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import Link from 'next/link'
import s from './Header.module.scss'
import {AppStateType} from "../../../redux/redux-store";
import { UserType } from '../../../types/types';

type PropsType ={
    user: UserType
}
const Header: React.FC<PropsType> = ({user}) => {
    const logo: string = useSelector((state: AppStateType) => state.header.companyLogo.logo)
    const userStatus: boolean = useSelector((state: AppStateType) => state.loginPage.currentUser.isAuth)
    useEffect(() => {
    }, [userStatus])
    return (
        <nav className={s.Header}>
            <Link href={'/login'}>
                <img src={logo}/>
            </Link>
            <div className={s.user && s.item}>{user.userName}</div>
            <Link href={'/'}>
                <a className={s.about_us && s.item}>О НАС</a>
            </Link>
            <Link href={'/services'}>
                <a className={s.services_price && s.item}>УСЛУГИ И ЦЕНООБРАЗОВАНИЕ</a>
            </Link>
            <Link href={'/contacts'}>
                <a className={s.contacts && s.item}>КОНТАКТЫ</a>
            </Link>
        </nav>
    )
}

export default Header