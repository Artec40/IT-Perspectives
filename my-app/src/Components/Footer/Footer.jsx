import React from 'react'
import s from './Footer.module.css'
import telegram from './icon_telegram.png'
import facebook from './icon_facebook.png'
import twitter from './icon_twitter.png'
import vk from './icon_vk.png'
import instagram from './icon_instagram.png'

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.text}>Узнать больше</div>
            <div className={s.item}><img /></div>
            <div className={s.item}><img src={telegram}/></div>
            <div className={s.item}><img src={facebook}/></div>
            <div className={s.item}><img src={twitter}/></div>
            <div className={s.item}><img src={vk}/></div>
            <div className={s.item}><img src={instagram}/></div>
        </div>
    )
}

export default Footer