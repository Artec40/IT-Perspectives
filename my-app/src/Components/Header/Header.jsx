import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className={s.Header}>
            <div className={s.item}><img src={props.logo}/></div>
            <div className={s.item}><NavLink to={'/aboutUs'}>О НАС</NavLink></div>
            <div className={s.item}><NavLink to={'/services'}>УСЛУГИ</NavLink></div>
            <div className={s.item}><NavLink to={'/supportPrice'}>ЦЕНООБРАЗОВАНИЕ</NavLink></div>
            <div className={s.item}><NavLink to={'/contacts'}>КОНТАКТЫ</NavLink></div>
        </nav>
    )
}

export default Header