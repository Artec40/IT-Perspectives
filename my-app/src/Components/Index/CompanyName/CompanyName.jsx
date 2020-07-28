import React from 'react'
import s from './CompanyName.module.css'
import icon from '../../Header/favicon.ico'

const CompanyName = () => {
    return (<div className={s.CompanyName}>
            <div><img src={icon}/></div>
            <div>ИТ Перспективы</div>
        </div>
    )
}

export default CompanyName