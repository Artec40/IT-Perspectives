import React from 'react'
import s from './Employee.module.css'

const Employee = (props) => {
    return <div className={s.Employee}>
        <img src={props.image}/>
        <div className={s.title}>{props.name}</div>
    </div>
}

export default Employee