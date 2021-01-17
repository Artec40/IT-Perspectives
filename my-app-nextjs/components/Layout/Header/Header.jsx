import React from 'react'
import Link from 'next/link'
import s from './Header.module.scss'

const Header = (props) => {
    return (
        <nav className={s.Header}>
            <img src={props.logo}/>
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