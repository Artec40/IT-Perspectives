import React from 'react'
import s from './Employee.module.scss'

const Employee = (props) => {
    return <div className={s.Employee}>
        <img src={props.image}/>
        <h4>{props.name}</h4>
    </div>
}

export default Employee