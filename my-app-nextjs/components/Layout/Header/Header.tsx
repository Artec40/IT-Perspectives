import React from 'react'
import {useSelector} from 'react-redux'
import Link from 'next/link'
import s from './Header.module.scss'
import {AppStateType} from "../../../redux/redux-store";

const Header = ({user}) => {
    const logo = useSelector((state: AppStateType) => state.header.companyLogo.logo)
    return (
        <nav className={s.Header}>
            <Link href={'/login'}>
                <img src={logo}/>
            </Link>
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