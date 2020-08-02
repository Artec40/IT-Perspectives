import React from 'react'
import s from './CompanyName.module.css'

const CompanyName = (props) => {
    return (<div className={s.CompanyName}>
            <div><img src={props.logo}/></div>
            <div>{props.name}</div>
        </div>
    )
}

export default CompanyName