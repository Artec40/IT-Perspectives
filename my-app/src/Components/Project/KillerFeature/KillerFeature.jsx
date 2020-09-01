import React from 'react'
import s from './KillerFeature.module.css'

const KillerFeature = ({killerFeature}) => {
    return <div className={s.KillerFeature}>
        <div className={s.Title}>{killerFeature.killerFeatureName}</div>

            <div className={s.Description}>{killerFeature.killerFeatureDescription}</div>
            <div className={s.img}><img src={killerFeature.killerFeatureImage}/></div>

        <div className={s.OrangeCrap}></div>
    </div>
}

export default KillerFeature