import React from 'react'
import s from './CompanyName.module.css'

const CompanyName = ({logo, name}) => {
    return (<div className={s.CompanyName}>
            <img src={logo}/>
            <div>{name}</div>
        </div>
    )
}

export default CompanyName