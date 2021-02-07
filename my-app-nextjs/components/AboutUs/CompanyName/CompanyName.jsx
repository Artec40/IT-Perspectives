import React from 'react'
import s from './CompanyName.module.scss'

const CompanyName = ({logo, name}) => {
    return (<div className={s.CompanyName}>
            <img src={logo}/>
            <h1>{name}</h1>
        </div>
    )
}

export default CompanyName