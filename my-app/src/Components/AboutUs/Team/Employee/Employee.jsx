import React from 'react'
import s from './Employee.module.css'

const Employee = (props) => {
    return <div className={s.Employee}><a>
        <div><img src={props.image}/></div>
        <div className={s.title}>{props.name}</div>
    </a></div>
}

export default Employee