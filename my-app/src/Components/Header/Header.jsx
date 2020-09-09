import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    console.log(props.logo)
    return (
        <nav className={s.Header}>
            <img src={props.logo}/>
            <NavLink className={s.about_us && s.item} to={'/aboutUs'}>О НАС</NavLink>
            <NavLink className={s.services_price && s.item} to={'/services'}>УСЛУГИ И ЦЕНООБРАЗОВАНИЕ</NavLink>
            <NavLink className={s.contacts && s.item} to={'/supportPrice'}>КОНТАКТЫ</NavLink>
        </nav>
    )
}

export default Header