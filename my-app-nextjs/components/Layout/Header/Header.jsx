import React from 'react'
import s from './Header.module.scss'

const Header = () => {
    return (
        <nav className={s.Header}>
{/*            <img src={props.logo}/>*/}
            <img src=''/>
            <nav className={s.about_us && s.item}>О НАС</nav>
            <nav className={s.services_price && s.item}>УСЛУГИ И ЦЕНООБРАЗОВАНИЕ</nav>
            <nav className={s.contacts && s.item}>КОНТАКТЫ</nav>
        </nav>
    )
}

export default Header