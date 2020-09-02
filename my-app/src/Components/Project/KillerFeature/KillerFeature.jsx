import React from 'react'
import s from './KillerFeature.module.scss'

const KillerFeature = ({killerFeature}) => {
    return <div className={s.KillerFeature}>
        <h2 className={s.Title}>{killerFeature.killerFeatureName}</h2>
        <div className={s.Description}>{killerFeature.killerFeatureDescription}</div>
        <img src={killerFeature.killerFeatureImage}/>
        <div className={s.OrangeCrap}></div>
    </div>
}

export default KillerFeature