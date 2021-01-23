import React from 'react'
import Link from 'next/link'
import s from './Employee.module.scss'

const Employee = (props) => {
    return <Link href={'/employee/' + props.id}>
        <div className={s.Employee}>
            <img src={props.image}/>
            <h4>{props.name}</h4>
        </div>
    </Link>
}

export default Employee