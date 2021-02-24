import React from 'react'
import Link from 'next/link'
import s from './Employee.module.scss'
import {AboutUsPageEmployeeTypeSelector} from '../../../types/types'

const Employee: React.FC<AboutUsPageEmployeeTypeSelector> = ({id, image, name}) => {
    if (id === 0)
        return <div className={s.Employee}>
            <img src={image}/>
            <h4>{name}</h4>
        </div>
    else
        return <Link href={'/employee/' + id}>
            <div className={s.Employee}>
                <img src={image}/>
                <h4>{name}</h4>
            </div>
        </Link>
}

export default Employee