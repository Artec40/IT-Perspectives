import React from 'react'
import s from './KillerFeature.module.scss'

const KillerFeature = ({
                           title,
                           description,
                           image
                       }) => {

    return <div className={s.KillerFeature}>
        <h2 className={s.Title}>{title}</h2>
        <div className={s.Description}>{description}</div>
        <img src={image}/>
        <div className={s.OrangeCrap}></div>
    </div>
}

export default KillerFeature