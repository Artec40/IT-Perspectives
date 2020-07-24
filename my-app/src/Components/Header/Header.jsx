import React from 'react'
import s from './Header.module.css'
import icon from './icon_arnold.png'

const Header = () => {
    return (
        <nav className={s.Header}>
            <div className={s.item}><img src={icon}/></div>
            <div className={s.item}><a>О НАС</a></div>
            <div className={s.item}><a>УСЛУГИ</a></div>
            <div className={s.item}><a>ЦЕНООБРАЗОВАНИЕ</a></div>
            <div className={s.item}><a>КОНТАКТЫ</a></div>
        </nav>
    )
}

export default Header