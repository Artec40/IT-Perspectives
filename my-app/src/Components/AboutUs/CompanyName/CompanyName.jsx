import React from 'react'
import s from './CompanyName.module.css'

const CompanyName = ({logo, name}) => {
    return (<div className={s.CompanyName}>
            <div><img src={logo}/></div>
            <div>{name}</div>
        </div>
    )
}

export default CompanyName